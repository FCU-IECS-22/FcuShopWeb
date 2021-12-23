<template>
  <Navbar/>
  <Card/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/ItemCard.vue'



export default {
  name: "Admin",
  data() {
    return {
    }
  },
  components: {
    Navbar,
    Card,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
