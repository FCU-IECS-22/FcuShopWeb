<template>
    <body>
        <form modelAttribute="product" class="form" action="/login" method="post">
        <p>會員登入</p>
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" name="username">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>
        <button type="submit" class="btn btn-primary" id="login">Login</button>
        </form>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script>
            <!-- $("#login").click(function(){
                const getName = $("#username").val()
                console.log("hello : " + $("#username").val())
                localStorage.setItem("username",getName)
            }) -->
        </script>
    </body>
</template>

<script>
export default {
    name: "Account"
  }
</script>

<style>

</style>