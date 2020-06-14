<template>
  <v-select
    v-model="model"
    :items="animationList"
    @input="onInput"
  />
</template>

<script>
export default {
  props: {
    animation: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      model: this.animation,
      animationList: [
        'none',
        'backOutDown',
        'backOutLeft',
        'backOutRight',
        'backOutUp',
        'fadeOut',
        'fadeOutDown',
        'fadeOutLeft',
        'fadeOutRight',
        'fadeOutUp',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft',
        'flipOutX',
        'lightSpeedOutRight',
        'lightSpeedOutLeft',
        'rotateOutDownLeft',
        'rotateOutDownRight',
        'rotateOutUpLeft',
        'rotateOutUpRight',
        'zoomOut',
        'zoomOutDown',
        'zoomOutLeft',
        'zoomOutRight',
        'zoomOutUp',
        'slideOutDown',
        'slideOutLeft',
        'slideOutRight',
        'slideOutUp',
      ],
    }
  },
  methods: {
    onInput(animation) {
      this.$emit(
        'input',
        animation,
      )
    },
  },
}
</script>
