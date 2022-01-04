<template>
    <p>{{cartItems}}</p>


<div class="container">
  <div class="mt-3 row">

    <!-- 範例卡片 -->
    <div class="card col-4" v-for="item in itemList" :key="item.id">
      <img :src="item.imageUrl" class="card-img-top" alt="瑪利歐派對 超級巨星"/>
        <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <a class="id" style="display: none">{{ item.id }}</a>
        <p class="card-text">{{ item.description }}</p>
        <button @click="plus(item.id)" class="btn btn-primary me-md-2">{{ item.price }}</button>

        <!-- <a href="modifyFile" class="btn btn-danger">修改</a> -->

          <!-- 按鈕開頁面 -->
        <button type="button" class="btn btn-danger" data-toggle="modal" :data-target="'#card-' + item.id" v-if="show">
          編輯
        </button>
      </div>

      <!-- Modal -->

    </div>

  </div>
</div>

</template>

<script>

export default {
  name: "Cart",
  data() {
    return {
      arr: [],
      cartItems: JSON.parse(localStorage.cartItems),
    }
  },
  computed: {
    itemList: function () { return this.arr },
  },
  components: {

  },
  mounted(){
    this.getCartData()

    // console.log(this.cartItems)
  },
  methods: {

    getCartData(){
      this.$http.post(process.env.VUE_APP_BACKEND_URL + "productsOfCart", {
        cartItems: this.cartItems
      })
      .then( r => {
        alert(r.data[0].id)
        alert(r.data[1].id)
        alert(r.id)
      })
      .catch( r => console.log(r))
    }
  },

}
</script>


