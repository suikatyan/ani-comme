export default {
  font: [
    'Noto Sans JP',
    'sans-serif',
  ],
  backgroundColor: '#FFFFFF00',
  fontSize: '14px',
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  durationTime: 10,
  fromBottom: false,
  chatAreaRounded: true,
  commentAreaShadow: true,
  smooth: true,
  niconico: {
    backgroundColor: '#96D3B2AA',
    commentAreaRounded: true,
    shadow: false,
  },
  youtube: {
    backgroundColor: '#A9A8FFAA',
    commentAreaRounded: true,
    shadow: false,
  },
  layout: [
    [
      {
        content: 'date-name',
        align: 'left',
        color: '#000000FF',
        autoWidth: false,
      },
      {
        content: 'site',
        align: 'right',
        color: '#000000FF',
        autoWidth: true,
      },
    ],
    [
      {
        content: 'message',
        align: 'left',
        color: '#000000FF',
        autoWidth: false,
      },
    ],
  ],
}
