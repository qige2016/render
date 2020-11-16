import { h, Portal } from './h'
import render from './render'

// 旧的 VNode
const prevVNode = h(
  Portal,
  { target: '#old-container' },
  h('p', null, '旧的 Portal')
)

// 新的 VNode
const nextVNode = h(
  Portal,
  { target: '#new-container' },
  h('p', null, '新的 Portal')
)

render(prevVNode, document.getElementById('app'))

// 2秒后更新
setTimeout(() => {
  render(nextVNode, document.getElementById('app'))
}, 2000)
