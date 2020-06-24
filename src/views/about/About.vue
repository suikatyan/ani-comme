<template>
  <default-layout class="about">
    <v-breadcrumbs :items="breads">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h2>記載中……</h2>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/components/layouts/DefaultLayout'

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      breads: [
        {text: 'トップ',
          to: '/'},
        {text: 'このサイトについて',
          to: '/config',
          disabled: true},
      ],
    }
  },
}
</script>
