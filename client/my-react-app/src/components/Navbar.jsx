import React, { useContext } from 'react'
import Logo from '../img/logo.jpg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

export const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext)
  console.log(currentUser);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to={'/'}>
            <img src={Logo} alt="" />
          </Link>
          
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>SCIENCE</h6>
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
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>退出登录</span> : <Link className='link' to={'/login'}>登录</Link> }
          <span className='write'>
            <Link className='link' to='/write'>写文章</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
