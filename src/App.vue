<template>
<section class="container-fluid">
  <Home />
  
</section>
</template>
// #C8C2B9 #E0DDD7
<script>

import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './components/Home'
export default {
  components:{Home}
}
</script>

<style>
.container-fluid{
  font-family: 'Overpass', "sans-serif";
 padding: 0px;
  background-color:#E0DDD7;
}
</style>
