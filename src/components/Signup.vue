<template>
  <form modelAttribute="product" class="form signwindow" action="/sign" method="post">
    <p>會員註冊</p>
    <div class="mb-3">
      <label for="username" class="form-label ">Username</label>
      <input type="text" class="form-control signset" id="username" name="username" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label ">Password</label>
      <input
        type="password"
        class="form-control signset"
        id="password"
        name="password"
      />
    </div>
    <button type="submit" class="btn btn-primary signset" id="sign">sign</button>
  </form>
</template>

<script>
export default {
    name: "Account",
    methods: {
        getData(){
            this.$http.post(process.env.VUE_APP_BACKEND_URL + "sign",
            {
              username: this.editedData.username,
              password: this.editedData.password,
            })
            .then( r => console.log(r))
            .catch( r => console.log(r))
    }
  }
}
</script>

<style>
.signwindow{
  font-size: 30px;
  text-align: center;
  width:40%;
  background-color:bisque;
  margin: auto;
  margin-top: 15px;
  padding: 20px;
  border: 1px solid #000000;
}
.signset{
  width:60%;
  margin: auto;
}
.btn-primary{
  width:20%;
  margin: auto;
}
</style>