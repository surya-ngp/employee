<template>
  <div id="app" class="main">
    <img alt="Vue logo" src="./assets/ngplogo.png"> 
    <HelloWorld msg="Welcome to NGP WEBSMART "/> 
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main{
  background-color: cadetblue;
  height: 100vh;
  width: 200vh;
}
</style>
