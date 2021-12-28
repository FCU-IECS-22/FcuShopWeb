<template>
  <Carousel/>
  <Navbar/>
  <SearchBar/>
  <Card/>
  <Account/>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/ItemCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import Account from '@/components/Account.vue'

export default {
  name: "Index",
  data() {
    return {
    }
  },
  components: {
    Carousel,
    Navbar,
    Card,
    SearchBar,
    Account,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
