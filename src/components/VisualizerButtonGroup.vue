<template>
  <div class="button-group">
    <div class="btn-group" role="group">
      <button :disabled="isDisabled" @click="$emit('generate-new-array')" type="button" class="btn btn-success">Generate New Array</button>
      <button :disabled="isDisabled" @click="$emit('do-merge-sort')" type="button" class="btn btn-primary">Merge Sort</button>
      <button :disabled="isDisabled" @click="$emit('do-quick-sort')" type="button" class="btn btn-info">Quick Sort</button>
      <button :disabled="isDisabled" @click="$emit('do-insertion-sort')" type="button" style="background-color: #81c784;" class="btn">Insertion Sort</button>
      <button @click="reloadPage" type="button" class="btn btn-warning">Reload Page</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",

  emits: ['generate-new-array', 'do-merge-sort', 'do-bubble-sort', 'do-quick-sort'],

  props: {
    isDisabled: {
      type: Boolean,
      required: true,
    }
  },

  methods: {

    reloadPage() {
      window.location.reload(true);
    },

  }

}
</script>

<style scoped>

.btn {
  color: white;
  border-radius: 2px;
}

button {
  margin-right: 8px;
  font-size: 20px;
}

.button-group {
  padding: 12px;
  width: 98%;
  margin: 0 auto;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .btn-group {
    display: block;
  }
  button {
    display: block;
    margin-bottom: 4px;
    text-align: center;
  }
}
</style>