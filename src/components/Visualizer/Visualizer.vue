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
    <VisualizerButtonGroup
      @generate-new-array="generateNewArray"
      @do-merge-sort="mergeSort"
      @do-insertion-sort="insertionSort"
      @do-quick-sort="quickSort"
      :is-disabled="isDisabled"
    />
  </div>
</template>

<script>
import {getMergeSortAnimations} from "@/sortingAlgorithms/mergeSort";
import {getQuickSortAnimations} from "@/sortingAlgorithms/quicksort";
import {getInsertionSortAnimations} from "@/sortingAlgorithms/insertionSort";
import VisualizerButtonGroup from "@/components/Visualizer/VisualizerButtonGroup";
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
      windowInnerWidth: window.innerWidth,
      windowInnerHeight: window.innerHeight,
    };
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },

  mounted() {
    this.showTitle = true;
    const data     = util.calculateVisualizerDimensions(
                          this.$refs.visualizerRef, this.barThickness,
                          this.spaceBetweenBars);
    this.rows      = data.width;
    this.maxHeight = data.height;
    this.bars = util.generateRandomBars(this.rows, this.maxHeight);
    window.addEventListener('resize', this.handleResize);
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
    VisualizerButtonGroup,
  },

  methods: {

    handleResize() {

      console.log(this.isDisabled);

      if(this.isDisabled) {
        window.resizeTo(this.windowInnerWidth, this.windowInnerHeight);
        return;
      }

      const data = util.calculateVisualizerDimensions(this.$refs.visualizerRef, this.barThickness, this.spaceBetweenBars);

      /// width resize
      if(data.width > this.rows) {

        for(let i = 0;i < data.width - this.rows;++i) {
          this.bars.push({
            height: util.randomBetween(10, data.height),
            color: "black",
          });
        }

        this.rows = data.width;
      }

      else if(data.width < this.rows) {
        for(let i = 0;i < this.rows - data.width;++i)
          this.bars.pop();

        this.rows = data.width;
      }

       if(Math.abs(this.maxHeight - data.height) > 50) {
        this.bars = util.generateRandomBars(this.rows, data.height);
        this.maxHeight = data.height;
      }

      this.windowInnerWidth = window.innerWidth;
      this.windowInnerHeight = window.innerHeight;
    },

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
      this.animateInsertionSort(animations);
    },

  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');
@import '../../assets/css/animations.css';

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