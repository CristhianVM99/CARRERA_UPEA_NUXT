<template>
  <header :ref="sliderRef" class="slider slider-prlx fixed-slider text-center">
    <div class="swiper-container parallax-slider">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @ready="handleSwiperReadied"
        class="swiper-wrapper"
      >
        <swiper-slide
          v-for="(port,id_port) in portadas"
          :key="id_port"
          class="swiper-slide"
        >
          <div
            class="bg-img valign"
            :style="`background-image: url(${url_api + '/InstitucionUpea/Portada/' + port.portada_imagen})`"
            data-overlay-dark="6"
          >
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                  <div class="caption center mt-30">
                    <h1 class="color-font">{{ carrera_nombre }}</h1>
                    <p>
                      La educación universitaria es la llave que abre las puertas hacia un futuro lleno de oportunidades y conocimiento.
                    </p>
                    <NuxtLink to="/categorias" class="butn bord curve mt-30">
                      <span>Categorias</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="setone setwo">
        <div
          ref="navigationNextRef"
          class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
        >
          <i class="fas fa-chevron-right"></i>
        </div>
        <div
          ref="navigationPrevRef"
          class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
        >
          <i class="fas fa-chevron-left"></i>
        </div>
      </div>
      <div ref="paginationRef" class="swiper-pagination top botm"></div>

      <div class="social-icon">
        <a :href="facebook" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a :href="twitter" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a :href="youtube" target="_blank">
          <i class="fab fa-youtube"></i>
        </a>
        <!--<NuxtLink to="#">
          <i class="fab fa-pinterest-p"></i>
        </NuxtLink>-->
      </div>
    </div>
  </header>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
import intro1Data from "../../data/intro1.json";
import removeSlashFromBagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";
export default {
  props: ["sliderRef"],
  data() {
    return {
      url_api : process.env.APP_ROOT_API,
      intro1Data,
      swiperOptions: {
        speed: 1000,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        parallax: true,
        pagination: {
          type: "fraction",
          clickable: true,
          el: ".swiper-pagination",
        },
      },
      carrera_nombre : useInstitucionStore().institucion.institucion_nombre,
      portadas : useInstitucionStore().fotosPortada, 
      facebook : useInstitucionStore().institucion.institucion_facebook,
      youtube : useInstitucionStore().institucion.institucion_youtube,
      twitter : useInstitucionStore().institucion.institucion_twitter,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    handleSwiperReadied: (swiper) => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute(
            "data-swiper-parallax",
            0.75 * swiper.width
          );
        }
      });
    },
  },
  mounted() {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  },
};
</script>

<style scoped>
</style>