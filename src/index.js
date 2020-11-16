import { h } from './h'
import render from './render'

// 组件类
class MyComponent {
  localState = 'one'

  mounted() {
    setTimeout(() => {
      this.localState = 'two'
      this._update()
    }, 2000)
  }

  render() {
    return h('div', null, this.localState)
  }
}
// 有状态组件 VNode
const compVNode = h(MyComponent)

render(compVNode, document.getElementById('app'))
