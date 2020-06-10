<template>
  <div class="chat">
    <h1>This is a chat page</h1>
    {{ id }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      id:  null,
    }
  },
  mounted() {
    this.id = this.$route.query.id
  }
};
</script>
