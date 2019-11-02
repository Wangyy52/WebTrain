<template>
  <div class="news-index container">
    <div class="news-index-top">
      <div class="news-index-top-p">
        <h3>{{newsMap.name}}</h3>
        <p>时间：{{newsMap.time}}</p>
      </div>
    </div>
    <div class="news-index-img">
        <img :src="newsMap.imgUrl" alt="">
    </div>
    <div class="news-index-p">
        <p>{{newsMap.desc}}</p>
    </div>
  </div>
</template>
<script>
import GetIdApi from '../../api/news'
export default {
  name: "News-Index",
  data() {
    return {
      id:1,
      newsMap:{
        name:'',
        time:'',
        imgUrl:'',
        desc:''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      GetIdApi.getById(this.id).then(resposne=>{
        const resp = resposne.data
        console.log(resp.data)
        if(resp.flag){
          this.newsMap = resp.data
          console.log(this.newsMap)
        }else{
          this.$message({
            type: "warning",
            message: resp.message
          });
        }
      })
    }
  },
};
</script>
<style scoped>
.news-index {
  /* height: 300px;
    background-color: red; */
  padding-top: 2px;
}
.news-index .news-index-top {
  background-color: #f3f3f3;
  height: 80px;
  line-height: 60px;
  /* box-shadow: 0px 1px 0px #ccc; */
}
.news-index .news-index-top .news-index-top-p {
  height: 50px;
  line-height: 50px;
  margin-left: 20px;
  padding-left: 10px;
  padding-top: 20px;
}
.news-index .news-index-top .news-index-top-p h3 {
  /* height: 50px; */
    border-left: 5px solid red;
}
.news-index .news-index-top .news-index-top-p h3 {
    padding-left: 20px;
}
.news-index .news-index-top p {
  line-height: 0;
  font-size: 12px;
  color: #ccc;
  padding-left: 25px;
}
.news-index .news-index-img {
    padding-top: 20px;
    text-align: center;
}
.news-index .news-index-img img {
    /* width: 60px; */
    width: 60%;
    height: auto;
}
.news-index .news-index-p {
    padding: 20px;
}
</style>