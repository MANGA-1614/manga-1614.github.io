<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/build/home">Builds</router-link>
  </div>

  <br>

  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  created() {
    document.title = "Persona 5 Royal Builds"
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    text-align: center;
    font-size: 150%;
  }
</style>
