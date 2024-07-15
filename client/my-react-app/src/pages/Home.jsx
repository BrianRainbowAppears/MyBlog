import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {apiClient} from "../utils/api";
import { imgPrefixUrl } from '../utils/api'

export const Home = () => {

  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await apiClient.get(`/posts${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [cat])

  const renderHomeArtical = () => {
    return (
      <div className='posts'>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <div className="img">
                <img src={`${imgPrefixUrl}${post.img}`} alt="" />
              </div>
              <div className="content">
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>
                <button>阅读详情</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
  }

  return (
    <div className='home'>
      {renderHomeArtical()}
    </div>
  )
}
