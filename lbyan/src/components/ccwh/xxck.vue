<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="margin-left:20%" >
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> 链接信息
        </span>
        <el-table stripe :data="tableData" border style="width: 100%;margin-left:30px;">
          <el-table-column align="center" fixed type="index" label="序号" width="50"></el-table-column>
          <el-table-column  align="center" prop="mc" label="名称" width="150"></el-table-column>
          <el-table-column align="center" prop="url" label="URL" width="120"></el-table-column>
          <el-table-column align="center" prop="jj" label="简介" width="120"></el-table-column>
          <el-table-column align="center" prop="img" label="图片地址" width="120">
            <template slot-scope="scope">
              <el-image style="width: 100px; height: 50px" :src="scope.row.img" :fit="fit"></el-image>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="ljlxMc" label="类型" width="120">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.ljlxMc === '工作' ? 'primary' : 'success'"
                disable-transitions
              >{{scope.row.ljlxMc}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> 链接信息
        </span>角色管理
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> 链接信息
        </span>角色管理
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> 链接信息
        </span>定时任务补偿
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      tabPosition: "left",
      tableData: [
        {
          mc: "百度",
          url: "www.baidu.com",
          jj: "百度官网",
          img: "http://129.204.226.230:8099/image/fengche.png",
          ljlxMc: "学习"
        },
        {
          mc: "2016-05-02",
          url: "王小虎",
          jj: "上海",
          img: "http://129.204.226.230:8099/image/fengche.png",
          ljlxMc: "工作"
        },
        {
          mc: "2016-05-02",
          url: "王小虎",
          jj: "上海",
          img: "普陀区",
          ljlxMc: "图片资源"
        },
        {
          mc: "2016-05-02",
          url: "王小虎",
          jj: "上海",
          img: "http://129.204.226.230:8099/image/fengche.png",
          ljlxMc: "视频学习"
        },
        {
          mc: "2016-05-02",
          url: "王小虎",
          jj: "上海",
          img: "普陀区",
          ljlxMc: "其他"
        }
      ]
    };
  },
  components: {},
    mounted() {
    this.getLjxx();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
        getLjxx: function() {
      // 为给定 ID 的 user 创建请求
      axios.post("/api/index/getLjxxForTable").then(res => {
        console.log(res);
        this.tableData = res.data;
      });
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
