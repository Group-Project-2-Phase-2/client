<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  position: relative;
  background-image: url('https://image.freepik.com/free-vector/seamless-pattern-petals-gray-background_53876-61842.jpg');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
