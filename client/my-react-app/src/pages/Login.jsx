import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='auth'>
      <h1>登录</h1>
      <form action="">
        <input required type="userName" placeholder='账号' />
        <input required type="password" placeholder='密码' />
        <button>登录</button>
        <p>登录失败！</p>
        <span>你没有账号吗，点这里注册呦！<Link to='/register'>注册</Link></span>
      </form>
    </div>
  )
}
