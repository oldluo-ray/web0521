import React,{useEffect,useState} from 'react'
import {
  Button,
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
} from 'antd-mobile'
import { Link } from 'react-router-dom'
import './index.css'
export default function Login(props) {
  const [area, setArea] = useState(86)
  useEffect(()=>{
        const area = localStorage.getItem('area') || 86
        setArea(area)
  },[])
  return (
    <div className="wrap">
      <NavBar
        mode="light"
        icon={<Icon type="left" color="black" />}
        onLeftClick={() => console.log('onLeftClick')}
      >
        硅谷注册登录
      </NavBar>

      <WingBlank>
        <InputItem clear placeholder="请输入手机号">
          <div className="input-phone" onClick={()=>{
            props.history.push('/country')
          }}>
            <span>+</span>
            <span>{area}</span>
            <Icon type="down"></Icon>
          </div>
        </InputItem>
        <WhiteSpace></WhiteSpace>
        <div className="input-code">
          <InputItem placeholder="请输入手机验证码"></InputItem>
          <div className="code-btn">获取验证码</div>
        </div>
        {/* <WhiteSpace></WhiteSpace> */}
        {/* <WhiteSpace></WhiteSpace> */}
        <WingBlank>
          <Button type="warning" disabled className="btn-login">
            登录
          </Button>
          <div className="link">
            <a href="">账户密码登录</a>
            <Link to="/verifyPhone">手机快速注册</Link>
          </div>

          <div className="other-login">
            <div className="line"></div>
            <div className="text">其他登录方式</div>
            <div className="line"></div>
          </div>

          <div className="icons">
            <i className="iconfont icon-github"></i>
            <i className="iconfont icon-wechat"></i>
            <i className="iconfont icon-qq"></i>
          </div>

          <div className="footer">
            未注册的手机号验证后将自动创建硅谷账号, 登录即代表您已同意
            <a href="">硅谷隐私政策</a>
          </div>
        </WingBlank>
      </WingBlank>
    </div>
  )
}
