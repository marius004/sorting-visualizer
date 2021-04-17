<template>
  <div class="card">
    <img :src="image" />
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
img {
  width:  250px;
  height: 200px;
}
.card {
  background-color: #e0e0e0;
  border-radius: 6px;
  margin-bottom: 12px;
}
img {
  margin: 0 auto;
}
.card-body {
  background-color: #e0f7fa;
}
</style>