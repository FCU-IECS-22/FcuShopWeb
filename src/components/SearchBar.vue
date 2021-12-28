<template>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#searchBotton">
  搜尋
</button>
<!-- Modal -->
<div class="modal fade windowset1" id="searchBotton" tabindex="-1" role="dialog">
  <div class="modal-dialog windowset" role="document">
    <div class="modal-content windowset2">
      <div class="modal-header">
        <h5 class="modal-title">MY SHOP</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <input type="text" class="form-control" placeholder="商品名稱" id="productKeyword">
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-secondary" type="button" id="searchProduct">Search</button>
        <router-link @click="backhome()" to="" class="btn btn-outline-secondary" id="cleanProduct">Back</router-link>
      </div>
    </div>
  </div>
</div>

  <div class="container">
    <h1 class="mt-3">My Shop</h1>

  </div>
</template>

<script>
// TODO:
// 搜尋功能
export default {
  name: "SearchBar",
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    backhome(){
      var elements = document.getElementsByClassName('modal-backdrop');
      console.log("test123")
      console.log(elements)
      var p = elements[0].parentNode
      console.log(p);
      // p.classList.remove('modal-open')
      // p.classList.style['padding-right'] = "0 px"
      // p.style.paddingRight = "0"
      // p.style['paddingRight'] = "0"
      p.removeAttribute("style")
      p.removeAttribute("class")
      p.removeChild(elements[0])
      // while(elements.length > 0){
      //   // box.parentNode.removeChild(box);
      //   p.removeChild(elements[0])
      // elements[0].classList.remove('modal-backdrop')
      // }
      // elements.classList.remove("modal-backdrop");
    }
  }
};
</script>


<style scoped>
.windowset{
  margin: 0 auto;
  max-width: 100%;
  padding: 0 0 0 0;
}
.windowset1{
  padding-right: 0 !important;
}
.windowset2{
    border-radius: 0%;
}
</style>