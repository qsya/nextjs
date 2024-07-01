import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 50000
})

// 请求拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return error
})

// 响应拦截器
service.interceptors.response.use(response => {
  if (response.status) {
    switch (response.status) {
      case 200:
        return response.data
      case 401:
        //未登录处理方法
        break
      case 403:
        //token过期处理方法
        break
      default:
        console.log();(response.data.msg)
    }
  } else {
    return response
  }
})
export default service
