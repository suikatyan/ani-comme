<template>
  <v-card
    :style="styles"
    class="elevation-0 full-height full-width"
  >
    <font :font-family="config.font" />
    <transition-group
      name="chat-transition"
      :enter-active-class="animationIn"
      :leave-active-class="animationOut"
      leave-to-class="invisible"
      :class="itemClasses"
      class="d-flex flex-grow-1 flex-wrap full-height"
    >
      <chat-component
        v-for="chat in internalChats"
        :key="chat.uid"
        :config="config"
        :chat="chat"
        flat
        class="chat-item animate__faster"
      />
    </transition-group>
  </v-card>
</template>

<style scoped>
.smooth .chat-item {
  transition: all 0.5s;
}

.chat-item {
  width: 100%;
}

.full-height {
  height: 100%;
}

.full-width {
  width: 100%;
}

.invisible {
  opacity: 0;
}
</style>

<script>
import ChatComponent from '@/components/chat/Chat'
import Font from '@/components/common/Font'

export default {
  components: {
    ChatComponent,
    Font,
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
    chats: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      internalChats: [].concat(...this.chats),
    }
  },
  computed: {
    styles() {
      return {
        fontFamily: this.config.font.join(','),
        fontSize: this.config.fontSize,
        backgroundColor: this.config.backgroundColor,
        borderRadius: this.config.chatAreaRounded ? '4px' : 0,
      }
    },
    itemClasses() {
      return {
        'align-start': !this.config.fromBottom,
        'align-end': !this.config.fromBottom,
        'align-content-start': !this.config.fromBottom,
        'align-content-end': this.config.fromBottom,
        smooth: this.config.smooth,
      }
    },
    animationIn() {
      if (this.config.animationIn === 'none') {
        return ''
      }
      return `animate__animated animate__${this.config.animationIn}`
    },
    animationOut() {
      if (this.config.animationIn === 'none') {
        return ''
      }
      return `animate__animated animate__${this.config.animationOut}`
    },
  },
  watch: {
    chats(chats) {
      const chat = chats[chats.length - 1]

      if (chat.type === 'comment') {
        if (this.config.fromBottom) {
          this.internalChats.push(chat)
        } else {
          this.internalChats.unshift(chat)
        }

        // 一定時間経過後に消す。
        if (this.config.durationTime !== 0) {
          setTimeout(() => {
            const index = this.internalChats.findIndex(cht => cht.uid === chat.uid)
            if (index !== -1) {
              this.internalChats.splice(index, 1)
            }
          }, this.config.durationTime * 1000)
        }
      } else if (chat.type === 'command:clear') {
        this.internalChats.splice(0, this.internalChats.length)
      }
    },
  },
}
</script>
