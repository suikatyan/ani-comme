export default {
  font: [
    'Noto Sans JP',
    'sans-serif',
  ],
  backgroundColor: '#FFFFFF00',
  fontSize: '14px',
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  durationTime: 8,
  fromBottom: false,
  chatAreaRounded: true,
  commentAreaShadow: true,
  niconico: {
    backgroundColor: '#96D3B2AA',
    commentAreaRounded: true,
  },
  youtube: {
    backgroundColor: '#A9A8FFAA',
    commentAreaRounded: true,
  },
  layout: [
    [
      {
        content: 'time-name',
        align: 'left',
        color: '#000000FF',
        autoWidth: false,
      },
      {
        content: 'site',
        align: 'right',
        color: '#000000FF',
        autoWidth: false,
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
