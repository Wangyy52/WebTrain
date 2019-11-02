<template>
  <div class="main-news container">
    <div class="main-news-top">
      <h3>最新动态</h3>
    </div>
    <div class="main-news-item" v-for="(item, index) in news" v-if="index<8" :key="index.id">
      <div class="main-news-item-left">
        <router-link :to="{path:'/newsitem/',query:{id:item.id}}">
          <img :src="item.imgUrl" alt />
        </router-link>
      </div>
      <div class="main-news-item-right">
        <router-link :to="{path:'/newsitem/',query:{id:item.id}}">
          <h4>{{item.name}}</h4>
        </router-link>
        <p>发布日期：{{item.time}}</p>
        <router-link :to="{path:'/newsitem/',query:{id:item.id}}">
          <p>{{item.desc}}</p>
        </router-link>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="clearfix"></div>
    <div class="main-news-page">
      <el-pagination
        :page-size="pageSize"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        background
        layout="prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import NewsApi from "../../api/news";
export default {
  name: "Main-News",
  data() {
    return {
      news: [], //新闻数据
      total: 10, //总数量
      currentPage: 1, //当前页
      pageSize: 8 //页面长度
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 获取新闻数据
    fetchData() {
      NewsApi.search(this.currentPage, this.pageSize).then(response => {
        const resp = response.data;
        // console.log(resp.data)
        if (resp.flag) {
          this.news = resp.data;
          this.total = resp.data.length;
        } else {
          this.$message({
            type: "warning",
            message: "数据获取失败"
          });
        }
      });
    },
    // 当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.fetchData();
    }
  }
};
</script>
<style scoped>
.main-news {
  padding-top: 2px;
}
.main-news .main-news-top {
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #f3f3f3;
}
.main-news .main-news-item {
  float: left;
  word-wrap: break-word;
}
.main-news .main-news-item .main-news-item-left {
  float: left;
}

.main-news .main-news-item .main-news-item-left img {
  width: 200px;
  height: 250px;
}
.main-news .main-news-item .main-news-item-right {
  float: left;
  width: 380px;
  padding: 10px;
}
.main-news .main-news-item .main-news-item-right h4 {
  font-size: 20px;
}
.main-news .main-news-item .main-news-item-right p:nth-child(2) {
  font-size: 14px;
  color: #ccc;
  padding: 10px 0;
}
.main-news .main-news-item .main-news-item-right p {
  font-size: 16px;
}
.main-news-page {
  text-align: center;
  padding: 20px 0;
}
</style>