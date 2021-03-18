<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">Let's begin, (USERNAME)!</h1>
      <Billboard></Billboard>
      <Cards></Cards>
    </div>
  </div>
</template>

<script>
import Billboard from '../components/Billboard.vue'
import Cards from '../components/Card.vue'

export default {
  name: 'InMatch',
  components: {
    Billboard,
    Cards
  }
}
</script>

<style scoped>
  .container{
    margin-top: 50px;
  }
</style>
