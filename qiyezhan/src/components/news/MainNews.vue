<template>
    <div class="main-news container">
        <div class="main-news-top"></div>
        <div class="main-news-item">
            <div class="main-news-item-left">
                <img src="../../assets/img/index_luobo_1.jpg" alt="">
            </div>
            <div class="main-news-item-right">
                <h4>旺仔再一次创新 进行第二阶段发行</h4>
                <p>发布日期：2019年10月31日</p>
                <p>旺仔再一次创新，进行第二阶段发行。旺仔再一次创新，进行第二阶段发行。旺仔再一次创新，进行第二阶段发行。</p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Main-News'
}
</script>
<style scoped>
.main-news {
    padding-top: 2px;
}
.main-news .main-news-top {
    height: 100px;
    background-color: #f3f3f3;
}
.main-news .main-news-item {
    width: 50%;
}
.main-news .main-news-item .main-news-item-left {
    float: left;
}

.main-news .main-news-item .main-news-item-left img {
    width: 200px;
    height: 250px;
}
.main-news .main-news-item .main-news-item-right p {
    font-size: 18px;
}
.main-news .main-news-item .main-news-item-right p:first-child {
    font-size: 14px;
    color: aliceblue;
}
</style>