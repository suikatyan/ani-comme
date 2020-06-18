<template>
  <span>
    <date :chat="chat" /> <number :chat="chat" /> <name :chat="chat" />
  </span>
</template>

<script>
import Date from '@/components/chat/frame/Date'
import Name from '@/components/chat/frame/Name'
import Number from '@/components/chat/frame/Number'

export default {
  components: {
    Number,
    Name,
    Date,
  },
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
}
</script>
