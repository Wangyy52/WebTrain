<template>
  <div class="home">
    <Header />
    <Swiper />
    <Serve />
    <Team />
    <IndexNews />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Swiper from '@/components/main/Swiper.vue'
import Serve from '@/components/main/Serve.vue'
import Team from '@/components/main/Team.vue'
import IndexNews from '@/components/main/IndexNews.vue'


export default {
  name: 'home',
  components: {
    Header,
    Swiper,
    Serve,
    Team,
    IndexNews,
    Footer
  }
}
</script>
