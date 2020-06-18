<template>
  <span>
    <date :chat="chat" /> <name :chat="chat" />
  </span>
</template>

<script>
import DateComponent from '@/components/chat/frame/Date'
import Name from '@/components/chat/frame/Name'

export default {
  components: {
    Date: DateComponent,
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
