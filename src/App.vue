<template>
  <builds1/>
</template>

<script>
import builds1 from './components/builds_1.vue'
import builds2 from './components/builds_2.vue'

export default {
  name: 'App',
  components: {
    builds1,
    builds2,
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
    /*text-align: center;*/
    color: #2c3e50;
  }
</style>
