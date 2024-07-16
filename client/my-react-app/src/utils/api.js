import axios from 'axios';

// 从环境变量中获取 API 基本 URL
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8800/api/';
const imgUploadUrl = 'http://144.202.124.215:8800/api/';
const imgPrefixUrl = 'http://144.202.124.215/uploads/';

// 创建 axios 实例
const apiClient = axios.create({
  baseURL: apiUrl,
  withCredentials: true, // 确保每个请求都携带凭据（如 cookies）
  timeout: 10000,  // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    // 你可以在这里添加其他通用的请求头
  }
});

// 创建用于图片上传的 axios 实例
const imgUploadClient = axios.create({
  baseURL: imgUploadUrl,
  withCredentials: true, // 确保每个请求都携带凭据（如 cookies）
  timeout: 10000,  // 请求超时时间
  headers: {
    'Content-Type': 'multipart/form-data', // 设置上传文件时的 Content-Type
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
    console.log('response', response);
    // 对响应数据做一些处理
    return response;
  },
  error => {
    // 对响应错误做一些处理
    console.log('error', error);
    if (error.response) {
      console.error(`API Error: ${error.response.status} ${error.response.data.message}`);
      // token 失效，自动登出并返回登录页
      if (error.response.status === 401) {
        apiClient.post("/auth/logout");
        localStorage.removeItem("user");
        window.location.href = '/login'; // 重定向到登录页
      }
    } else {
      console.error('API Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// 为 imgUploadClient 添加请求拦截器
imgUploadClient.interceptors.request.use(
  config => {
   
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 为 imgUploadClient 添加响应拦截器
imgUploadClient.interceptors.response.use(
  response => {
    // 对响应数据做一些处理
    return response;
  },
  error => {
    // 对响应错误做一些处理
    if (error.response) {
      console.error(`Upload API Error: ${error.response.status} ${error.response.data.message}`);
    } else {
      console.error('Upload API Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// 上传文件的方法
const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    // 上传请求
    const res = await imgUploadClient.post("/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('Uploaded file path:', res.data.filename); // 打印返回的文件路径
    return res.data.filename;
  } catch (err) {
    console.error('Upload error:', err);
  }
};

export { apiClient, uploadFile, imgPrefixUrl};
