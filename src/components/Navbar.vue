<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">FCU Shop</a>

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
            <a class="nav-link active" aria-current="page" href="#">首頁</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">逢甲商城</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">一中商城</a>
          </li>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              商品選單
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a href="addFile" class="dropdown-item">增加商品</a></li>
              <li><a href="modifyFile" class="dropdown-item">修改商品</a></li>
            </ul>
          </div>
        </ul>

        <ul class="navbar-nav mb-2 mb-lg-0 d-flex not-login">
          <li class="nav-item">
            <a class="nav-link" href="/login">登入</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signUp">註冊</a>
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
    </div>
  </nav>

  <div class="container">
    <h1 class="mt-3">My Shop</h1>
        <input type="text" class="form-control" placeholder="商品名稱" aria-label="product name" aria-describedby="searchProduct" id="productKeyword">
        <button class="btn btn-outline-secondary" type="button" id="searchProduct">Search</button>
        <button class="btn btn-outline-secondary" type="button" id="cleanProduct">Clean</button>
    <div class="mt-3 row" id="productList">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>