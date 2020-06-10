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
        'backInDown',
        'backInLeft',
        'backInRight',
        'backInUp',
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight',
        'flipInX',
        'flipInY',
        'lightSpeedInRight',
        'lightSpeedInLeft',
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'jackInTheBox',
        'rollIn',
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp',
        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideInUp',
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