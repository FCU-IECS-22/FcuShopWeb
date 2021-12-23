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
            <router-link to="/" class="nav-link active" aria-current="page">首頁</router-link>
          </li>
        </ul>

        <ul class="navbar-nav mb-2 mb-lg-0 d-flex not-login">
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">登入</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">註冊</router-link>
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



</template>

<script>
export default {};
</script>

<style>
</style>