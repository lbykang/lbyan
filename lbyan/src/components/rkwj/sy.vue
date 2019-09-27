<template>
  <div
    class="wrapper"
    v-bind:style="{ background: 'url(' + bodobj + ')','background-repeat': 'no-repeat','z-index':'-1','background-size':'cover','background-attachment': 'fixed'
}"
  >
      <!-- <iframe
      class="tq"
      name="weather_inc"
      src="http://i.tianqi.com/index.php?c=code&id=82"
      width="250"
      height="500"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      scrolling="no"
    ></iframe> -->
    <div class="drag">
      <iframe
        class="iframe"
        name="weather_inc"
        src="http://i.tianqi.com/index.php?c=code&id=111"
        width="64%"
        height="100"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
      ></iframe>

      <div class="welcome">
        <img src="http://129.204.226.230/images/rabbit.png" alt />
        <span>欢迎使用-LinksTools</span>
      </div>
      <div class="head">
        <el-tabs :tab-position="tabPosition" class="tab">
          <el-tab-pane v-for="(tabinfo, index1) in tapvalue" :key="index1" :label="tabinfo.lx.mc">
            <div>
              <el-card
                @mouseenter.native="mouseOver(index1,index2)"
                @mouseleave.native="mouseLeave(index1,index2)"
                v-for="(info,index2) in tabinfo.ljxx"
                :key="index2"
                :style="info.style"
                class="infocard"
                shadow="hover"
              >
                <div style="width:100px;height:47px;">
                  <img
                    :src="info.img == ''?'http://129.204.226.230/images/20190903162138.png':info.img"
                    :title="info.jj"
                    style="width:100%;height:100%;"
                  />
                </div>
                <a :href="info.url" target="_blank" :title="info.mc+'-'+info.jj">{{info.mc}}</a>
              </el-card>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <img
        id="img5"
        src="http://129.204.226.230/images/fengche.png"
        class="fengche"
        title="换个背景"
        @click="changebj"
      />
    </div>

  </div>
</template>

<script>
import axios from "axios";
import * as sysTool from "@/assets/js/systemTool";
import rotate from "@/assets/js/jquery.rotate.min";
import texiao from "@/assets/js/texiao";
import $ from "jquery";
export default {
  components: {},
  props: {},
  data() {
    return {
      tabPosition: "left",
      tapvalue: [],
      ip: "",
      area: "",
      brower: "",
      os: "",
      bodobj: "",
      active: "",
      background: [
        {
          img: "http://129.204.226.230/images/4_15.jpg"
        },
        {
          img: "http://129.204.226.230/images/2592.jpg"
        },
        {
          img: "http://129.204.226.230/images/2693.jpg"
        },
        {
          img: "http://129.204.226.230/images/2814.jpg"
        },
        {
          img: "http://129.204.226.230/images/2634.jpg"
        },

        {
          img: "http://129.204.226.230/images/2358.jpg"
        },
        {
          img: "http://129.204.226.230/images/3309.jpg"
        },
        {
          img: "http://129.204.226.230/images/2173.jpg"
        },
        {
          img: "http://129.204.226.230/images/3797.jpg"
        },
        {
          img: "http://129.204.226.230/images/1596.jpg"
        },
        {
          img: "http://129.204.226.230/images/965.jpg"
        },
        {
          img: "http://129.204.226.230/images/4025.jpg"
        },
        {
          img: "http://129.204.226.230/images/100623.jpg"
        }
      ],
      sjs: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    getLjxx: function() {
      // 为给定 ID 的 user 创建请求
      axios.post("/api/hello/hello").then(res => {
        console.log(res);
        for (var i = 0; i < res.data.length; i++) {
          res.data[i].ljxx.forEach(item => {
            item.style = "";
          });
        }
        this.tapvalue = res.data;
      });
    },
    backgroundImg: function() {
      var sjsz = Math.ceil(Math.random() * this.background.length);
      if (this.sjs == sjsz) {
        if (sjsz > 1) {
          sjsz = sjsz - 1;
        } else {
          sjsz = sjsz + 1;
        }
      }
      this.sjs = sjsz;
      this.bodobj = this.background[sjsz - 1].img;
    },
    mouseOver: function(index1, index2) {
      let r, g, b;
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      this.tapvalue[index1].ljxx[index2].style =
        "background-color:rgb(" +
        r +
        "," +
        g +
        "," +
        b +
        ");transform: scale(1);transition: all 0.5s linear;";
    },

    mouseLeave: function(index1, index2) {
      this.tapvalue[index1].ljxx[index2].style = "";
    },
    bjxz: function() {
      $("#img5").rotate({
        angle: 0,
        animateTo: 360,
        callback: this.bjxz,
        easing: function(x, t, b, c, d) {
          // t: current time, b: begInnIng value, c: change In value, d: duration
          return c * (t / d) + b;
        }
      });
    },
    changebj: function() {
      this.backgroundImg();
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.getLjxx();
    this.backgroundImg();
    this.bjxz();
  }
};
</script>
<style lang="scss" scoped>
@import "../../static/css/rlstyle.css";
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
}
.head {
  margin-top: 40px;
  width: 100%;
  color: aquamarine;
}
.tab {
  width: 63%;
  margin-left: 20%;
}
.infocard {
  height: 100px;
  float: left;
  margin-left: 10px;
  width: 16%;
  margin-top: 10px;
  background-color: transparent;
  opacity: 0.75;
  transform: scale(1);
  transition: all 1s linear;
}
.iframe {
  margin-top: 10px;
  background-color: rgb(176, 224, 238);
}
.el-tabs__item {
  color: aliceblue;
}
.fengche {
  width: 4%;
  height: 8%;
  position: fixed;
  bottom: 80px;
  right: 50px;
}
#cnzz_stat_icon_1278002297 {
  position: fixed;
  bottom: 80px;
}
.welcome {
  display: flex;
  align-items: center;
  width: 20%;
  color: var(--theme);
  cursor: pointer;
  margin-left: 43%;
  color: aliceblue;
  font-size: 20px;
}
.tq {
  position: fixed;
  left: 0px;
  top: 90px;
}
</style>