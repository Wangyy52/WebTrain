<template>
  <div>
      <Header />
      <NewsIndex />
      <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NewsIndex from "@/components/newsitem/NewsIndex.vue"
export default {
  name: "NewsItem",
  components: {
    Header,
    Footer,
    NewsIndex
  }
};
</script>