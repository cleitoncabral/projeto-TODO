<template>
  <section class="addTasks pt-5 pb-5" >
      <input type="text" class="pt-2 pb-1" placeholder="Adicionar nova tarefa">
      <button class="button pt-1">
      <fa-icon :icon="['fas','arrow-right']" />
      </button>
  </section>
</template>

<script>
export default {

}
</script>

<style>
    .addTasks{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E0DDD7;
        height: 100%;
    }
    input{
        outline: #C8C2B9;
        border-radius: 10px 0 0px 10px;
        width:50%; 
        height:50px
    }
    .button{
        outline: none;
        border-radius: 0px 10px 10px 0;
        height: 50px;
    }
</style>