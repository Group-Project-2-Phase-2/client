<template>
  <div id="login-page-css" class="container">
    <div id ="top">
      <div class="row">
        <div class="col-md-12 col-xs-12 col-lg-12">
          <h1>JANKENPON!</h1>
        </div>
      </div>
      <h2 style="margin-top:15px">The online multiplayer rock, paper, scissors game</h2><br>
      <!-- <button type="button" @click.prevent="clg()">Hello</button>
      <a href="/login">Halo</a> -->
      <div class="text-center">
        <button id="btn1" type="button" class="btn btn-primary btn-lg text-center" @click.prevent="startGame()">Let's Play!</button>
        <router-link to="/"><button id="btn2" type="button" class="btn btn-primary btn-lg text-center" @click.prevent="logout()">Log Out</button></router-link>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  methods : {
    clg () {
      console.log('hello')
    },
    created () {
    },
    startGame () {
      console.log("start game")
      this.$router.push('/loading')
    },
    logout () {
      console.log("log out");
      localStorage.removeItem('access_token')
      this.$router.push('login')
    }
  }
}
</script>

<style scoped>
  @media only screen and (max-width: 420px) {
    #top{
      margin-top: 150px
    }
    button{
      margin-top:20px;
      width:40%;
      font-size: 20px;
      border-radius: 10px;
    }
    #btn1{
      left: 80%;
    }
    #btn2{
      margin-left:35px
    }
  }

  @media only screen and (max-width: 720px) {
    #top{
      margin-top: 150px
    }
    h1 {
      font-size:150px;
    }
    h2{
      font-size:20px;
    }
    button{
      margin-top:20px;
      width:40%;
      font-size: 20px;
      border-radius: 10px;
    }
    #btn1{
      left: 80%;
    }
    #btn2{
      margin-left:35px
    }
  }

  @media only screen and (max-width: 960px) {
    #top{
      margin-top: 150px
    }
    h1 {
      font-size:50px;
    }
    h2{
      font-size:20px;
    }
    button{
      margin-top:20px;
      width:30%;
      font-size: 20px;
      border-radius: 10px;
    }
    #btn1{
      left: 80%;
    }
    #btn2{
      margin-left:35px
    }
  }

  @media only screen and (min-width: 961px) {
    #top{
      margin-top: 150px
    }
    h1 {
      font-size:150px;
    }
    h2{
      font-size:40px;
    }
    button{
      margin-top:20px;
      width:20%;
      font-size: 40px;
      border-radius: 10px;
    }
    #btn1{
      left: 80%;
    }
    #btn2{
      margin-left:35px
    }
  }

  #login-page-css {
    height: 100vh;
    min-height: 500px;
  }
</style>