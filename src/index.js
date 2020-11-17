import { h } from './h'
import render from './render'

// 旧的 VNode
const prevVNode = h('div', null, [
  h('p', { key: 'a' }, '节点1'),
  h('p', { key: 'b' }, '节点2'),
  h('p', { key: 'c' }, '节点3'),
  h('p', { key: 'd' }, '节点4'),
  h('p', { key: 'f' }, '节点6'),
  h('p', { key: 'h' }, '节点8'),
  h('p', { key: 'e' }, '节点5')
])

// 新的 VNode
const nextVNode = h('div', null, [
  h('p', { key: 'a' }, 'new 节点1'),
  h('p', { key: 'c' }, 'new 节点3'),
  h('p', { key: 'd' }, 'new 节点4'),
  h('p', { key: 'b' }, 'new 节点2'),
  h('p', { key: 'g' }, 'new 节点7'),
  h('p', { key: 'e' }, 'new 节点5')
])

render(prevVNode, document.getElementById('app'))

// 2秒后更新
setTimeout(() => {
  render(nextVNode, document.getElementById('app'))
}, 2000)
