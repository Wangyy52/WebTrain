import request from '@/utils/request'
export default {
    // 轮播图
    getSwiper(){
        return request({
            method:'get',
            url:'/swiper'
        })
    }
}