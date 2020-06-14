<template>
  <div>
    <component :is="layout" />
  </div>
</template>

<style lang="scss">
@import "~animate.css/animate.min.css";
</style>

<script>
import BlankLayout from '@/components/layouts/BlankLayout'
import DefaultLayout from '@/components/layouts/DefaultLayout'


export default {
  components: {
    DefaultLayout,
    BlankLayout,
  },
  data() {
    return {
      layout: 'DefaultLayout',
    }
  },
  created() {
    if (this.$route.meta.layout) {
      this.layout = this.$route.meta.layout
    }
  },
}
</script>
