<template>
  <div id="viewer">
    <div id="view" ref="view"></div>
    <div id="bottom-panel">
      <div id="slider-truck">
        <div id="slider" ref="slider"></div>
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

const props = defineProps({
  flightData: {
    type: Object as PropType<FlightData | undefined>,
    required: true,
  },
});

const MODEL_LENGTH = 100;
const MAX_CAMERA_DISTANCE = MODEL_LENGTH * 2;
const Deg2Rad = Math.PI / 180;

const view = ref<HTMLDivElement>();
const slider = ref<HTMLDivElement>();
let rocketObject: THREE.Group;
let flightStep = 0;

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
      const step = props.flightData.steps[flightStep];
      const nextStep = props.flightData.steps[flightStep + 1];
      const timeInterval = nextStep.time - step.time;
      if (previousTime + timeInterval <= sec) {
        previousTime = sec;

        rocketObject.setRotationFromEuler(
          new THREE.Euler(
            step.gyro.x * timeInterval * Deg2Rad,
            step.gyro.y * timeInterval * Deg2Rad,
            step.gyro.z * timeInterval * Deg2Rad,
            "XYZ",
          ),
        );

        flightStep++;
        if (flightStep === props.flightData.steps.length - 1) {
          flightStep = 0;
        }

        // Update progress bar
        slider.value!.style.width = `${(100 * flightStep) / props.flightData.steps.length}%`;
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
  height: 85%;
}

#bottom-panel {
  height: 15%;
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
