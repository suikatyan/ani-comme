/* eslint-disable prefer-destructuring */
import sleep from '@/utils/sleep'

const CONTINUATION_URL = 'https://script.google.com/macros/s/AKfycbzADyclmGhDNzLW0m8hvfBgbmp1NyI95K8s63aPneVylzmkyllL/exec'
const GET_LIVE_CHAT_URL = 'https://suikatyan.nazo.cc/ani-comme/live_chat.php'

const getInitialContinuation = async liveId => {
  const url = `${CONTINUATION_URL}?id=${liveId}`
  const response = await fetch(url)
  const json = await response.json()
  return json.success ? json.continuation : ''
}

const getLiveChatTextMessageRenderer = action => {
  if (!Object.prototype.hasOwnProperty.call(action, 'addChatItemAction')) {
    return null
  }

  if (!Object.prototype.hasOwnProperty.call(action.addChatItemAction, 'item')) {
    return null
  }

  if (!Object.prototype.hasOwnProperty.call(action.addChatItemAction.item, 'liveChatTextMessageRenderer')) {
    return null
  }

  return action.addChatItemAction.item.liveChatTextMessageRenderer
}

const getMeta = response => {
  if (Object.prototype.hasOwnProperty.call(response.continuationContents.liveChatContinuation.continuations[0], 'timedContinuationData')) {
    return [
      response.continuationContents.liveChatContinuation.continuations[0].timedContinuationData.continuation,
      response.continuationContents.liveChatContinuation.continuations[0].timedContinuationData.timeoutMs,
    ]
  }

  return [
    response.continuationContents.liveChatContinuation.continuations[0].invalidationContinuationData.continuation,
    response.continuationContents.liveChatContinuation.continuations[0].invalidationContinuationData.timeoutMs,
  ]
}

const fetchChats = async (continuation, callback) => {
  const url = `${GET_LIVE_CHAT_URL}?continuation=${continuation}`
  const response = await fetch(url)
  const json = await response.json()

  if (!json.success) {
    await sleep(10000)
  }

  const chats = []

  if (json.content.response.continuationContents.liveChatContinuation.actions) {
    for (const action of json.content.response.continuationContents.liveChatContinuation.actions) {
      const chat = getLiveChatTextMessageRenderer(action)
      if (!chat) {
        continue
      }

      chats.push(action.addChatItemAction.item.liveChatTextMessageRenderer)
    }
  }

  const [newContinuation, time] = getMeta(json.content.response)


  callback({
    chats,
    time,
  })

  setTimeout(() => fetchChats(newContinuation, callback), time)
}

const listen = (initialContinuation, callback) => {
  fetchChats(initialContinuation, callback)
}

export {
  getInitialContinuation,
  listen,
}
