// src/api.js

import axios from 'axios';

// 从环境变量中获取 API 基本 URL
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8800/api/';
console.log('process.env', process.env);
console.log('apiUrl:', apiUrl);

// 创建 axios 实例
const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 10000,  // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    // 你可以在这里添加其他通用的请求头
  }
});

// 添加请求拦截器
apiClient.interceptors.request.use(
  config => {
    // 在请求发送之前进行一些处理
    // 例如在请求头中添加 token
    // const token = localStorage.getItem('token'); // 示例：从 localStorage 获取 token
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
apiClient.interceptors.response.use(
  response => {
    // 对响应数据做一些处理
    return response;
  },
  error => {
    // 对响应错误做一些处理
    if (error.response) {
      console.error(`API Error: ${error.response.status} ${error.response.data.message}`);
    } else {
      console.error('API Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
