<template>
  <div>
    <div class="visualizer-container">
      <div ref="visualizerRef" class="visualizer-title" :class="{ shake: showTitle }">
          <h3 v-if="showTitle">Sorting Algorithms Visualized</h3>
      </div>
      <div class="visualizer popout">
        <div v-for="(bar, index) in this.bars"
             class="bar"
             :style="[barStyling, { height: bar.height + 'px', backgroundColor: bar.color }]"
             :key="index">
        </div>
      </div>
    </div>
    <ButtonGroup
      @generate-new-array="generateNewArray"
      @do-merge-sort="mergeSort"
      @do-insertion-sort="insertionSort"
      @do-quick-sort="quickSort"
      :is-disabled="isDisabled"
    />
  </div>
</template>

<script>
import ButtonGroup from "@/components/VisualizerButtonGroup";

import {getMergeSortAnimations} from "@/sortingAlgorithms/mergeSort";
import {getQuickSortAnimations} from "@/sortingAlgorithms/quicksort";
import {getInsertionSortAnimations} from "@/sortingAlgorithms/insertionSort";
import util from "@/util";

export default {

  name: "Visualizer",

  data() {
    return {
      showTitle: false,
      rows: 0,
      maxHeight: 0,
      bars: [],
      timeout: 5,
      isDisabled: false,
    };
  },

  mounted() {
    this.showTitle = true;
    const data     = util.calculateVisualizerDimensions(
                          this.$refs.visualizerRef, this.barThickness,
                          this.spaceBetweenBars);
    this.rows      = data.width;
    this.maxHeight = data.height;
    this.bars = util.generateRandomBars(this.rows, this.maxHeight);
    console.log(this.bars);
  },

  computed: {

    barStyling() {
      return {
        width: `${this.barThickness}px`,
        marginLeft: `${this.spaceBetweenBars}px`,
      };
    },

  },

  props: {

    barThickness: {
      type: Number,
      required: true,
    },

    spaceBetweenBars:  {
      type: Number,
      required: true,
    },

  },

  components: {
    ButtonGroup,
  },

  methods: {

    generateNewArray() {
      this.bars = util.generateRandomBars(this.rows, this.maxHeight);
    },

    disableButtonsFor(time) {
      this.isDisabled = true;

      setTimeout(() => {
        this.isDisabled = false;
      }, time);
    },

    animateMergeSort(animations) {

      window.scroll(0, 0);

      for(let i = 0;i < animations.length;++i) {
        setTimeout(() => {
          if(i % 3 == 0) {
            this.bars[ animations[i][0] ].color = "red";
            this.bars[ animations[i][1] ].color = "red";
          } else if(i % 3 == 1) {
            this.bars[ animations[i][0] ].color = "black";
            this.bars[ animations[i][1] ].color = "black";
          } else {
            this.bars[animations[i][0]].height = animations[i][1];
          }
        }, i * this.timeout);
      }

      this.disableButtonsFor(animations.length * this.timeout);
    },

    animateBubbleSort(animations) {

      window.scroll(0, 0);

      for(let i = 0;i < animations.length;++i) {
        setTimeout(() => {
          if(animations[i][2] == "color") {

            this.bars[ animations[i][0] ].color = "red";
            this.bars[ animations[i][1] ].color = "red";

          } else if(animations[i][2] == "revert") {

            this.bars[ animations[i][0] ].color = "black";
            this.bars[ animations[i][1] ].color = "black";

          } else {
            [this.bars[animations[i][0]], this.bars[animations[i][1]]] =
                [ this.bars[animations[i][1]], this.bars[animations[i][0]]];
          }

        }, i * this.timeout / 4);
      }
      this.disableButtonsFor(this.timeout / 4 * animations.length);
    },

    animateQuickSort(animations) {

      window.scroll(0, 0);

      for(let i = 0;i < animations.length;++i) {
        setTimeout(() => {
          if(animations[i][2] == 'color') {
            this.bars[ animations[i][0] ].color = "red";
            this.bars[ animations[i][1] ].color = "red";
          } else if(animations[i][2] == 'revert') {
            this.bars[ animations[i][0] ].color = "black";
            this.bars[ animations[i][1] ].color = "black";
          }else {
            [ this.bars[ animations[i][0] ], this.bars[animations[i][1]] ] =
                [ this.bars[ animations[i][1] ], this.bars[animations[i][0]] ];
          }
        }, i * this.timeout);
      }

      this.disableButtonsFor(this.timeout * animations.length);
    },

    animateInsertionSort(animations) {

      window.scroll(0, 0);

      for(let i = 0;i < animations.length;++i) {
        setTimeout(() => {
          if(animations[i][2] == 'color') {
            this.bars[ animations[i][0] ].color = "red";
            this.bars[ animations[i][1] ].color = "red";
          } else if(animations[i][2] == 'revert') {
            this.bars[ animations[i][0] ].color = "black";
            this.bars[ animations[i][1] ].color = "black";
          } else {
            this.bars[ animations[i][0] ].height = animations[i][1];
          }
        }, i * this.timeout / 4);
      }

      this.disableButtonsFor(this.timeout * animations.length / 4);
    },

    mergeSort() {
      const animations = getMergeSortAnimations(this.bars);
      this.animateMergeSort(animations);
    },

    quickSort() {
      const animations = getQuickSortAnimations(this.bars);
      this.animateQuickSort(animations);
    },

    insertionSort() {
      const animations = getInsertionSortAnimations(this.bars);
      console.log(animations);
      this.animateInsertionSort(animations);
    },

  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');
@import '../assets/css/animations.css';

.visualizer-title {
  text-align: center;
  font-family: 'Bad Script', cursive;
}

.visualizer {
  width: 96%;
  padding: 12px;
  margin: 0 auto 20px auto;
  border: 2px solid #616161;
  -webkit-box-shadow: 12px 10px 5px 0px rgba(199,185,199,1);
  -moz-box-shadow: 12px 10px 5px 0px rgba(199,185,199,1);
  box-shadow: 12px 10px 5px 0px rgba(199,185,199,1);
  border-radius: 3px;
}

.bar { display: inline-flex; }
</style>