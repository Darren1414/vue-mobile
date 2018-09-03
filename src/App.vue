<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <i class="tab-item-icon iconfont icon-phone"></i>
        外卖
      </mt-tab-item>
      <mt-tab-item id="发现">
        <i class="tab-item-icon iconfont icon-shiguangguan"></i>
        发现
      </mt-tab-item>
      <mt-tab-item id="设置">
        <i class="tab-item-icon iconfont icon-gongju"></i>
        设置
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: '外卖'
    }
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
  margin-top: 0;
}

.tab-item-icon {
  display: block;
  font-size: 30px;
  margin-bottom: 8px;
}

</style>
