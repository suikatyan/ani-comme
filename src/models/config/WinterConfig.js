export default {
  font: [
    'Noto Sans JP',
    'sans-serif',
  ],
  backgroundColor: '#1148976F',
  fontSize: '16px',
  animationIn: 'fadeInLeft',
  animationOut: 'fadeOutLeft',
  durationTime: 10,
  fromBottom: false,
  chatAreaRounded: true,
  commentAreaShadow: true,
  smooth: true,
  niconico: {
    backgroundColor: '#083A41AB',
    commentAreaRounded: true,
    shadow: false,
  },
  youtube: {
    backgroundColor: '#083A41AB',
    commentAreaRounded: true,
    shadow: false,
  },
  layout: [
    [
      {
        content: 'number',
        align: 'left',
        color: '#D30F0FFF',
        autoWidth: true,
      },
      {
        content: 'name',
        align: 'left',
        color: '#F5AF4DFF',
        autoWidth: false,
      },
    ],
    [
      {
        content: 'message',
        align: 'left',
        color: '#C8F9FFAB',
        autoWidth: false,
      },
    ],
  ],
}
