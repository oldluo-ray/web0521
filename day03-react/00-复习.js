/*


    react 用于构建用户界面的js库 

    要使用的两个包是什么? 

        react.js  提供了react的核心api
        react-dom.js 提供了操作网页dom的api
        先引入react,再引入react-dom. 因为react-dom依赖于react


    React.createElement('标签名',{属性: 值}, 子节点) 返回一个虚拟dom.react会根据虚拟dom创建真实的dom对象

    ReactDOM.render(虚拟dom, dom树某个真实节点的dom对象)



    jsx (js xml) 是一个语法糖. 最终还是会编译成React.createElement去创建虚拟dom. 但是使用jsx会让书写代码的过程中,变得更加简单

    const div = <div id="box" className=""><p><span></span></p></div>

    jsx被谁编译? 被babel编译

    




*/
