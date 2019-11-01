import request from '@/utils/request'
export default {
    // 团队介绍
    getTeam(){
        return request({
            method:'get',
            url:'/team'
        })
    }
}