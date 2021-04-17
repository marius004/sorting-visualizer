<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f5f5f5;
  color: #2c3e50;
}

#nav {
  padding: 12px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Footer from "@/components/Footer";
export default {
  components: {Footer}
}
</script>