<template>
  <div id="viewer">
    <div id="view" ref="view"></div>
    <div id="height-graph" ref="heightGraph"></div>
    <div id="bottom-panel">
      <div class="d-flex">
        <button
          class="btn btn-primary rounded-0 px-2 py-1"
          @click="togglePlay"
          :disabled="!props.flightData"
          style="width: 50px"
        >
          {{ props.flightData && play ? "■" : "▶" }}
        </button>
        <div class="w-100" style="padding-left: 10px; padding-right: 10px">
          <input
            type="range"
            class="form-range align-middle"
            min="0"
            :max="props.flightData ? props.flightData.steps.length - 2 : 0"
            @change="recalculateRotation"
            @pointerdown="startSeek"
            @pointerup="stopSeek"
            v-model.number="flightStep"
          />
          <div class="d-flex">
            <div>
              <p class="d-inline">
                Time {{ props.flightData ? props.flightData.steps[flightStep].time.toFixed(2) : "0.00" }} /
                {{
                  props.flightData ? props.flightData.steps[props.flightData.steps.length - 1].time.toFixed(2) : "0.00"
                }}
              </p>
              <p class="ms-4 d-inline">
                Step {{ flightStep }} / {{ props.flightData ? props.flightData.steps.length : 0 }}
              </p>
            </div>
            <div class="ms-auto d-inline">
              <label>Playback speed: x {{ playbackSpeed.toFixed(1) }}</label>
              <input
                type="range"
                class="form-range d-inline align-middle ms-2"
                min="0.1"
                max="20"
                step="0.1"
                v-model.number="playbackSpeed"
                style="width: 200px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, PropType, watch, toRefs } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { FlightData } from "../modules/flightData";
import { FlightCondition } from "../modules/flightCondition";
import { ViewSetting } from "../modules/viewSetting";
import plotly from "plotly.js-dist-min";

const MODEL_LENGTH = 100;
const MAX_CAMERA_DISTANCE = MODEL_LENGTH * 2;
const Deg2Rad = Math.PI / 180;

const props = defineProps({
  flightData: {
    type: Object as PropType<FlightData | undefined>,
    required: true,
  },
  flightCondition: {
    type: Object as PropType<FlightCondition>,
    required: true,
  },
  viewSetting: {
    type: Object as PropType<ViewSetting>,
    required: true,
  },
});

const view = ref<HTMLDivElement>();
const heightGraph = ref<HTMLDivElement>();

let rocketObject: THREE.Group;
let globalAxis = new THREE.AxesHelper(MAX_CAMERA_DISTANCE);
let rocketAxis = new THREE.AxesHelper(MODEL_LENGTH / 3);

let flightStep = ref(0);
let playbackSpeed = ref(1.0);
let play = ref(true);
let seeking = false;

let previousLaunchAngle = 0;
const setLaunchAngle = (angle: number) => {
  rocketObject.rotateX((angle - previousLaunchAngle) * Deg2Rad);
  previousLaunchAngle = angle;
};

let previousAzimutgh = 0;
const setAzimuth = (azimuth: number) => {
  rocketObject.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), (azimuth - previousAzimutgh) * Deg2Rad);
  previousAzimutgh = azimuth;
};

const initializeRocketAngle = () => {
  previousLaunchAngle = 0;
  previousAzimutgh = 0;
  rocketObject.setRotationFromEuler(new THREE.Euler(0, 0, 0));
  setLaunchAngle(props.flightCondition.launchAngle);
  setAzimuth(props.flightCondition.azimuth);
};

const rotateRocket = (start: number, end: number) => {
  if (!props.flightData) {
    return;
  }

  for (let i = start; i < end; i++) {
    const step = props.flightData.steps[i];
    const nextStep = props.flightData.steps[i + 1];
    const dt = nextStep.time - step.time;
    const k = dt * Deg2Rad;

    const bodyQuaternion = new THREE.Quaternion().setFromEuler(rocketObject.rotation);
    const rotation = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(step.gyro.x * k, step.gyro.y * k, step.gyro.z * k),
    );
    rocketObject.setRotationFromQuaternion(bodyQuaternion.multiply(rotation));
  }
};

const recalculateRotation = () => {
  if (!props.flightData) {
    return;
  }

  initializeRocketAngle();
  rotateRocket(0, flightStep.value);
};

const togglePlay = () => {
  play.value = !play.value;
};

