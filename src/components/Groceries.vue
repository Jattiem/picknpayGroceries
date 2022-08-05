<template>
<section class="section">
   <h2>Groceries</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Items</th>
      <th scope="col">Price</th>
      <!-- <th scope="col">Handle</th> -->
      <th scope="col">Add</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="name" scope="row">Milk</th>
      <td><img class="img2" src="https://i.postimg.cc/RVMwbFjS/potato-milk-5218684-hero-03-9bd26d6a5fd34025b072f6256e039652.jpg" alt=""></td>
      <td>R 16</td>
      <!-- <td>@mdo</td> -->
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>
    </tr>
    <tr>
      <th class="name" scope="row">Bread</th>
      <td><img class="img1" src="https://i.postimg.cc/0yCkX51s/blog-featured-image.png" alt=""></td>
      <td>R 12</td>
      <!-- <td>@fat</td> -->
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>

    </tr>
    <tr>
      <th class="name" scope="row">Butter</th>
      <td><img class="img1" src="https://i.postimg.cc/prBcbSWp/maxresdefault.jpg" alt=""></td>
      <td>R 12</td>
      <!-- <td>@twitter</td> -->
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>

    </tr>
    <!-- <tr>
      <th class="name" scope="row">Jam</th>
      <td><img class="img2" src="https://i.postimg.cc/65QbmRbc/Strawberry-Jam-RECIPE.jpg" alt=""></td>
      <td>R 15</td>
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>

    </tr> -->
    <!-- <tr>
      <th class="name" scope="row">Apples</th>
      <td><img class="img2" src="https://i.postimg.cc/jCVWPyDT/health-benefits-of-apples-1296x728-feature.jpg" alt=""></td>
      <td>R 14</td>
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>

    </tr>
    <tr>
      <th class="name" scope="row">Bananas</th>
      <td><img class="img2" src="https://i.postimg.cc/rmBWCBH7/bananas-1354785-1920.jpg" alt=""></td>
      <td>R 9</td> 
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>

    </tr>
    <tr>
      <th class="name" scope="row">Tomotoe Sauce</th>
      <td><img class="img2" src="https://i.postimg.cc/h40PrFNx/61723836.webp" alt=""></td>
      <td>R 12</td>
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>
    </tr>
    <tr>
      <th class="name" scope="row">Beans</th>
      <td><img class="img2" src="https://i.postimg.cc/xjNBfL3d/Canning-Pinto-Beans-18.jpg " alt=""></td>
      <td>R 13</td>
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>

    </tr>
    <tr>
      <th class="name" scope="row">Toilet Paper</th>
      <td><img class="img2" src="https://i.postimg.cc/zGYNZxm5/2018-08-on-a-roll-detail-1200x627.jpg" alt=""></td>
      <td>R 16</td>
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>

    </tr>
    <tr>
      <th class="name" scope="row">Potatoes</th>
      <td><img class="img1" src="https://i.postimg.cc/CKzpbXkG/raw-potatoes-732x549-thumbnail-732x549.jpg" alt=""></td>
      <td>R 14</td>
      <td><button class="btn btn-primary bi bi-cart4"></button></td>
      <td><button class="btn btn-danger bi bi-trash3"></button></td>

    </tr> -->
  </tbody>
</table>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.img1{
  height: 100px;
  width: 200px;
  object-fit: cover;
  object-position: 0 0.20px;
  border-radius: 10px;
}
.img2{
  height: 100px;
  width: 200px;
  border-radius: 10px;

}
.name{
  /* padding-top: 40px; */
  font-size: large;
}
.table{
  width: 50%;
  margin-left: 25%;
  /* border: 1px solid black; */
  margin-top: 30px;
}
/* table, th, td {
    width: 20%;
    margin: auto;
    border: 1px solid black;
    border-collapse: collapse;

} */
.section{
  margin-top: 5%;
  margin-bottom: 10%;
  /* padding-top: 10%; */
}

</style>