<template>
  <form @submit.prevent modelAttribute="product" :class="isSign" class="form loginwindow" action="/login" method="post" >
    <p>會員{{path}}</p>
    <div class="mb-3">
      <label for="username" class="form-label ">Username</label>
      <input v-model="username" type="text" class="form-control loginset" id="username" name="username" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label ">Password</label>
      <input v-model="password" type="password" class="form-control loginset"/>
    </div>
    <button @click="submit()" class="btn btn-primary loginset">{{path}}</button>
  </form>
</template>

<script>

export default {
  name: "Account",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    path: function () {
      if(this.$route.name == 'login') return "登入"
      else if(this.$route.name == 'signup') return "註冊"
      return "System Error"
    },
    isSign: function () {
      if(this.$route.name == 'signup') return "Signup"
      else return "Login"
    },
  },
  components: {
  },
  methods: {
    submit(){
      // TODO: 可以做點加密
      let destin = ''
      if(this.path == '登入') destin = 'loginn'
      else if(this.path == '註冊') destin = 'signUpp'
      this.$http.post(process.env.VUE_APP_BACKEND_URL + destin, {
        id: 123,
        username: this.username,
        password: this.password,
      })
      .then( r => {
        if(r.data == 'unknown user') alert(r.data)
        else this.$router.push({name:'Admin', params: { USER: r.data }})
      })
      .catch( r => console.log(r))
    },
  }
}
</script>


<style scoped>
.Login{
  background-color:aquamarine;
}
.Signup{
  background-color:blanchedalmond;
}
.loginwindow{
  font-size: 30px;
  text-align: center;
  width:40%;
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