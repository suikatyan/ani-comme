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
        'backInDown',
        'backInLeft',
        'backInRight',
        'backInUp',
        'fadeIn',
        'fadeInDown',
        'fadeInLeft',
        'fadeInRight',
        'fadeInUp',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight',
        'flipInX',
        'lightSpeedInRight',
        'lightSpeedInLeft',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideInUp',
      ],
    }
  },
  watch: {
    animation() {
      this.model = this.animation
    },
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
