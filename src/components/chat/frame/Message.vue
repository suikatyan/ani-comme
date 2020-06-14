<template>
  <div>
    {{ chat.message }}
  </div>
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
