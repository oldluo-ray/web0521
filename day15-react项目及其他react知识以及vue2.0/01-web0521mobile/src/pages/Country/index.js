import React, {useEffect, useState} from 'react'
import { NavBar, Icon,List } from 'antd-mobile'
import {getCountryData} from '../../api/common'
import './index.css'
const Item = List.Item
export default function Country(props) {
    const [list,setList] = useState({})
    useEffect(async ()=>{

        const result = await getCountryData()
        setList(result.data.data)

    },[])

    const keysArr = Object.keys(list)

    // 点击导航,跳转到指定的视图
    function clickHandle (e) {
        e.preventDefault()

        // 要跳转到谁的位置上
        const id = e.target.dataset.id
    
        // 真实的dom对象.scrollIntoView()
        document.querySelector(`#${id}`).scrollIntoView()

    }

    // 点击国家或地址的选项,存储区号到本地缓存,返回到上一个路径
    function itemClickHandle (area) {
        return (e) => {
            localStorage.setItem('area', area)
            props.history.goBack()
        }
    }


    return (
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" color="black" />}
                onLeftClick={() => console.log('onLeftClick')}
            >
                硅谷注册登录
            </NavBar>
            {/* list是一个对象, 有多少个键,就应该有多少个List组件 */}
            <div className="country-nav">
                {keysArr.map(item=><a key={item} href="" onClick={clickHandle} data-id={item}>{item}</a>)}
            </div>
            <div className="country-list">
            {
               keysArr.map(key=>{
                   const itemArr = list[key]
                   return <List key={key} renderHeader={() => key} className="my-list" id={key}>
                    {
                        itemArr.map((item,index)=>{
                            const key = Object.keys(item)[0]
                            return <Item key={index} extra={item[key]} onClick={itemClickHandle(item[key])}>{key}</Item>
                        })
                    }
               </List>
               })  
             }
            </div>
           
          
        </div>
    )
}
