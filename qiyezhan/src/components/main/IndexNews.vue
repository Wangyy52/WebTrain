<template>
  <div class="news container">
    <h3>新闻动态</h3>
    <div class="news-item" v-for="(item, index) in news" v-if="index<4" :key="index.id">
      <a href="#">
        <img :src="item.imgUrl" alt />
        <h5>{{item.name}}</h5>
        <hr />
        <p>{{item.desc}}</p>
      </a>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import NewsApi from '../../api/news'
export default {
  name: "Index-News",
  data() {
    return {
      news:[]
    }
  },
  methods: {
    fetchData(){
      NewsApi.getNews().then(response=>{
        const resp = response.data
        console.log(resp.data)
        if(resp.flag){
          this.news = resp.data
        }else {
          this.$message({
            type: "warning",
            message: resp.message
          });
        }
      })
    }
  },
  created() {
    this.fetchData()
  },
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