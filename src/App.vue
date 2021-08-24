<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/build/home">Builds</router-link>
  </div>

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

</style>
