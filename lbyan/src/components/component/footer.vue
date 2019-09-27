<template>
  <div class="footer" id="app-footer">©2019 lbyan.cn 版权所有。辽ICP备19014628号</div>
</template>

<script>
export default {
  name: "app-footer",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    sessionStorage.setItem('ip', returnCitySN["cip"])
    sessionStorage.setItem('area', returnCitySN["cname"])
    var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan class='zztj' id='cnzz_stat_icon_1278002297'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s9.cnzz.com/z_stat.php%3Fid%3D1278002297%26show%3Dpic2' type='text/javascript'%3E%3C/script%3E"));
  }
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  position:fixed;
  bottom:20px;
}
.zztj{
  bottom:80px;
}
</style>