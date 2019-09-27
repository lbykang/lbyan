<template>
  <div id="app">
    <router-view v-bind:style="{minHeight: minHeight+'px'}"/>
    <app-footer class="foot"></app-footer>
  </div>
</template>

<script>
import footer from "@/components/component/footer";
export default {
  name: 'App',
  components: {
    'app-footer':footer,
  },
  data (){
    return{
       minHeight:0
    }
  },
  mounted (){
    // var _this = this;
    // _this.minHeight = document.documentElement.clientHeight - 170;
    // window.onresize = function(){
    //   _this.minHeight = document.documentElement.clientHeight - 170;
    // }
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.foot{

}
</style>
