<template>
<section class="section">
  <h2>Login Form</h2>
<form action="" method="post">
  <div class="container mt-5">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
    <span class="pass">Forgot<a href="#" class="space">password?</a></span>
  </div>
</form>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: rgb(0, 89, 255);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}
.container {
  padding: 16px;
  border-radius: 25px;
  border: 1px solid black;
  width: 50%;
  /* padding-top: 50px; */
}

.pass{
  padding-left: 20px;
}

.space{
  padding-left: 2px;
}
.section{
  margin-top: 5%;
}
</style>