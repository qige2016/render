const domPropsRE = /\W|^(?:value|checked|selected|muted)$/

export function patchData(el, key, prevValue, nextValue) {
  switch (key) {
    case 'style':
      // 遍历新 VNodeData 中的 style 数据，将新的样式应用到元素
      for (let k in nextValue) {
        el.style[k] = nextValue[k]
      }
      // 遍历旧 VNodeData 中的 style 数据，将已经不存在于新的 VNodeData 的数据移除
      for (let k in prevValue) {
        if (!nextValue.hasOwnProperty(k)) {
          el.style[k] = ''
        }
      }
      break
    case 'class':
      el.className = nextValue
      break
    default:
      if (key[0] === 'o' && key[1] === 'n') {
        // 事件
        // 移除旧事件
        if (prevValue) {
          el.removeEventListener(key.slice(2), prevValue)
        }
        // 添加新事件
        if (nextValue) {
          el.addEventListener(key.slice(2), nextValue)
        }
      } else if (domPropsRE.test(key)) {
        // 当做 DOM Prop 处理
        el[key] = nextValue
      } else {
        // 当做 Attr 处理
        el.setAttribute(key, nextValue)
      }
      break
  }
}
