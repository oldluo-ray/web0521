import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Modal,
  Toast
} from 'antd-mobile'
import {sendCode} from '../../../api/login'
import {verifyCode} from '../../../api/registe'
import './index.css'
import msg from './msg.png'
const num = 5
let code 
export default class VerifyCode extends Component {
  state = {
    downCount: num,
    isClick: false,
    isDisabled: true
  }
   componentDidMount(){
  
    this.sendCodeHandle()

  }

  sendCodeHandle = async ()=>{
    this.setState({
      isClick:false
    })
        // console.log(this.props.phone);
     // 给指定的手机号发送axios请求,给手机号发送验证码
     await sendCode(this.props.phone)
     // 按钮倒计时
     let timeid = setInterval(() => {
      const {downCount} = this.state
      
      if(downCount === 1){
        clearInterval(timeid)
        this.setState({
          isClick: true,
          downCount: num
        })
      }else{
        this.setState({
          downCount: downCount - 1
        })
      }
    
     }, 1000);

  }

  // 点击按钮重新发送请求
  reSendCodeHandle = () => {
    // 如果按钮是灰色的情况下,就不执行后续的逻辑
    if(!this.state.isClick) return
   
    this.sendCodeHandle()
  }

  // 用户输入验证码的事件处理函数
  changeHandle = (value) => {
    if(/^\d{6}$/.test(value)){
       //让按钮高亮
       this.setState({
         isDisabled: false
       })
       code = value
    }else{
      // 让按钮禁用
      this.setState({
        isDisabled: true
      })
    }
  }

  verifyCodeHandle = async () => {
    const phone = this.props.phone
    const result = await verifyCode(phone, code)
    if(result.data.success){
      // 跳到密码页面
      this.props.history.push('/verifyPassword')
    }else{
      // 验证码有问题,提示一下用户
      Toast.fail(result.data.message)
    }
  } 
  render() {
    const {downCount,isClick, isDisabled} = this.state
    return (
      <div className='wrap'>
        <NavBar
          mode='light'
          icon={<Icon type='left' color='#000' />}
          onLeftClick={console.log(111)}
        >
          硅谷注册
        </NavBar>
        <WhiteSpace size='lg'></WhiteSpace>

        <WingBlank size='lg'>
          <div className='img'>
            <img src={msg} alt='' />
          </div>
          <WhiteSpace size='lg'></WhiteSpace>
          <WingBlank size='lg'>
            <div>
              我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话
            </div>
          </WingBlank>
          <WhiteSpace size='lg'></WhiteSpace>

          <div className='code'>
            <InputItem clear placeholder='请输入手机验证码' onChange={this.changeHandle}></InputItem>
            <button className={isClick ? 'code-btn active' :'code-btn'} onClick={this.reSendCodeHandle}>{isClick ? '获取验证码' : `重新发送(${downCount})s`}</button>
          </div>
          <WingBlank size='lg'>
            <Button className='code-next' type='warning' disabled={isDisabled} onClick={this.verifyCodeHandle}>
              下一步
            </Button>
          </WingBlank>
          <WingBlank size='lg'>
            遇到问题了?
            <a href=''>请联系客服</a>
          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
