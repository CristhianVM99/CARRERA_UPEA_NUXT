<template>
  <section class="block-sec">
    <div
      class="background bg-img pt-100 pb-0 parallaxie"
      :style="`background-image: url(${url})`"      
      data-overlay-dark="5"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="vid-area">
              <span class="text">Ver Video</span>
              <ModalVideo
                :channel="videoChannel"
                :videoId="videoId"
                :isOpen.sync="videoIsOpen"
              />
              <div class="vid-icon cursor-pointer" @click="openVideo">
                <a class="vid">
                  <div class="vid-butn">
                    <span class="icon">
                      <i class="fas fa-play"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="testim-box">
              <div class="head-box">
                <h6 class="wow fadeIn" data-wow-delay=".5s">{{ carrera.institucion_nombre }}</h6>
                <!--<h4 class="wow fadeInLeft" data-wow-delay=".5s">
                  {{ carrera.institucion_nombre }}
                </h4>-->
              </div>
              <VueSlickCarousel
                v-bind="settings"
                class="slic-item wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div class="item">
                  <h4>Mision</h4>
                  <div v-html="mision"></div>
                  <div class="info">
                    <div class="img">
                      <div class="img-box">
                        <img :src="url_api + '/InstitucionUpea/' + carrera_logo" alt="" />
                      </div>
                    </div>
                    <div class="cont">
                      <div class="author">
                        <h6 class="author-name">{{ carrera.institucion_nombre }}</h6>
                        <span class="author-details">
                          {{ carrera.institucion_iniciales }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <h4>Vision</h4>
                  <div v-html="vision"></div>
                  <div class="info">
                    <div class="img">
                      <div class="img-box">
                        <img :src="url_api + '/InstitucionUpea/' + carrera_logo" alt="" />
                      </div>
                    </div>
                    <div class="cont">
                      <div class="author">
                        <h6 class="author-name">{{ carrera.institucion_nombre }}</h6>
                        <span class="author-details">
                          {{ carrera.institucion_iniciales }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <h4>Objetivos</h4>
                  <div v-html="objetivos"></div>
                  <div class="info">
                    <div class="img">
                      <div class="img-box">
                        <img :src="url_api + '/InstitucionUpea/' + carrera_logo" alt="" />
                      </div>
                    </div>
                    <div class="cont">
                      <div class="author">
                        <h6 class="author-name">{{ carrera.institucion_nombre }}</h6>
                        <span class="author-details">
                          {{ carrera.institucion_iniciales }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
export default {
  async asyncData({ $axios }) {
    try {
      const useInstitucion = useInstitucionStore()     
      if( useInstitucionStore().institucion == null || useInstitucionStore().fotosPagina ||  useInstitucionStore().fotosPortada ){      
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)
        let fotosPagina = institucion.Descripcion.portada.filter(port => port.portada_titulo === "PAGINA")
        let fotosPortada = institucion.Descripcion.portada.filter(port => port.portada_titulo != "PAGINA")
        useInstitucion.asignarInstitucion(institucion.Descripcion)
        useInstitucion.asignarFotosPagina(fotosPagina)
        useInstitucion.asignarFotosPortada(fotosPortada)
        return { fotosPagina, institucion }
      }
    } catch (e) {
      console.error("error",e)
    }
  },
  data() {
    return {
      videoIsOpen: false,
      settings: {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,        
      },
      url_api : process.env.APP_ROOT_API,
      foto : useInstitucionStore().fotosPagina[1],
      url : '/img/universidad/video_fondo.jpeg',
      carrera : useInstitucionStore().institucion,
      carrera_logo: useInstitucionStore().institucion.institucion_logo,
      mision: useInstitucionStore().institucion.institucion_mision,
      vision: useInstitucionStore().institucion.institucion_vision,
      objetivos: useInstitucionStore().institucion.institucion_objetivos,
    };
  },  
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    },
    createdComponent(){
      if(this.foto != null && Object.keys(this.foto).length != 0){
        this.url = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`
      }
    }
  },
  created() {
    this.createdComponent()
  },
  computed: {
    videoChannel: function () {
      return "vimeo";
    },
    videoId: function () {
      return "127203262";
    },
  },
};
</script>

<style scoped>
</style>