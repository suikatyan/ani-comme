<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    max-width="300px"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="model"
        v-bind="attrs"
        color="primary"
        readonly
        v-on="on"
      >
        <template v-slot:prepend>
          <v-icon
            :color="model"
            class="ichimatsu"
          >
            mdi-circle
          </v-icon>
        </template>
      </v-text-field>
    </template>
    <v-color-picker
      v-model="model"
      mode="hexa"
      @update:color="onUpdate"
    />
  </v-menu>
</template>

<style scoped>
.ichimatsu {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat;
  border-radius: 50%;
}
</style>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menu: false,
      model: this.color,
    }
  },
  methods: {
    onUpdate(color) {
      this.$emit(
        'update',
        color.hexa,
      )
    },
  },
}
</script>
