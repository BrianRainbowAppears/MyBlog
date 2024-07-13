import React, { useContext, useEffect, useState } from 'react'
import Avatar from '../img/avatar.jpg'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu } from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext'
import DOMPurify from "dompurify";
import apiClient from "../utils/api";


export const Single = () => {
  const [post, setPost] = useState([])

  const {currentUser} = useContext(AuthContext)

  const postId = useLocation().pathname.split('/')[2]

  const navigete = useNavigate()

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await apiClient.get(`/posts/${postId}`)
        setPost(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [postId])

  const handleDelete = async() => {
    try {
      await apiClient.delete(`/posts/${postId}`)
      navigete('/')
    } catch (err) {
      console.log(err);
    }
  }
  console.log({currentUser, post});

  return (
    <div className='single'>
      <div className="content">
        <div className="img">
          <img src={`../upload/${post.img}`} alt="" />
        </div>
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>
        
      </div>
      {post && <Menu cat={post.cat}></Menu>}
    </div>
  )
}
