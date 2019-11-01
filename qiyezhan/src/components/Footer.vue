<template>
<div class="footer">
  <div class="foot container">
    <div class="footer-item">
      <img src="../assets/img/footer_icon_1.svg" alt />
      <p>福建省福州市闽侯县大学城</p>
    </div>
    <div class="footer-item">
      <img src="../assets/img/footer_icon_2.svg" alt />
      <p>807515004@qq.com</p>
    </div>
    <div class="footer-item">
      <img src="../assets/img/footer_icon_3.svg" alt />
      <p>10086</p>
    </div>
    <div class="footer-item">
      <img src="../assets/img/footer_logo.png" alt />
      <p>扫一扫，加入旺仔联盟</p>
    </div>
    <div class="clearfix"></div>
    <hr>
    <span>版权所有@旺仔联盟</span>
  </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style scoped>
.footer {
  text-align: center;
  height: 300px;
  background-color: #d7d7d7;
  padding: 0 200px;
}
.footer .footer-item {
  /* height: 120px; */
  line-height: 80px;
  padding-top: 30px;
  float: left;
  padding-right: 120px;
  margin-bottom: 30px;
}
.footer .footer-item img {
  width: 100px;
  height: 100px;
}
.footer .footer-item:nth-child(4) img {
    width: 150px;
    height: 150px;
}
.footer .footer-item:nth-child(4) {
    padding-left: 100px;
}
.footer .footer-item p {
  line-height: 0;
  font-size: 14px;
  color: #8a8a8a;
}
hr {
    width: 200px;
    background-color: #333;
    margin: 0 auto;
}
</style>