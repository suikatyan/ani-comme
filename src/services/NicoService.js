/* eslint-disable camelcase */
const WSS_API_URL = 'https://script.google.com/macros/s/AKfycbxcmTDe5Kqa590XZtTeabIrbI_T9P4whFJsTb9SeKgnEdfDs60k/exec'

const getWssUrl = async id => {
  const response = await fetch(`${WSS_API_URL}?id=${id}`)
  const json = await response.json()

  return json.success ? json.wss : ''
}

const getThreadId = wssUrl => {
  const socket = new WebSocket(wssUrl)
  return new Promise(resolver => {
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({
        type: 'startWatching',
        data: {
          reconnect: false,
          room: {
            commentable: true,
            protocol: 'webSocket',
          },
          stream: {
            chasePlay: false,
            latency: 'low',
            protocol: 'hls',
            quality: 'abr',
          },
        },
      }))
    })

    socket.addEventListener('message', e => {
      const message = JSON.parse(e.data)

      if (message.type !== 'room') {
        return
      }

      socket.close()

      resolver({
        threadId: message.data.threadId,
        messageWssUrl: message.data.messageServer.uri,
      })
    })
  })
}

const listen = (messageWssUrl, threadId, callback) => {
  const socket = new WebSocket(messageWssUrl)
  socket.addEventListener('open', () => {
    socket.send(JSON.stringify([
      {
        ping: {
          content: 'rs:0',
        },
      },
      {
        ping: {
          content: 'ps:0',
        },
      },
      {
        thread: {
          thread: threadId,
          version: '20061206',
          user_id: 'guest',
          res_from: 0,
          width_global: 1,
          scores: 1,
          nicoru: 0,
        },
      },
      {
        ping: {
          content: 'pf:0',
        },
      },
      {
        ping: {
          content: 'rf:0',
        },
      },
    ]))
  })

  socket.addEventListener('message', e => {
    callback(e)
  })
}

export {
  getWssUrl,
  getThreadId,
  listen,
}
