//统一管理与用户相关的接口
import request from '@/utils/request'

//基础地址已经有了,无需再加
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/use/info',
}
//暴露请求函数

//登录接口方法,reqLogin是一个常量函数
// 定义并导出了一个叫 reqLogin 的函数，调用它就能以POST方式把登录表单发到请求地址
// 内部用 axios 封装，类型用 TypeScript 描述
export const reqLogin = (data: any) => {
  return request.post(API.LOGIN_URL, data)
}
// 相当于export function reqLogin(data: any) {
//   return request.post(API.LOGIN_URL, data)
// }

//获取用户信息接口方法
export const reqUserInfo = () => {
  return request.get(API.USERINFO_URL)
}
