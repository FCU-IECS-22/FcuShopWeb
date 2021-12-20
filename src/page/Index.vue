<template>
  <Navbar/>
  <SearchBar/>
  <Card/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/ItemCard.vue'
import SearchBar from '@/components/SearchBar.vue'



export default {
  name: "Index",
  data() {
    return {
    }
  },
  components: {
    Navbar,
    Card,
    SearchBar,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
