import { h } from './h'
import render from './render'

// 旧的 VNode
const prevVNode = h('p', null, '旧文本')

// 新的 VNode
const nextVNode = h('p', null, '新文本')

render(prevVNode, document.getElementById('app'))

// 2秒后更新
setTimeout(() => {
  render(nextVNode, document.getElementById('app'))
}, 2000)
