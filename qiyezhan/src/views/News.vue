<template>
  <div>
    <Header />
    <MainNews />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MainNews from '@/components/news/MainNews.vue'
export default {
  name:"News",
  components:{
    Header,
    Footer,
    MainNews
  }
}
</script>
