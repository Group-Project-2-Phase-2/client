<template>
  <div>
      <div style="margin-top:15%">

        <img src="../assets/Spinner-1s-200px.gif" alt="">
        <h1>PREPARE YOURSELF...</h1>
      </div>
  </div>
</template>

<script>
export default {
    created () {
        this.$store.dispatch('fetchEnemy')
    }
}
</script>

<style>

</style>