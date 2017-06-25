'use strict'

// https://github.com/osano/cookieconsent/blob/dev/src/options/popup.js
window.addEventListener('load', () => {
  window.cookieconsent.utils.setCookie = () => {}
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
    dismissOnScroll: true,
    content: {
      message: "I know how to, but I don't<br />use cookies here.",
      dismiss: 'OK!',
      link: '',
    },
  })
})
