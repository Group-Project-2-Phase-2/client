<template>
  <div id="login-page">
    <div class="masthead d-flex align-items-center justify-content-center" id="login-page-css">
      <div id="login-card" class="card shadow p-3 mb-5 bg-body rounded text-left">
        <div class="card-body" style="padding-bottom:1px">
          <h1 class="text-center mb-3">Login</h1>
          <form>
            <div class="form-floating mb-3">
              <label>Username</label>
              <input type="username" class="form-control" v-model= "username" placeholder="cookiemonster123">
            </div>
            <div class="form-floating">
              <label>Password</label>
              <input type="password" class="form-control" v-model= "password" placeholder="Password">
            </div>
            <div class="row d-flex justify-content-center" style="margin-top: 10px; margin-bottom:15px">
              <button class="btn btn-outline-primary mt-3 col-md-4" type="button" @click.prevent="login()" id="btn-login-submit">Login</button>
            </div>
            <p style="padding-bottom:-15px">Don't have an account? <router-link to="/register"><a>Register</a></router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const user = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('login', user)
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
  #login-page-css {
    height: 100vh;
    min-height: 500px;
  }

  #login-card {
    min-width: 20rem !important;
  }
</style>