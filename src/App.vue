<template>
  <div id="app">
    <div id="top-bar" class="text-center">
      <p class="m-0">Flight Visualizer {{ csvFileName ? ` - ${csvFileName}` : "" }}</p>
    </div>
    <div id="main" class="row g-0">
      <div class="col-2">
        <SidePanel @csv-load="onCSVLoad" :flight-condition="flightCondition" :viewer-setting="viewerSetting" />
      </div>
      <div class="col-10">
        <Viewer
          ref="viewer"
          :flightData="flightData"
          :flight-condition="flightCondition"
          :viewer-setting="viewerSetting"
        />
      </div>
    </div>
    <footer class="text-center">
      Copyright © <a class="text-white" href="https://github.com/FROM-THE-EARTH">FROM THE EARTH</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SidePanel from "./components/SidePanel.vue";
import Viewer from "./components/Viewer.vue";
import { FlightData } from "./modules/flightData";
import { FlightCondition } from "./modules/flightCondition";
import { ViewerSetting } from "./modules/viewerSetting";

let flightData = ref<FlightData>();
let flightCondition = ref<FlightCondition>({
  launchAngle: 70,
  azimuth: 0,
  bodyRolling: 0,
});
let viewerSetting = ref<ViewerSetting>({
  drawGlobalAxes: true,
  drawModelAxes: true,
});

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
  height: calc(100% - 90px);
}

footer {
  height: 40px;
  line-height: 40px;
  background-color: #282828;
}
</style>
