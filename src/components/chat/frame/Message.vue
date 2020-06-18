<template>
  <span>
    {{ chat.message }}
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
}
</script>
