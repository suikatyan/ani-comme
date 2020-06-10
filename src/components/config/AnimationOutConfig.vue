<template>
  <v-select
    v-model='model'
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
    }
  },
  data() {
    return {
      model: this.animation,
      animationList: [
        'backOutDown',
        'backOutLeft',
        'backOutRight',
        'backOutUp',
        'bounceOut',
        'bounceOutDown',
        'bounceOutLeft',
        'bounceOutRight',
        'bounceOutUp',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft',
        'flipOutX',
        'flipOutY',
        'lightSpeedOutRight',
        'lightSpeedOutLeft',
        'rotateOut',
        'rotateOutDownLeft',
        'rotateOutDownRight',
        'rotateOutUpLeft',
        'rotateOutUpRight',
        'hinge',
        'rollOut',
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
      this.$emit('input', animation)
    },
  },
}
</script>