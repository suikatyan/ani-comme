<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        mdi-help-circle-outline
      </v-icon>
    </template>
    <slot />
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    }
  },
}
</script>