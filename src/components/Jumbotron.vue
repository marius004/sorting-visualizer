<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">

      <h1 class="display-6"> {{title}} </h1>

      <transition name="fadeOne">
        <div v-show="show" class="container" style="margin-bottom: 0;">
          <p class="lead One" style="margin-bottom: 0px;">{{firstParagraph}}</p>
        </div>
      </transition>

      <transition name="fadeTwo">
        <div v-show="show" class="container" style="margin-bottom: 0;">
          <p class="lead Two" style="margin: 0;">{{secondParagraph}}</p>
          <a v-if="link" class="lead Two" :href="link">{{link}}</a>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",

  data() {
    return {
      show: false,
    }
  },

  mounted() {
    this.show = true;
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    firstParagraph: {
      type: String,
      required: true,
    },
    secondParagraph: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    }
  }

}
</script>

<style scoped>
.jumbotron {
  padding: 4px;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  background: rgb(218,230,233);
  background: linear-gradient(90deg, rgba(218,230,233,1) 11%, rgba(136,182,191,1) 100%);
  -webkit-box-shadow: 5px -3px 2.5px 0px rgba(218,230,233,1);
  -moz-box-shadow: 5px -3px 2.5px 0px rgba(224,215,224,1);
  box-shadow: 5px -3px 2.5px 0px rgba(136,182,191,1);
}
.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

p {
  text-align: center;
  overflow: hidden;
}

.One, .Two {
  font-size: 24px;
  font-family: Georgia, serif;
}

.fadeOne-enter-active, .fadeOne-leave-active {
  transition: all .5s ease-out;
  transition-delay: 0.2s;
}
.fadeOne-enter, .fadeOne-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}

.fadeTwo-enter-active, .fadeTwo-leave-active {
  transition: all .5s ease-out;
  transition-delay: 0.2s;
}
.fadeTwo-enter, .fadeTwo-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}
</style>