const startSeek = () => {
  seeking = true;
};

const stopSeek = () => {
  seeking = false;
};

const loadRocketModel = (scene: THREE.Scene, modelUrl: string, textureUrl?: string) => {
  new OBJLoader().load(modelUrl, (obj) => {
    rocketObject = obj;

    // Scale
    const longitudinalLength = (() => {
      const box = new THREE.Box3().setFromObject(obj);
      return Math.max(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z);
    })();
    const scale = MODEL_LENGTH / longitudinalLength;
    obj.scale.set(scale, scale, scale);

    setLaunchAngle(props.flightCondition.launchAngle);

    // Set texture
    if (textureUrl) {
      obj.traverse((child) => {
        var texture = new THREE.TextureLoader().load(textureUrl);
        if (child instanceof THREE.Mesh) {
          child.material.map = texture;
        }
      });
    }

    obj.add(rocketAxis);

    scene.add(obj);
  });
};

const setupGraph = (data?: plotly.Data[]) => {
  const layout: Partial<plotly.Layout> = {
    plot_bgcolor: "#404040",
    paper_bgcolor: "#404040",
    margin: {
      t: 10,
      b: 30,
      l: 60,
      r: 10,
    },
    xaxis: {
      title: "Time [s]",
      color: "#ffffff",
      gridcolor: "#ffffff",
    },
    yaxis: {
      title: "Height [m]",
      color: "#ffffff",
      gridcolor: "#ffffff",
    },
    showlegend: false,
  };

  plotly.newPlot(heightGraph.value!, data ?? [], layout);
};

const plotFlightData = () => {
  if (!props.flightData) {
    return;
  }

  let trace: plotly.Data = {
    x: props.flightData.steps.map((step) => step.time),
    y: props.flightData.steps.map((step) => step.height),
    type: "scatter",
  };

  setupGraph([trace]);
};

watch(props.flightCondition, (cond) => {
  setLaunchAngle(cond.launchAngle);
  setAzimuth(cond.azimuth);
});

const { flightData } = toRefs(props);
watch(flightData, () => {
  plotFlightData();
});

watch(props.viewSetting, (setting) => {
  globalAxis.visible = setting.drawGlobalAxis;
  rocketAxis.visible = setting.drawModelAxis;
});

onMounted(() => {
  if (!view.value) {
    return;
  }

  setupGraph();

  // Initialize scene
  const scene = new THREE.Scene();
  scene.add(globalAxis);

  // Initialize light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, -2).normalize();
  scene.add(directionalLight);

  // Initialize camera
  const camera = new THREE.PerspectiveCamera(60, view.value.offsetWidth / view.value.offsetHeight);
  camera.position.set(MODEL_LENGTH / 1.6, MODEL_LENGTH / 1.6, MODEL_LENGTH / 1.6);
  camera.lookAt(scene.position);

  // Initialize renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x101020, 1.0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(view.value.offsetWidth, view.value.offsetHeight);
  view.value.appendChild(renderer.domElement);

  // Camera controller
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.maxPolarAngle = Math.PI * 0.5;
  orbitControls.minDistance = 0.1;
  orbitControls.maxDistance = MAX_CAMERA_DISTANCE;

  loadRocketModel(scene, `${import.meta.env.BASE_URL}rocket.obj`, `${import.meta.env.BASE_URL}rocket_texture.png`);

  // Rendering loop
  let previousTime = 0;
  renderer.setAnimationLoop((time) => {
    if (props.flightData && play.value && !seeking) {
      const sec = time / 1000;
      const step = props.flightData.steps[flightStep.value];
      const nextStep = props.flightData.steps[flightStep.value + 1];
      const dt = nextStep.time - step.time;
      if (previousTime + dt / playbackSpeed.value <= sec) {
        rotateRocket(flightStep.value, flightStep.value + 1);

        previousTime = sec;
        flightStep.value++;

        if (flightStep.value === props.flightData.steps.length - 1) {
          flightStep.value = 0;
          initializeRocketAngle();
        }
      }
    }

    orbitControls.update();
    renderer.render(scene, camera);
  });
});
</script>

<style scoped lang="scss">
#viewer {
  width: 100%;
  height: 100%;
}

#view {
  height: 60%;
}

#height-graph {
  height: 20%;
}

#bottom-panel {
  height: 20%;
}
</style>
