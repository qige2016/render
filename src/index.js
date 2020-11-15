import { h } from './h'
import render from './render'

const elementVnode = h('input', {
  class: 'cls-a',
  type: 'checkbox',
  checked: true,
  custom: '1'
})

render(elementVnode, document.getElementById('app'))
