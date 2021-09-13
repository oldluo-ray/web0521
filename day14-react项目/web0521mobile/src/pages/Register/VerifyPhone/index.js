import React, { useState, useEffect } from 'react'
import { Button, NavBar, Icon, InputItem, WingBlank, Modal,Toast } from 'antd-mobile'
import { verifyPhone } from '../../../api/registe'

let phone //用来存储手机号
export default function VerifyCode(props) {
  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    //组件挂载,展示模态框
    Modal.alert(
      '注册协议及隐私政策',
      '在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：',
      [
        {
          text: '不同意',
          onPress: () => {
            props.history.goBack()
          },
          style: 'default',
        },
        {
          text: '同意',
          style: { backgroundColor: 'red', color: 'white' },
        },
      ]
    )
  }, [])

  // 验证用户输入,是否是手机号的回调函数
  function changeHandle(value) {
    // console.log(value)
    // 每次用户输入,都判断,是否符合手机号规范,如果是就让下面的按钮高亮,否则,不高亮
    if (/^1[3-9]\d{9}$/.test(value)) {
      //证明是手机号
      setIsDisabled(false)
      phone = value
    } else {
      // 不是手机号
      setIsDisabled(true)
    }
  }

  // 下一步按钮的事件处理函数,用于检查手机号是否已经注册过
  async function clickHandle() {
    console.log(phone)
    // 发送请求
    const result = await verifyPhone(phone)
    console.log(result)
    if(result.data.success){
      // 可以注册,要跳转到下一个页面
      Modal.alert(undefined,
      '我们将发送短信/语音验证码至:'+phone,
      [
        {
          text: '不同意',
          style: 'default',
        },
        {
          text: '同意',
          onPress:()=>{
            // 往redux中存储手机号
            props.savePhone(phone)
            // 跳转到验证验证码页面
            props.history.push('/verifyCode')
          },
          style: { backgroundColor: 'red', color: 'white' },
        },
      ])
    }else{
      // 手机号已经注册过了,要提示用户,并且回到login页面
      Toast.info(result.data.message)
      setTimeout(()=>{
        props.history.goBack()
      },3000)

    }
  }
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
        <InputItem clear placeholder="请输入手机号" onChange={changeHandle}>
          <div className="input-phone">
            <span>+</span>
            <span>86</span>
            <Icon type="down"></Icon>
          </div>
        </InputItem>

        <WingBlank>
          <Button
            type="warning"
            disabled={isDisabled}
            className="btn-login"
            onClick={clickHandle}
          >
            下一步
          </Button>
        </WingBlank>
      </WingBlank>
    </div>
  )
}
