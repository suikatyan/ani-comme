<template>
  <div class="about">
    <v-breadcrumbs :items="breads">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h2>This is a about page</h2>
  </div>
</template>
<script>
export default {
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
