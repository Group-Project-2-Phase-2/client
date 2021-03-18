<template>
  <div style="height:80vh;" class="row my-5" id="matchmaking-page">
      <div class="col-4">
      </div>
      <div class="col-4 jumbotron" style="background-color:whitesmoke; height:20vh; margin-top:15%">
      <h1 style="">Welcome to Jankenpon</h1>
        <button type="button" class="btn btn-outline-secondary btn-lg" style="width:300px" @click.prevent="startGame">Start</button>
      </div>
      <div class="col-4">
        <i class="fas fa-power-off fa-3x" @click.prevent="logout" id="logout-btn"></i>
      </div>
  </div>
</template>

<script>
export default {
  methods : {
    created () {
    },
    startGame () {
      console.log("start game")
      this.$router.push('loading')
    },
    logout () {
      console.log("log out");
      localStorage.removeItem('access_token')
      this.$router.push('login')
    }
  }
}
</script>

<style>
  #logout-btn {
    color: red;
  }
</style>