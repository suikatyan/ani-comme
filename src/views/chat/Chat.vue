<template>
  <blank-layout>
    <div class="chat">
      <chat-area
        :config="config"
        :chats="chats"
      />
    </div>
  </blank-layout>
</template>

<style>
.chat {
  height: 100%;
  margin: 4px;
  padding: 0;
  overflow: scroll;
}

* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
}

*:not(.chat *), .v-application {
  background-color: #00000000 !important;
}
</style>

<script>
import BlankLayout from '@/components/layouts/BlankLayout'
import ChatArea from '@/components/chat/ChatArea'
import ChatService from '@/services/ChatService'
import DefaultConfig from '@/models/config/DefaultConfig'
import DummyProvider from '@/services/chatProvider/Dummy'

export default {
  components: {
    BlankLayout,
    ChatArea,
  },
  data() {
    return {
      code: null,
      config: DefaultConfig,
      chats: [],
    }
  },
  mounted() {
    this.code = this.$route.query.code

    const chatService = new ChatService([new DummyProvider()], chat => {
      this.chats.push(chat)
    })

    chatService.start()
  },
}
</script>
