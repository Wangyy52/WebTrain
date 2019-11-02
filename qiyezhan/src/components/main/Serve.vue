<template>
    <div class="serve container">
        <h3>服务范围</h3>
        <div class="serve-main">
            <ul>
                <li><a href="#"><img src="../../assets/img/serve_icon_1.svg" alt=""><p>我是VIP</p></a></li>
                <li><a href="#"><img src="../../assets/img/serve_icon_2.svg" alt=""><p>英雄合作</p></a></li>
                <li><a href="#"><img src="../../assets/img/serve_icon_3.svg" alt=""><p>寻找宠物</p></a></li>
                <li><a href="#"><img src="../../assets/img/serve_icon_4.svg" alt=""><p>寻找客服</p></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'Serve',
}
</script>
<style scoped>
.serve {
    padding-top: 15px;
    text-align: center;
}
.serve-main {
    margin-top: 5px;
    height: 150px;
    line-height: 120px;
    background-color: #ccc;
}
.serve-main ul {
    display: block;
}
.serve-main ul li {
    float: left;
    width: 25%;
}
.serve-main ul li a p {
    line-height: 0;
}
.serve-main ul li a img {
    width: 60px;
    height: 60px;
    vertical-align: middle;
}

    
</style>