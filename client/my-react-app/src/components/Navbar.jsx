import React from 'react'
import Logo from '../img/logo.jpg'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=sciense'>
            <h6>SCIENSE</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h6>FOOD</h6>
          </Link>
          <span>Brian</span>
          <span>退出登录</span>
          <span className='write'>
            <Link className='link' to='/write'>写文章</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
