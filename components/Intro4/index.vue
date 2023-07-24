<template>
  <header class="particles circle-bg valign">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="cont text-center">
            <h1>
              carrera <span class="color-font">{{ carrera_nombre }}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <Particles
      id="particles-js"
      :options="theme === 'light' ? particlesBlackConfig : particlesConfig"
    />

    <div class="gradient-circle"></div>
    <div class="gradient-circle two"></div>
    <div class="line bottom left"></div>
  </header>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
import particlesConfig from "../../config/particle-config";
import blackStarConfig from "../../config/pr-s-black";
export default {
  props: ["theme"],  
  data() {
    return {
      particlesConfig,
      particlesBlackConfig: blackStarConfig,
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre
    };
  },
  mounted() {
    setTimeout(() => {
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 500);
  },
};
</script>

<style scoped>
</style>