<template>
  <form modelAttribute="product" class="form loginwindow" id='loginForm' action="/login" method="post">
    <p>會員登入</p>
    <div class="mb-3">
      <label for="username" class="form-label ">Username</label>
      <input type="text" class="form-control loginset" id="username" name="username" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label ">Password</label>
      <input
        type="password"
        class="form-control loginset"
        id="password"
        name="password"
      />
    </div>
    <button @click="loginFunc()" type="button" class="btn btn-primary loginset " id="login">登 入</button>
  </form>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      arr: [],
      editedData: {
        username: '',
        password: '',
      }
    };
  },
  methods: {
    
    loginFunc(){
      console.log("哭哭")
      let a = document.getElementById("loginForm").getElementsByTagName("input")
      this.editedData.username = a[0].value
      this.editedData.password = a[1].value

      this.$http.post(process.env.VUE_APP_BACKEND_URL + "login",
      {
        username: this.editedData.username,
        password: this.editedData.password
      })
      .then( r => console.log(r))
      .catch( r => console.log(r))

    }
  }
}
</script>

<style scoped>
.loginwindow{
  font-size: 30px;
  text-align: center;
  width:40%;
  background-color:aquamarine;
  margin: auto;
  margin-top: 15px;
  padding: 30px;
  border: 1px solid #000000;
}
.loginset{
  width:60%;
  margin: auto;
}
.btn-primary{
  width:10%;
  margin: auto;
}
</style>