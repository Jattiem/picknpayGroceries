<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <img  class="imgnav" src="https://i.postimg.cc/hvgJzRjs/pjurttx4tdkkasba6syt.jpg" alt="">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/groceries">Groceries</router-link>
      <router-link to="/grocery">Product</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </div>
  <div class="carttop">
    <a class="btn bi bi-cart4"></a>
  </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  position: fixed;
  top: 0;
  /* background-color: rgba(255, 255, 255, 0.642); */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding-left: 20px;
  font-size: large;
}

nav a.router-link-exact-active {
  color: rgb(0, 89, 255);
}

.imgnav{
  width: 200px;
  height: 100px;
}
.carttop{
  padding-right: 10px;
  /* font-size: 2rem; */
}
.carttop a{
  font-size: 2rem;
}
#nav{
  position:fixed;
  top:0;
  width: 100%;
}
</style>