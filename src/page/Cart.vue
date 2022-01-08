<template>
  <div class="container">
    <div class="card text-white bg-dark my-3 ">
      <!-- 範例卡片 -->
      <div class="row g-0" v-for="(item,index) in itemList" :key="item.id" :id="'card-' + item.id">

        <div class="col-md-4">
          <img :src="item.imageUrl" class="card-img-top" alt="瑪利歐派對 超級巨星"/>
        </div>

        <div class="col-md-8" >
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <a class="id" style="display: none">{{ item.id }}</a>
            <p class="card-text">{{ item.description }}</p>
            <p>訂購數量：{{cartItems[index].hitTimes}}</p>
            <button @click="remove(item.id)" class="btn btn-primary me-md-2 btn-danger">移除此商品</button>

          </div>
        </div>
      </div>
      <router-link @click="clear()" to="/"  class="btn btn-primary me-md-2 btn-primary">送出訂單</router-link>

    </div>
  </div>
</template>

<script>

export default {
  name: "Cart",
  data() {
    return {
      arr: [],
      cartItems: [],
      getId: []
    }
  },
  computed: {
    itemList: function () {
      return this.arr
    }
  },
  components: {

  },
  mounted(){
    this.getCartData()
  },
  methods: {
    getCartData(){
      if(localStorage.cartItems){
        this.cartItems = JSON.parse(localStorage.cartItems)
        for(let i=0;i<Object.keys(this.cartItems).length;i++){
          console.log(this.cartItems[i].id)
          this.getId.push(this.cartItems[i].id)
        }
        this.$http.post(process.env.VUE_APP_BACKEND_URL + "productsOfCart", {
          cartItems: this.getId
        })
        .then( r => {
          this.arr = r.data
        })
        .catch( r => console.log(r))
      }
    },
    remove(id){
      var am = 0
      // for rendering's data
      this.arr.forEach((a, i, array) => {
        if(a.id === id) array.splice(i, 1)
      })
      // for storage
      var temp = JSON.parse(localStorage.getItem("cartItems"))
      temp.forEach((a, i, array) => {
        if(a.id === id) {
          am = a.hitTimes
          array.splice(i, 1)
        }
      })
      localStorage.setItem('cartItems', JSON.stringify(temp))
      // for Vuex update
      // this.$emitter.emit('cartNum',1)
      this.$store.dispatch('decrease', am)
    },
    clear(){
      localStorage.removeItem('cartItems');
      console.log(localStorage.cartItems)
      location.href = "/"
    }
  },

}
</script>

<style scoped>
.card{overflow:hidden;}
.card img{transform:scale(1,1);transition: all 0.5s ease-out;}
.card img:hover{transform:scale(1.1,1.1);}
</style>