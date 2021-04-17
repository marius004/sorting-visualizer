<template>
  <div>
    <Jumbotron
        title="Sorting Algorithms"
        first-paragraph="In computer science, a sorting algorithm is an algorithm that puts elements of a list in a certain order."
        second-paragraph="The most frequently used orders are numerical order and lexicographical order."
        link="https://en.wikipedia.org/wiki/Sorting_algorithm"
    />
    <div style="margin-top: 20px;" class="container">

      <div class="row">
        <div class="col lg-4">
            <Card :image="require('@/assets/vuejs.png')">
              <h5>This website was made with <a href="https://vuejs.org/">Vue.js</a></h5>
            </Card>
          </div>

          <div class="col lg-4">
            <Card :image="require('@/assets/github.png')">
              <h5>Open source project:</h5>
              <a class="btn btn-primary" href="https://github.com/marius004/sorting-visualizer">See project</a>
            </Card>
          </div>

        <div class="col lg-4">
            <Card :image="require('@/assets/bootstrap.png')">
              <h5>Styled with <a href="https://getbootstrap.com/">bootstrap</a></h5>
            </Card>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron";
import Card from "@/components/Card";

export default {
  name: "About",

  components: {
    Card,
    Jumbotron
  },

}

</script>

<style scoped>
</style>