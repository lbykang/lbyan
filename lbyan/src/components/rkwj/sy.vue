<template>
  <div class="wrapper">
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
        <el-tab-pane v-for="(tabinfo, index) in tapvalue" :key="index" :label="tabinfo.lx.mc">
          <div>
            <el-card
              v-for="(info,index) in tabinfo.ljxx"
              :key="index"
              style="margin-left:10px"
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
  </div>
</template>

<script>
import axios from "axios";
import * as sysTool from "@/assets/js/systemTool";
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
      os: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    getLjxx: function() {
      // 为给定 ID 的 user 创建请求
      axios.post("http://129.204.226.230:8080//hello/hello").then(res => {
        console.log(res);
        this.tapvalue = res.data;
      });
    }
  },
  created() {},
  mounted() {
    this.getLjxx();
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
  background-image: url("../../static/img/back.jpg");
  //http://pic.netbian.com/uploads/allimg/170609/123945-1496983185ad61.jpg
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
  width: 100px;
  float: left;
  width: 154px;
  margin-top: 10px;
  background-color: transparent;
  opacity: 0.75;
  transform: scale(1);
  transition: all 1s linear;
}
.infocard :hover{
  background-color:rgb(159, 250, 238);
  transform: scale(1);
  transition:all 0.5s linear
}
.iframe {
  margin-top: 10px;
  background-color: rgb(176, 224, 238);
}
.el-tabs__item{
  color: aliceblue;
}
</style>