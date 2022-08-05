<template>
<section class="section">
<div class="container vh-100">
    <h2 class="">Product</h2>
  <div class="card mt-4" style="width: 18rem;">
  <img src="https://i.postimg.cc/RVMwbFjS/potato-milk-5218684-hero-03-9bd26d6a5fd34025b072f6256e039652.jpg" class="card-img-top" alt="product">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: Milk</li>
    <li class="list-group-item">Price: R16</li>
    <!-- <li class="list-group-item">A third item</li> -->
  </ul>
  <div class="card-body">
    <button class="btn btn-primary bi bi-cart4"></button>
    <button class="btn btn-danger bi bi-trash3"></button>
  </div>
</div>
</div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
    display: flex;
    justify-content: center;
    /* flex-direction: row; */
    align-items: center;
    text-align: center;
    margin-left: 40%;
}
.section{
    margin-top: 5%;
    margin-bottom: 10%;
    position: fixed;
    margin-left: 30%;
}
button{
    /* padding-left: 20px; */
    margin-left: 10px;
}
h2{
    margin-left: 70%;
}
</style>