import { h } from './h'
import render from './render'

function handler() {
  alert('click me')
}

const elementVnode = h('div', {
  style: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  },
  onclick: handler
})

render(elementVnode, document.getElementById('app'))
