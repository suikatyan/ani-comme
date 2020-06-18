<template>
  <span>
    {{ chat.number }}
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
