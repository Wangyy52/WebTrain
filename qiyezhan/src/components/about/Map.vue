<template>
  <div class="map container">
    <h3>关于我们</h3>
    <baidu-map class="map-item" center="福建省福州市闽侯县"></baidu-map>
    <div class="map-desc">
      <p>根据化石研究，地球上最早出现的动物源于海洋。早期的海洋动物经过漫长的地质时期，逐渐演化出各种分支，丰富了早期的地球生命形态。在人类出现以前，史前动物便已出现，并在各自的活动期得到繁荣发展。后来，它们在不断变换的生存环境下相继灭绝。</p>
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
  font-size: 18px;
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