<template>
  <div class="header container">
    <div class="index">
      <a href="#">
        <img src="../assets/img/logo.svg" alt />
      </a>
      <a href="#">旺仔联盟</a>
    </div>
    <!-- 导航栏部分 -->
    <div class="navbar">
      <ul>
        <li>
          <a href="/#/">首页</a>
        </li>
        <li>
          <a href="#">新闻</a>
        </li>
        <li>
          <a href="/#/about">关于我们</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style>
.header {
  height: 60px;
  background-color: #f3f3f3;
  line-height: 60px;
  padding: 0 50px;
  font-size: 20px;
}
.header .index {
  float: left;
}
.header .index img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  padding-right: 10px;
}
.header .navbar {
  float: right;
}
.header .navbar ul li {
  float: left;
}
.header .navbar ul li a {
  display: block;
  padding: 0 8px;
}
.header .navbar ul li a:hover {
  border-bottom: 2px solid #00a4ff;
}
</style>