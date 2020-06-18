<template>
  <span>
    {{ chat.name }}
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
