<template>
  <section >
      <div> <AddTasks /> </div>
      <div > <Tasks /></div>
  </section>
</template>

<script>
import AddTasks from './Add/Add-tasks'
import Tasks from './Tasks/Tasks'
export default {
    components:{AddTasks, Tasks}
}
</script>

<style>
  

</style>