<template>
  現在的使用者是{{USER}}，存到cookie就可以每一頁都拉得到了
  <Card/>
</template>

<script>
import Card from '@/components/ItemCard.vue'



export default {
  name: "Admin",
  data() {
    return {
    }
  },
  computed: {
    USER: function () {
      return this.$route.params.USER
    },
  },
  components: {
    Card,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
