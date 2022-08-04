<template>
  <div id="viewer">
    <div id="view" ref="view"></div>
    <div id="bottom-panel">
      <div id="slider-truck">
        <div id="slider" ref="slider"></div>
      </div>
      <div class="ms-2">
        <p class="m-0">Time: {{ props.flightData ? props.flightData.steps[flightStep].time.toFixed(2) : "0.00" }} s</p>
        <p class="m-0">Step: {{ flightStep }} / {{ props.flightData ? props.flightData.steps.length : 0 }}</p>
        <div class="mt-2">
          <label>Playback speed: x {{ playbackSpeed.toFixed(1) }}</label>
          <input
            type="range"
            class="form-range d-block"
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
</template>

<script setup lang="ts">
import { onMounted, ref, PropType, watch } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { FlightData } from "../modules/flightData";
import { FlightCondition } from "../modules/flightCondition";

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
});

const view = ref<HTMLDivElement>();
const slider = ref<HTMLDivElement>();

let rocketObject: THREE.Group;
let flightStep = ref(0);
let playbackSpeed = ref(1.0);

let previousLaunchAngle = 0;
const setLaunchAngle = (angle: number) => {
  rocketObject.rotateX((angle - previousLaunchAngle) * Deg2Rad);
  previousLaunchAngle = angle;
};

watch(props.flightCondition, (cond) => {
  setLaunchAngle(cond.launchAngle);
});

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

    scene.add(obj);
  });
};

onMounted(() => {
  if (!view.value) {
    return;
  }

  // Initialize scene
  const scene = new THREE.Scene();
  scene.add(new THREE.AxesHelper(MAX_CAMERA_DISTANCE));

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
    if (props.flightData) {
      const sec = time / 1000;
      const step = props.flightData.steps[flightStep.value];
      const nextStep = props.flightData.steps[flightStep.value + 1];
      const timeInterval = nextStep.time - step.time;
      if (previousTime + timeInterval / playbackSpeed.value <= sec) {
        previousTime = sec;

        const k = timeInterval * Deg2Rad;
        rocketObject.rotateX(step.gyro.x * k);
        rocketObject.rotateY(step.gyro.y * k);
        rocketObject.rotateZ(step.gyro.z * k);

        flightStep.value++;
        if (flightStep.value === props.flightData.steps.length - 1) {
          flightStep.value = 0;
        }

        // Update progress bar
        slider.value!.style.width = `${(100 * flightStep.value) / props.flightData.steps.length}%`;
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
  height: 80%;
}

#bottom-panel {
  height: 20%;
}

#slider-truck {
  width: 100%;
  height: 10px;
  background-color: white;
}

#slider {
  height: 100%;
  background-color: rgb(64, 71, 203);
}
</style>
