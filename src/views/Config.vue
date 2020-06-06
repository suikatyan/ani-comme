<template>
  <div class="config">
    <v-breadcrumbs :items="breads">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h2>This is a config page</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breads: [
        { text: 'トップ', to: '/' },
        { text: '設定', to: '/config', disabled: true },
      ],
    }
  },
}
</script>
