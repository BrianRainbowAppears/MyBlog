import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiClient from "../utils/api";



export const Menu = ({cat}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await apiClient.get(`/posts/?cat=${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [cat])

  return (
    <div className='menu'>
        <h1>其他推荐</h1>
        <div className="posts">
            {posts && posts.map((post) => {
                return (
                    <div className="post" key={post.id}>
                        <img src={`../upload/${post.img}`} alt="" />
                        <h2>{post.title}</h2>
                        <button>阅读详情</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
