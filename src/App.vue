<template>
  <div id="app">
    <div id="top-bar" class="text-center">
      <p class="m-0">Flight Visualizer {{ csvFileName ? ` - ${csvFileName}` : "" }}</p>
    </div>
    <div id="main" class="row g-0">
      <div class="col-2">
        <SidePanel @csv-load="onCSVLoad" :flight-condition="flightCondition" :view-setting="viewSetting" />
      </div>
      <div class="col-10">
        <Viewer ref="viewer" :flightData="flightData" :flight-condition="flightCondition" :view-setting="viewSetting" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SidePanel from "./components/SidePanel.vue";
import Viewer from "./components/Viewer.vue";
import { FlightData } from "./modules/flightData";
import { FlightCondition } from "./modules/flightCondition";
import { ViewSetting } from "./modules/viewSetting";

let flightData = ref<FlightData>();
let flightCondition = ref<FlightCondition>({
  launchAngle: 70,
  azimuth: 0,
  bodyRolling: 0,
});
let viewSetting = ref<ViewSetting>({
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
  height: calc(100% - 50px);
}
</style>
