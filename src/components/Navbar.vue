<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">FCU Shop</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- 
            直接將 <a></a> 取代成 <router-link></router-link>
            class 的部分都不用變更，但是 href 要刪掉，換成 to=""
              -->
            <router-link to="/" class="nav-link active" aria-current="page">首頁</router-link>
          </li>
        </ul>

        <ul class="navbar-nav mb-2 mb-lg-0 d-flex not-login">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">登入</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">註冊</router-link>
          </li>
        </ul>

        <ul class="navbar-nav mb-2 mb-lg-0 d-flex is-login">
          <li class="nav-item">
            <a class="nav-link" href="#">會員中心</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">購物車(0)</a>
          </li>
        </ul>
      </div>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" data-toggle="modal" data-target="#searchBotton">Search</button>
    </div>
  </nav>

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

</template>

<script>
// TODO:
// 搜尋功能
export default {
  name: "Nav",
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    backhome(){
      var elements = document.getElementsByClassName('modal-backdrop');
      var p = elements[0].parentNode
      p.removeAttribute("style")
      p.removeAttribute("class")
      p.removeChild(elements[0])
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