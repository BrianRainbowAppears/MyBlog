import moment from "moment";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import { apiClient, uploadFile  } from "../utils/api";
import { imgPrefixUrl } from '../utils/api'


export const Write = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [uploadedImgUrl, setUploadedImgUrl] = useState('')
  const navigate = useNavigate()
  // console.log(state);

  const upload = async (newFile) => {
    try {
      const imgUrl = await uploadFile(newFile)
      setUploadedImgUrl(imgUrl)
      return imgUrl
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async(e) => {
    // 阻止默認
    e.preventDefault()
    // const imgUrl = await upload()
    // console.log('imgUrl', imgUrl);
    try {
      state ? await apiClient.put(`/posts/${state.id}`, {
        title,
        desc: value,
        cat,
        img: uploadedImgUrl,
      }) : await apiClient.post(`/posts`, {
        title,
        desc: value,
        cat,
        img: uploadedImgUrl,
        date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
      })
      navigate('/')
    } catch (err) {
      console.log('err', err);
    }
  }

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          ></ReactQuill>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>状态栏</h1>
          <span>
            <b>状态: </b> Draft
          </span>
          <span>
            <b>可用的: </b> Publish
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" onChange={(e) => {
            console.log('e.target.files[0]', e.target.files[0]);
              setFile(e.target.files[0])
              upload(e.target.files[0])
            }} />
          <label
            className="file"
            htmlFor="file"
          >
            上传图片
          </label>
          {file && <img src={`${imgPrefixUrl}${uploadedImgUrl}`} alt="" style={{ width: '100px', height: '100px' }} />}
          <di v className="buttons">
            <button>保存到草稿箱</button>
            <button onClick={handleClick}>发布</button>
          </di>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === 'art'}
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === 'science'}
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === 'technology'}
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === 'cinema'}
              name="cat"
              value="cinema"
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === 'design'}
              name="cat"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === 'food'}
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};
