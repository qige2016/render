import { h } from './h'
import render from './render'

// 子组件类
class ChildComponent {
  render() {
    return h('div', null, this.$props.text)
  }
}
// 父组件类
class ParentComponent {
  localState = 'one'

  mounted() {
    setTimeout(() => {
      this.localState = 'two'
      this._update()
    }, 2000)
  }

  render() {
    return h(ChildComponent, {
      text: this.localState
    })
  }
}
// 有状态组件 VNode
const compVNode = h(ParentComponent)

render(compVNode, document.getElementById('app'))
