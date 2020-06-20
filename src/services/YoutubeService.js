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

const listen = async (initialContinuation, callback) => {
  let continuation = initialContinuation
  let time = 6000
  for (;;) {
    const url = `${GET_LIVE_CHAT_URL}?continuation=${continuation}`
    const response = await fetch(url)
    const json = await response.json()

    if (!json.success) {
      await sleep(10000)
    }

    const chats = []
    for (const action of json.content.response.continuationContents.liveChatContinuation.actions) {
      if (!Object.prototype.hasOwnProperty.call(action, 'addChatItemAction')) {
        continue
      }

      if (!Object.prototype.hasOwnProperty.call(action.addChatItemAction, 'item')) {
        continue
      }

      if (!Object.prototype.hasOwnProperty.call(action.addChatItemAction.item, 'liveChatTextMessageRenderer')) {
        continue
      }

      continuation = json.content.response.continuationContents.liveChatContinuation.continuations[0].timedContinuationData.continuation
      time = json.content.response.continuationContents.liveChatContinuation.continuations[0].timedContinuationData.timeoutMs

      chats.push(action.addChatItemAction.item.liveChatTextMessageRenderer)
    }

    callback({
      chats,
      time,
    })

    await sleep(time + 500)
  }
}

export {
  getInitialContinuation,
  listen,
}
