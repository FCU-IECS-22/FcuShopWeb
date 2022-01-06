<template>
  <!-- <Index/> -->
  <!-- 舉例用的頁面 -->
  <Navbar/>
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import Index from './page/Index.vue'

export default {
  name: 'App',
  components: {
    Navbar
    //Index
  },
  mounted(){
    if("cartItems" in localStorage){
      // var a = JSON.parse(localStorage.getItem("cartItems"))
      var temp = 0
      JSON.parse(localStorage.getItem("cartItems")).forEach(a => temp += a.hitTimes)
      this.$store.dispatch('setup', temp)
    }
  }
}
</script>

<style>
/* 這裡可以寫全域的css，但通常我會放一個 all.scss 在 assets 裡方便找 */
</style>
