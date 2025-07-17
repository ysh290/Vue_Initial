import { defineStore } from 'pinia'

//组合式写法
const useUserStore = defineStore('user', () => {
  //定义数据(state)
  //定义数据的方法(action 同步+异步,即修改数据的方法和发送请求的方法)
  //以对象的方式return出去供对象使用
})
export default useUserStore
