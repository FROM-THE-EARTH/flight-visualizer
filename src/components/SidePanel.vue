<template>
  <div id="side-panel">
    <button class="btn btn-primary rounded-0 border-dark" @click="clickInputButton">Open CSV</button>
    <button class="btn btn-primary rounded-0 border-dark" @click="loadSample">Load Sample</button>
    <input ref="inputButton" type="file" accept=".csv" hidden @change="openCSV" />
    <div class="ms-2 mt-4">
      <p class="lead m-0">Flight Condition</p>
      <div class="ms-1">
        <label>Launch angle [deg]</label>
        <input type="number" class="d-block" v-model="props.flightCondition.launchAngle" min="0" max="180" />
        <label>Launch azimuth [deg]</label>
        <input type="number" class="d-block" v-model="props.flightCondition.azimuth" min="0" max="360" />
      </div>
    </div>
    <div class="ms-2 mt-4">
      <p class="lead m-0">View setting</p>
      <div class="ms-1">
        <div class="form-check form-switch">
          <label class="form-check-label">Global axes</label>
          <input class="form-check-input" type="checkbox" v-model="props.viewSetting.drawGlobalAxes" />
        </div>
        <div class="form-check form-switch">
          <label class="form-check-label">Model axes</label>
          <input class="form-check-input" type="checkbox" v-model="props.viewSetting.drawModelAxes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, PropType } from "vue";
import { FlightData } from "../modules/flightData";
import { FlightCondition } from "../modules/flightCondition";
import { ViewSetting } from "../modules/viewSetting";

const props = defineProps({
  flightCondition: {
    type: Object as PropType<FlightCondition>,
    required: true,
  },
  viewSetting: {
    type: Object as PropType<ViewSetting>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "csvLoad", flightData: FlightData, filename: string): void;
  (e: "update:flightCondition", value: FlightCondition): FlightCondition;
}>();

const inputButton = ref<HTMLInputElement>();

computed({
  get: () => props.flightCondition,
  set: (value) => {
    emit("update:flightCondition", value);
  },
});

const clickInputButton = () => {
  inputButton.value?.click();
};

const openCSV = (e: Event) => {
  const file = (e.target as HTMLInputElement).files![0];
  file
    .text()
    .then((res) => emit("csvLoad", new FlightData(res), file.name))
    .catch(alert);
};

const loadSample = () => {
  fetch(`${import.meta.env.BASE_URL}sample.csv`)
    .then((res) => res.text())
    .then((res) => {
      emit("csvLoad", new FlightData(res), "sample.csv");
    })
    .catch(alert);
};
</script>

<style scoped lang="scss">
#side-panel {
  width: 100%;
  height: 100%;
  background-color: #252525;

  button {
    width: 100%;
  }
}
</style>
