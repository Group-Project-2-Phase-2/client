<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">Let's begin!</h1>
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
  },
  computed: {
    getUser () {
      // let getUser1 = this.$store.state.user1
      // let getUser2 = this.$store.state.user2
      // if (!getUser1 || !getUser2) {
      //   this.$router.push('Matchmaking')
      // }
      return console.log('keluar room')
    }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 50px;
  }
</style>
