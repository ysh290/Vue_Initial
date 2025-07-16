//进行axios二次封装,使用请求与响应拦截器,以进行前后端联调
import axios from 'axios'

//创建request实例
const request = axios.create({
  baseURL: '/api', //每次的请求都会携带/api
  timeout: 5000, //超时时间
})
//请求拦截器
request.interceptors.request.use((config) => {
  console.log(config)
  //config里面有很多配置对象，如headers属性请求头等，用于发起请求携带参数
  return config
})
//响应拦截器
request.interceptors.response.use((response) => {
  console.log(response)
  return response.data
})

export default request
