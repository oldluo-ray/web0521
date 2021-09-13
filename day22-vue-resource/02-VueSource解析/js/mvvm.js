function MVVM(options) {
  this.$options = options
  // 变量data和this._data 都指向data源数据
  var data = (this._data = this.$options.data)
  // 存储mvvm实例
  var me = this

  // 1. 数据代理: mvvm实例 代理了 data源数据
  // 将data源数据中所有的属性,添加到了mvvm实例上面.
  // 这样未来在模板中,就可以直接获取mvvn身上的属性,最终其实就拿到了源数据中的值
  Object.keys(data).forEach(function (key) {
    // 真正实现代理的方法
    // 只是将data源数据中的第一级数据代理到了mvvm身上
    me._proxy(key)
  })

  // 2. 数据劫持
  // debugger
  // 数据劫持就是将源数据重新定义. 利用递归.将源数据上所有的属性,以及属性对应值如果是对象,也会将这个对象中所有的属性,进行重新定义(所有的数据全部定义了getter和setter).
  observe(data, this)

  // 3. 编译模板
  // 3.1 将模板中的dom节点添加到文档碎片中
  // 3.2 解析文档碎片中的dom节点
  // 3.3 判断是否是元素节点,如果是元素节点则递归捕获当前节点的子节点
  // 3.4 当判断某个节点不是元素节点,而是文本节点时,则判断是否有插值
  // 3.5 如果没有插值就什么都不干,如果有插值则获取插值中的数据,然后将解析后的值插入到当前节点中
  // 3.6 解析完毕之后,将文档碎片,添加到dom树中,页面上渲染解析后的结果
  this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
  $watch: function (key, cb, options) {
    new Watcher(this, key, cb)
  },
  _proxy: function (key) {
    var me = this
    Object.defineProperty(me, key, {
      configurable: false,
      enumerable: true,
      get: function proxyGetter() {
        return me._data[key]
      },
      set: function proxySetter(newVal) {
        me._data[key] = newVal
      },
    })
  },
}
