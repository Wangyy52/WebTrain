<template>
  <div class="header">
    <div class="container">
      <div class="index">
        <router-link to>
          <img src="../assets/img/logo.svg" alt />
        </router-link>
        <!-- <img src="../assets/img/logo.svg" alt /> -->
        <!-- </a> -->
        <!-- <a href="#">旺仔联盟</a> -->
        <router-link to="/">动物联盟</router-link>
      </div>
      <!-- 导航栏部分 -->
      <div class="navbar">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
            <!-- <a href="/#/">首页</a> -->
          </li>
          <li>
            <!-- <a href="/#/news">新闻</a> -->
            <router-link to="/news">新闻</router-link>
          </li>
          <li>
            <!-- <a href="/#/about">关于我们</a> -->
            <router-link to="/about">关于我们</router-link>
          </li>
        </ul>
      </div>
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
  /* padding: 0 50px; */
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