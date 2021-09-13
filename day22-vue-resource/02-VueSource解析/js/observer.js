function Observer(data) {
  this.data = data
  this.walk(data)
}

Observer.prototype = {
  walk: function (data) {
    var me = this
    Object.keys(data).forEach(function (key) {
      me.defineReactive(data, key, data[key])
    })
  },

  defineReactive: function (data, key, val) {
    var dep = new Dep()

    var childObj = observe(val)

    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,

      get: function () {
        // 当访问源数据data的属性时触发
        // 每一个数据,都应该有一个对应Wather对象.这个当数据发生变化的时候,会触发watcher对象的回调函数,为了让视图更新
        // dep和watcher的关系:
        // dep里面存储了watcher, watcher中也存储了dep
        // 为什么他俩要互相存? 为了保证一个数据对应一个wacher
        if (Dep.target) {
          dep.depend()
        }
        return val
      },
      set: function (newVal) {
        // 当修改源数据data的属性的值时触发
        if (newVal === val) {
          return
        }

        val = newVal
        // 为什么这里有observe一次. 因为有可以新的数据是一个对象.而这个新的对象会添加到源数据中.源数据中的所有属性,都应该被劫持
        childObj = observe(newVal)
        // 修改视图,让watcher里面存储最新的数据
        dep.notify()
      },
    })
  },
}

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }

  return new Observer(value)
}

var uid = 0

function Dep() {
  this.id = uid++
  this.subs = []
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub)
  },

  depend: function () {
    Dep.target.addDep(this)
  },

  removeSub: function (sub) {
    var index = this.subs.indexOf(sub)
    if (index != -1) {
      this.subs.splice(index, 1)
    }
  },

  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update()
    })
  },
}

Dep.target = null
