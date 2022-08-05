<template>
    <footer id="footer">
     <div id="backs" class="container">
    <div class="row">
        <div class="col-4" id="reserved">
             <strong>&copy;2022 Pick n Pay</strong> No Rights Reserved
        </div>
        <div class="col-4 links">
            <h5>
               <strong>FOLLOW US ON: </strong>
            </h5>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-pinterest"></i>
        </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {

}
</script>

<style>
i{
    padding-left: 10px;
    color: white;
}
h5{
    padding-left: 12px;
}
#footer{
    background-color: #B61A4C;
    height: 100px;
    position:fixed;
    bottom:0;
    width: 100%;
}
strong{
    color: white;
}
#reserved{
    color: white;
    /* display: flex; */
    /* justify-content: center; */
    margin-top: 40px;
}
.links{
    margin-top: 40px;
    /* padding-left: 300px; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 30%;
}
</style>