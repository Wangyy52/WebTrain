<template>
  <div class="news container">
    <h3>新闻动态</h3>
    <div class="news-item">
      <a href="#">
        <img src="../../assets/img/index_luobo_1.jpg" alt />
        <h5>蜘蛛侠VS毒液联盟，奇迹般获得冠军</h5>
        <hr />
        <p>旺仔牛奶糖是旺仔旗下的一款奶糖。富含人体每日必须的多种氨基酸、钙、脂肪、维生素等营养成份；大红色的设计，高端的品质，定价合理，奶味纯正、浓郁、淳厚、口味香甜，口感好</p>
      </a>
    </div>
    <div class="news-item">
      <a href="#">
        <img src="../../assets/img/index_luobo_1.jpg" alt />
        <h5>蜘蛛侠VS毒液联盟，奇迹般获得冠军</h5>
        <hr />
        <p>旺仔牛奶糖是旺仔旗下的一款奶糖。富含人体每日必须的多种氨基酸、钙、脂肪、维生素等营养成份；大红色的设计，高端的品质，定价合理，奶味纯正、浓郁、淳厚、口味香甜，口感好</p>
      </a>
    </div>
    <div class="news-item">
      <a href="#">
        <img src="../../assets/img/index_luobo_1.jpg" alt />
        <h5>蜘蛛侠VS毒液联盟，奇迹般获得冠军</h5>
        <hr />
        <p>旺仔牛奶糖是旺仔旗下的一款奶糖。富含人体每日必须的多种氨基酸、钙、脂肪、维生素等营养成份；大红色的设计，高端的品质，定价合理，奶味纯正、浓郁、淳厚、口味香甜，口感好</p>
      </a>
    </div>
    <div class="news-item">
      <a href="#">
        <img src="../../assets/img/index_luobo_1.jpg" alt />
        <h5>蜘蛛侠VS毒液联盟，奇迹般获得冠军</h5>
        <hr />
        <p>旺仔牛奶糖是旺仔旗下的一款奶糖。富含人体每日必须的多种氨基酸、钙、脂肪、维生素等营养成份；大红色的设计，高端的品质，定价合理，奶味纯正、浓郁、淳厚、口味香甜，口感好</p>
      </a>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
export default {
  name: "Index-News"
};
</script>
<style scoped>
.news h3 {
  padding-top: 20px;
  text-align: center;
}
.news .news-item {
  width: 280px;
  height: 350px;
  float: left;
  overflow: hidden;
  padding-right: 26px;
  padding-top: 15px;
  /* background-color: red; */
}
.news .news-item:nth-child(5){
  padding-right: 0;
}
.news .news-item a img {
  width: 100%;
}
.news .news-item a h5 {
  line-height: 20px;
}
.news .news-item a p {
  font-size: 13px;
  padding-top: 5px;
  color: rgb(117, 116, 116);
}
.news .news-item a p:hover {
  text-decoration: underline;
}
</style>