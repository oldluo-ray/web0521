function Compile(el, vm) {
  this.$vm = vm

  this.$el = this.isElementNode(el) ? el : document.querySelector(el)

  if (this.$el) {
    // 将dom节点从dom树移除,添加到文档碎片中
    this.$fragment = this.node2Fragment(this.$el)
    // 解析文档碎片中的dom节点
    this.init()
    // 将解析后的文档碎片,添加到dom书上
    this.$el.appendChild(this.$fragment)
  }
}

Compile.prototype = {
  node2Fragment: function (el) {
    var fragment = document.createDocumentFragment(),
      child

    while ((child = el.firstChild)) {
      fragment.appendChild(child)
    }

    return fragment
  },

  init: function () {
    this.compileElement(this.$fragment)
  },

  // 解析节点
  compileElement: function (el) {
    var childNodes = el.childNodes,
      me = this
    // 循环,解析每一个节点
    ;[].slice.call(childNodes).forEach(function (node) {
      var text = node.textContent

      var reg = /\{\{(.*)\}\}/

      if (me.isElementNode(node)) {
        // 解析元素节点的属性(指令)
        me.compile(node)
      } else if (me.isTextNode(node) && reg.test(text)) {
        // 解析文本(有插值),给dom标签,真正的赋值
        me.compileText(node, RegExp.$1)
      }

      if (node.childNodes && node.childNodes.length) {
        // 递归进去,找子节点,然后解析子节点
        me.compileElement(node)
      }
    })
  },

  compile: function (node) {
    var nodeAttrs = node.attributes,
      me = this

    ;[].slice.call(nodeAttrs).forEach(function (attr) {
      var attrName = attr.name

      if (me.isDirective(attrName)) {
        var exp = attr.value

        var dir = attrName.substring(2)

        if (me.isEventDirective(dir)) {
          compileUtil.eventHandler(node, me.$vm, exp, dir)
        } else {
          compileUtil[dir] && compileUtil[dir](node, me.$vm, exp)
        }
        node.removeAttribute(attrName)
      }
    })
  },

  compileText: function (node, exp) {
    compileUtil.text(node, this.$vm, exp)
  },

  isDirective: function (attr) {
    return attr.indexOf('v-') == 0
  },

  isEventDirective: function (dir) {
    return dir.indexOf('on') === 0
  },

  isElementNode: function (node) {
    return node.nodeType == 1
  },

  isTextNode: function (node) {
    return node.nodeType == 3
  },
}

var compileUtil = {
  text: function (node, vm, exp) {
    this.bind(node, vm, exp, 'text')
  },

  html: function (node, vm, exp) {
    this.bind(node, vm, exp, 'html')
  },

  model: function (node, vm, exp) {
    this.bind(node, vm, exp, 'model')

    var me = this,
      val = this._getVMVal(vm, exp)
    node.addEventListener('input', function (e) {
      //v-model指令.监听用户输入的代码
      var newValue = e.target.value
      if (val === newValue) {
        return
      }

      me._setVMVal(vm, exp, newValue)
      val = newValue
    })
  },

  class: function (node, vm, exp) {
    this.bind(node, vm, exp, 'class')
  },

  bind: function (node, vm, exp, dir) {
    var updaterFn = updater[dir + 'Updater']

    updaterFn && updaterFn(node, this._getVMVal(vm, exp))

    new Watcher(vm, exp, function (value, oldValue) {
      updaterFn && updaterFn(node, value, oldValue)
    })
  },

  eventHandler: function (node, vm, exp, dir) {
    var eventType = dir.split(':')[1],
      fn = vm.$options.methods && vm.$options.methods[exp]

    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false)
    }
  },

  _getVMVal: function (vm, exp) {
    var val = vm._data
    exp = exp.split('.')
    exp.forEach(function (k) {
      val = val[k]
    })
    return val
  },

  _setVMVal: function (vm, exp, value) {
    var val = vm._data
    exp = exp.split('.')
    exp.forEach(function (k, i) {
      if (i < exp.length - 1) {
        val = val[k]
      } else {
        val[k] = value
      }
    })
  },
}

var updater = {
  textUpdater: function (node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value
  },

  htmlUpdater: function (node, value) {
    node.innerHTML = typeof value == 'undefined' ? '' : value
  },

  classUpdater: function (node, value, oldValue) {
    var className = node.className
    className = className.replace(oldValue, '').replace(/\s$/, '')

    var space = className && String(value) ? ' ' : ''

    node.className = className + space + value
  },

  modelUpdater: function (node, value, oldValue) {
    node.value = typeof value == 'undefined' ? '' : value
  },
}
