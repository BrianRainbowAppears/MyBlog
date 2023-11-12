import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className='auth'>
      <h1>注册</h1>
      <form action="">
        <input required type="userName" placeholder='账号' />
        <input required type="email" placeholder='邮箱' />
        <input required type="password" placeholder='密码' />
        <button>注册</button>
        <p>注册失败！</p>
        <span>已注册账号，点这里登录呦！<Link to='/login'>登录</Link></span>
      </form>
    </div>
  )
}