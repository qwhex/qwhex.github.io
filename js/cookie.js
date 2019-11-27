'use strict'

window.addEventListener('load', function() {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#161816',
        text: '#f7fbfc',
      },
      button: {
        background: '#f71559',
      },
    },
    theme: 'edgeless',
    position: 'bottom-left',
    content: {
      message: 'I know how to use cookies.',
      dismiss: 'OK!',
    },
  })
})
