<template>
<section>
    <div>
      <Header />
    </div>
  <section class="home">
    <div>
      <Menu />
    </div>
    <div>
      <Content />
    </div>
  </section>

</section>
</template>

<script>
import Header from './Header/Header'
import Menu from './Menu/Menu.vue'
import Content from './Content/Content'
export default {
  components:{Header, Menu, Content}
}
</script>

<style>
.home{
  display: grid;
  grid-template-columns: 20% 80%;
  width: 100%;
  height: 100vh;
}


</style>