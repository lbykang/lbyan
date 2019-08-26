<template>
  <div
    class="wrapper"
    v-bind:style="{ background: 'url(' + bodobj + ')','background-repeat': 'no-repeat','background-size':'cover'}"
  >
    <iframe
      class="iframe"
      name="weather_inc"
      src="http://i.tianqi.com/index.php?c=code&id=111"
      width="980"
      height="100"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      scrolling="no"
    ></iframe>
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
                <img :src="info.img" :alt="info.jj" style="width:100%;height:100%;" />
              </div>
              <a :href="info.url" target="_blank" :title="info.mc+'-'+info.jj">{{info.mc}}</a>
            </el-card>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <img id="img5" src="../../static/img/fengche.png" class="fengche" title="换个背景" @click="changebj" />
  </div>
</template>

<script>
import axios from "axios";
import * as sysTool from "@/assets/js/systemTool";
import rotate from "@/assets/js/jquery.rotate.min";
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
          img: "http://img.infinitynewtab.com/InfinityWallpaper/4_15.jpg"
        },
        {
          img: "http://img.infinitynewtab.com/wallpaper/2592.jpg"
        },
        {
          img: "http://img.infinitynewtab.com/wallpaper/2693.jpg"
        },
        {
          img: "http://img.infinitynewtab.com/wallpaper/2814.jpg"
        },
        {
          img: "http://img.infinitynewtab.com/wallpaper/2634.jpg"
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
      axios.post("http://129.204.226.230:8080/hello/hello").then(res => {
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
      $("#img5").rotate(
        {
        angle: 0,
        animateTo: 360,
        callback: this.bjxz,
        easing: function(x, t, b, c, d) {
          // t: current time, b: begInnIng value, c: change In value, d: duration
          return c * (t / d)+ b;
        }
      }
      );
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
  width: 101.1%;
  height: 795px;
  margin-top: -60px;
  margin-left: -10px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100%;
  overflow: hidden;
}

.head {
  margin-top: 40px;
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
  width: 100px;
  float: left;
  width: 154px;
  margin-top: 10px;
  background-color: transparent;
  opacity: 0.75;
  transform: scale(1);
  transition: all 1s linear;
}
// .infocard :hover {
//   background-color: rgb(159, 250, 238);
//   transform: scale(1);
//   transition: all 0.5s linear;
// }
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
  float: right;
  margin-right: 3%;
  margin-top: 20px;
}
</style>