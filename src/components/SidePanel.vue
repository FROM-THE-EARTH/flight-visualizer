<template>
  <div id="side-panel">
    <button class="btn btn-primary rounded-0" @click="clickInputButton">Open CSV</button>
    <button class="btn btn-primary rounded-0 border-top border-dark" @click="loadSample">Load Sample</button>
    <input ref="inputButton" type="file" accept=".csv" hidden @change="openCSV" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FlightData } from "../modules/flightData";

interface Emits {
  (e: "csvLoad", flightData: FlightData, filename: string): void;
}

const emit = defineEmits<Emits>();

const inputButton = ref<HTMLInputElement>();

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
