<template>
  <div class="swiper-wrap" id="swiper">
    <transition-group tag="ul" class="slide-ul" name="list">
      <li
        v-for="(list,index) in slideList"
        :key="list.id"
        v-show="index===currentIndex"
        @mouseenter="stop"
        @mouseleave="go"
      >
        <a href="#">
          <img :src="list.imgUrl" :alt="list.id" />
        </a>
      </li>
    </transition-group>
    <div class="swiper-items">
      <span
        v-for="(item, index) in slideList.length"
        :key="item.desc"
        :class="{'active':index===currentIndex}"
        @mouseover="change(index)"
      ></span>
    </div>
  </div>
</template>
<script>
import Swiper from "../../api/swiper";
export default {
  name: "Swiper",
  data() {
    return {
      slideList: [
        // {
        //   clickUrl: "#",
        //   desc: "nhwc",
        //   image: "http://dummyimage.com/1745x492/f1d65b"
        // },
        // {
        //   clickUrl: "#",
        //   desc: "hxrj",
        //   image: "http://dummyimage.com/1745x492/40b7ea"
        // },
        // {
        //   clickUrl: "#",
        //   desc: "rsdh",
        //   image: "http://dummyimage.com/1745x492/e3c933"
        // }
      ],
      currentIndex: 0,
      timer: ""
    };
  },
  methods: {
    fetchData() {
      Swiper.getSwiper().then(response => {
        const resp = response.data;
        console.log(resp);
        if (resp.flag) {
          this.slideList = resp.data;
        } else {
          this.$message({
            type: "warning",
            message: resp.message
          });
        }
      });
    },
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.currentIndex = index;
    },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0;
      }
    }
  },
  created() {
    this.fetchData();
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  }
};
</script>
<style scoped>
.swiper-wrap {
  height: 600px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  margin-top: 2px;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}

img {
  width:100vw;
  height:calc(100vh - 58px)
}

.swiper-items {
  position: absolute;
  z-index: 10;
  top: 600px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.swiper-items span {
  display: inline-block;
  height: 15px;
  width: 15px;
  margin: 0 3px;
  background-color: #b2b2b2;
  border-radius: 50%;
  cursor: pointer;
}
.swiper-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
}
</style>