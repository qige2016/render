import { h, Fragment } from './h'
import render from './render'

const elementVNode = h(
  'div',
  {
    style: {
      height: '100px',
      width: '100px',
      background: 'red'
    }
  },
  h(Fragment, null, [
    h('span', null, '我是标题1......'),
    h('span', null, '我是标题2......')
  ])
)

render(elementVNode, document.getElementById('app'))
