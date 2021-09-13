import React from 'react'
import {Provider} from 'react-redux'
import Count from './components/Count'
import store from './redux/store'
export default function App() {
    return (
        // 这个Provider是react-redux中提供的Provider组件, 内部的原理就是react基础中的context.Provider .目的是为了将store对象,传递给当前项目中任何一个需要使用store对象的子组件
        <Provider store={store}>
            {/* 这里的Count,其实不是真正的Count,是connect创建出来的高阶组件 */}
            <Count></Count>
        </Provider>
    )
}
