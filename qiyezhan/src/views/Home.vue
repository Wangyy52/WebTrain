<template>
  <div class="home">
    <Swiper />
    <Serve />
    <Team />
    <IndexNews />
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "@/components/main/Swiper.vue";
import Serve from "@/components/main/Serve.vue";
import Team from "@/components/main/Team.vue";
import IndexNews from "@/components/main/IndexNews.vue";

export default {
  name: "home",
  components: {
    Swiper,
    Serve,
    Team,
    IndexNews
  }
};
</script>
