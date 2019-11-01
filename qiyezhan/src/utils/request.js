import axios from 'axios'
import {Loading, Message } from 'element-ui'



const loading = {
  loadingInstance:null,//Loading实例
  // 打开加载
  open:function(){
    // 创建实例，而且会打开加载窗口
    this.loadingInstance = Loading.service({
      target:'.main',
      text:'拼命加载中',
      background:'rgba(0,0,0,0.5)'
    })
  },
  // 关闭加载
  close:function(){
    // 不为空时，则关闭加载窗口
    if(this.loadingInstance!==null){
      this.loadingInstance.close()
    }
  }
}

const request = axios.create({
    // baseURL:'/',
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000//请求超时，5000毫秒
})
// 请求拦截
// Add a request interceptor
request.interceptors.request.use(config=> {
    // Do something before request is sent
    // 打开加载窗口
    loading.open()
    return config;
  }, error=> {
    // Do something with request error
    // 关闭加载窗口
    loading.close()
    return Promise.reject(error);
  });
// 响应拦截
// Add a response interceptor
request.interceptors.response.use(response=> {
    // Do something with response data
    loading.close()//关闭加载效果
    const resp = response.data
    // 如果后台响应状态码不是2000，说明后台服务有问题，统一可在此处理
    if(resp.code !== 2000){
      Message({
        message:resp.message||'系统异常',
        type:'warning',
        duration:5*1000//停留时长
      })
    }
    return response;
  }, error=> { 
    // Do something with response error
    loading.close()
    // 当请求接口出错时，进行弹出错误提示如404，500，请求超时
    Message({
      message:resp.message||'系统异常',
      type:'warning',
      duration:5*1000//停留时长
    })
    return Promise.reject(error);
  });
export default request