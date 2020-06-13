<template>
  <v-card>
    <chat-component
      v-for="chat in chats_"
      :key="chat.id"
      :config="config"
      :chat="chat"
    />
  </v-card>
</template>

<script>
import ChatComponent from '@/components/chat/Chat'

export default {
  'components': {
    ChatComponent
  },
  'props': {
    'config': {
      'type': Object,
      'required': true
    },
    'chats': {
      'type': Array,
      'required': []
    }
  },
  data () {
    return {
      'chats_': this.chats
    }
  },
  'watch': {
    chats (chats) {
      const chat = chats[chats.length - 1]
      console.log(chat)
    }
  }
}
</script>
