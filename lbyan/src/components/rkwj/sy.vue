<template>
  <div
    class="wrapper"
    v-bind:style="{ background: 'url(' + bodobj + ')','background-repeat': 'no-repeat','z-index':'-1','background-size':'cover','background-attachment': 'fixed'
}"
  >
    <div class="drag">
      <div class="headTab">
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
        <div style="float: left;width: 20%; margin-top: 40px;">
          <el-link @click="showLoginPopup" type="primary">登录</el-link>
          <el-link type="primary">•</el-link>
          <el-link @click="showRegisterPopup" type="primary">注册</el-link>
        </div>
      </div>

      <div v-show="popup">
        <!--这里是要展示的内容层-->
        <div class="login">
          <i class="el-icon-close icon_cancel" @click="closepopup"></i>
          <register class="form_layout" v-if="register"></register>
          <login class="form_layout" v-else></login>
        </div>
        <!--这里是半透明背景层-->
        <div class="over"></div>
      </div>

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
        src="http://129.204.226.230:8099/image/fengche.png"
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
import login from "@/components/user/login";
import register from "@/components/user/register";
export default {
  components: {
    login: login,
    register: register
  },
  props: {},
  data() {
    return {
      popup: false,
      register: false,
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
          img: "http://129.204.226.230:8099/image/十元.jpg"
        }
      ],
      sjs: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    //打开活动规则页面
    showLoginPopup() {
      this.popup = true;
    },
    showRegisterPopup() {
      this.popup = true;
      this.register=true;
    },
    //关闭活动规则页面
    closepopup() {
      this.popup = false;
      this.register=false;
    },

    getLjxx: function() {
      // 为给定 ID 的 user 创建请求
      axios.post("/api/index/getLinkDate").then(res => {
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
@import "../../static/css/sy.css";

.rule {
  position: absolute;
  width: 0.82rem;
  height: 0.36rem;
  top: 0.08rem;
  right: 0rem;
  background: #111111;
}
.login {
  position: fixed;
  font-size: 24px;
  height: 500px;
  width: 700px;
  background-color: rgb(207, 189, 189);
  border-radius: 0.25rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
.over {
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.7; //透明度为70%
  filter: alpha(opacity=70);
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #111111;
}
</style>