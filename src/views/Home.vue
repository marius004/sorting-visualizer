<template>
  <div class="app">
    <div class="container-fluid">
      <Visualizer
          :barThickness="barThickness"
          :spaceBetweenBars="spaceBetweenBars"
      />
    </div>
  </div>
</template>

<script>
import Visualizer from "@/components/Visualizer/Visualizer";

export default {
  name: 'Home',
  components: {
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