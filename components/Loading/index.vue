<template>
  <div class="showX">
    <div class="loading">
      <span>C</span>
      <span>a</span>
      <span>r</span>
      <span>g</span>
      <span>a</span>
      <span>n</span>
      <span>d</span>
      <span>o</span>
    </div>
    <div id="preloader"></div>
  </div>
</template>

<script>
import loadingPace from "../../common/loadingPace";
export default {
  mounted() {
    if (window.Pace) {
      loadingPace();
    }
  },
};
</script>

<style scoped>
</style>