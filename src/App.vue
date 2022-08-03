<template>
  <div id="app">
    <div id="top-bar" class="text-center">
      <p class="m-0">Flight Visualizer {{ csvFileName ? ` - ${csvFileName}` : "" }}</p>
    </div>
    <div id="main" class="row g-0">
      <div class="col-2"><SidePanel @csv-load="onCSVLoad" /></div>
      <div class="col-10"><Viewer :flightData="flightData" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SidePanel from "./components/SidePanel.vue";
import Viewer from "./components/Viewer.vue";
import { FlightData } from "./modules/flightData";

let flightData = ref<FlightData>();
let csvFileName = ref<string>();

const onCSVLoad = (data: FlightData, filename: string) => {
  flightData.value = data;
  csvFileName.value = filename;
};
</script>

<style scoped lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}

#top-bar {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 1.1rem;
}

#main {
  height: calc(100% - 50px);
}
</style>
