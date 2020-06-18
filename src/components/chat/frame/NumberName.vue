<template>
  <span>
    <number :chat="chat" /> <name :chat="chat" />
  </span>
</template>

<script>
import Name from '@/components/chat/frame/Name'
import Number from '@/components/chat/frame/Number'

export default {
  components: {
    Number,
    Name,
  },
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
}
</script>
