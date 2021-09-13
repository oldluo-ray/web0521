/*

    表单处理


        受控组件: 值被组件的状态控制的表单项元素 

        <input type="text"  value={this.state.xxx} onChange={()=>{this.setState({
            xxx: 值
        })}}/>



        非受控组件: 直接操作dom 
         
            1. 创建ref对象
                const ref对象 = React.createRef()   
            2. 绑定ref对象和虚拟dom 
                <input type="text"  ref={ref对象}/>
            3. 获取真实dom
                ref对象.current         















*/