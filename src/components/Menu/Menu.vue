<template>
  <section class="menu" >

  <div class="navegation-icons pt-5">

    <ul>
      <li>
        <div class="pl-4 pb-2 pt-2">
          <fa-icon :icon="['fas', 'calendar-alt']" size="2x" />
          <a>Inicio</a>
        </div>

      </li>
      <li href="">
        <div class="pl-4 pb-3 pt-3">
          <fa-layer >
            <fa-icon :icon="['fas', 'calendar']" size="2x"/>
            <fa-icon :icon="['fas', 'exclamation']" size="2x" transform="shrink-8 right-2.5 bottom-5" inverse/>
          </fa-layer>
          <a> Tarefas pendentes</a>
        </div>

      </li>
      <li>
        <div class="pl-4 pb-2 pt-2">
          <fa-icon :icon="['fas', 'calendar-check']" size="2x" />
          <a href="" > Tarefas completas</a>
        </div>
      </li>
    </ul>

  </div>

  </section>
</template>

<script>

export default {


}
</script>

<style>
.menu{
  background-color: #C8C2B9;
  min-height:calc(100vh - 20px) ;
}

ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
  padding-bottom: 30px;
}
li :hover{
  width: 100%;
  background-color:#948f87;
}
li a{
  text-transform: uppercase;
  text-align: center;
}

</style>