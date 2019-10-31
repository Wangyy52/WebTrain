<template>
  <div class="map container">
    <h3>关于我们</h3>
    <baidu-map class="map-item" center="福建省福州市闽侯县"></baidu-map>
    <div class="map-desc">
      <p>旺仔牛奶糖是旺仔旗下的一款奶糖。富含人体每日必须的多种氨基酸、钙、脂肪、维生素等营养成份；大红色的设计，高端的品质，定价合理，奶味纯正、浓郁、淳厚、口味香甜，口感好。</p>
      <div class="map-desc-item">
      <img src="../../assets/img/footer_icon_1.svg" alt />
      <span>福建省福州市闽侯县大学城</span>
      </div>
      <div class="map-desc-item">
      <img src="../../assets/img/footer_icon_2.svg" alt />
      <span>807515004@qq.com</span>
      </div>
      <div class="map-desc-item">
      <img src="../../assets/img/footer_icon_3.svg" alt />
      <span>10086</span>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
export default {
  name:"Map"
}
</script>
<style scoped>
.map {
  padding-top: 2px;
}
.map h3 {
  text-align: center;
  height: 60px;
  line-height: 60px;
  background-color: #f3f3f3;
  font-size: 25px;
}
.map-item,.map-desc{
  padding-top: 30px;
}
.map-item {
  width: 50%;
  height: 300px;
  display: block;
  float: left;
}
.map-desc {
  float: right;
  width: 46%;
  height: 400px;
}
.map-desc img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.map-desc p {
  font-size: 20px;
}
.map-desc-item {
  padding-top: 18px;
  height: 50px;
  line-height: 50px;
}
.map-desc-item p {
  font-size: 16px;
}
.map-desc-item span {
  padding-left: 20px;
}
</style>