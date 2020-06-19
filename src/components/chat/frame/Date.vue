<template>
  <span>
    {{ displayTime }}
  </span>
</template>

<script>
export default {
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
  computed: {
    displayTime() {
      if (!this.chat.time) {
        return ''
      }

      return [
        this.chat.time.getHours().toString()
          .padStart(2, '0'),
        this.chat.time.getMinutes().toString()
          .padStart(2, '0'),
        // this.chat.time.getSeconds().toString()
        //   .padStart(2, '0'),
      ].join(':')
    },
  },
}
</script>
