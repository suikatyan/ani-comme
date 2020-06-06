<template>
  <div>
    <component :is="layout" />
  </div>
</template>

<script>
import DefaultLayout from '@/components/layouts/DefaultLayout'
import BlankLayout from '@/components/layouts/BlankLayout'

export default {
  components: {
    DefaultLayout,
    BlankLayout
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