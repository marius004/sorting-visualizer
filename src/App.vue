<template>
  <div class="app">
    <div class="container-fluid">
      <Visualizer
          :barThickness="barThickness"
          :spaceBetweenBars="spaceBetweenBars"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import Visualizer from "@/components/Visualizer";
import Footer from "@/components/Footer";

export default {
  name: 'App',

  components: {
    Footer,
    Visualizer,
  },

  data() {
    return {
      barThickness: 5,
      spaceBetweenBars: 1,
    }
  }

}
</script>

<style>
html, body {
  margin: 0px;
  height:100%;
  background-color: var(--background--color);
}
:root {
  --background--color: #f5f5f5;
}
.app {
  padding-top: 7px;
  width: 100%;
  height: 100%;
}
</style>