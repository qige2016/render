import { h } from './h'
import render from './render'

// 子组件类 1
class ChildComponent1 {
  render() {
    return h('div', null, '子组件 1')
  }
}
// 子组件类 2
class ChildComponent2 {
  render() {
    return h('div', null, '子组件 2')
  }
}
// 父组件类
class ParentComponent {
  isTrue = true

  mounted() {
    setTimeout(() => {
      this.isTrue = false
      this._update()
    }, 2000)
  }

  render() {
    return this.isTrue ? h(ChildComponent1) : h(ChildComponent2)
  }
}
// 有状态组件 VNode
const compVNode = h(ParentComponent)

render(compVNode, document.getElementById('app'))
