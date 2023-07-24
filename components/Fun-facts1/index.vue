<template>
  <section class="number-sec section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn" data-wow-delay=".5s">{{ carrera_iniciales }}</h6>
            <h3 class="wow color-font">
              {{ title_funfact }}
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Convocatorias
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Comunicados
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Avisos
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Cursos
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Seminarios
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Servicios
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Serminarios
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Servicios
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Ofertas Academicas
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Publicaciones
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Gacetas
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Eventos
              </p>
            </nuxt-link>
          </div>                   
        </div>
        <div class="col-md-3">
          <div class="item no-bord sm-mb50">
            <span :class="`icon pe-7s-diamond`"></span>
            <h3 class="">
              <countTo
                ref="countUpRef"
                :startVal="0"
                :endVal="5"
                :duration="3000"
                :autoplay="false"
              >
                <span class="count">&nbsp;</span>
              </countTo>
            </h3>
            <nuxt-link to="">
              <p class="wow txt words chars splitting" data-splitting>
                Videos
              </p>
            </nuxt-link>
          </div>                   
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
import countTo from "vue-count-to";
import funFactData from "../../data/fun-fact.json";
export default {
  components: { countTo },
  async asyncData({ $axios }) {
    try {
      const useInstitucion = useInstitucionStore()     
      if( useInstitucionStore().institucion == null ){      
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)        
        useInstitucion.asignarInstitucion(institucion.Descripcion)        
      }
      if( useInstitucionStore().carrera_cursos == null || useInstitucionStore().carrera_seminarios == null){
        const CursosFilter = await $axios.$get('/api/cursosAll/' + process.env.APP_ID_CARRERA)
        let carrera_CursosAll = CursosFilter.filter(cur => cur.det_estado === '1')
        let cursos = carrera_CursosAll.filter(cur => cur.tipo_curso_otro.tipo_conv_curso_nombre === "CURSOS")
        let seminarios = carrera_CursosAll.filter(cur => cur.tipo_curso_otro.tipo_conv_curso_nombre === "SEMINARIOS")
        useInstitucion.asignarCursos(cursos)
        useInstitucion.asignarSeminarios(seminarios)
      }
      if( useInstitucionStore().carrera_convocatorias == null || useInstitucionStore().carrera_avisos || useInstitucionStore().carrera_comunicados){
        const ComunicadosFilter = await $axios.$get('/api/convocatoriasAll/' + process.env.APP_ID_CARRERA)
        let carrera_ConvocatoriasAll = ComunicadosFilter.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_estado === "1") 
        let comunicados = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "COMUNICADOS")
        let convocatorias = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "CONVOCATORIAS")
        let avisos = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "AVISOS")         
        useInstitucion.asignarConvocatorias(convocatorias)
        useInstitucion.asignarComunicados(comunicados)
        useInstitucion.asignarAvisos(avisos)
      } 
      if( useInstitucionStore().carrera_servicios == null || useInstitucionStore().carrera_ofertasacademicas == null ){
        const carrera_servicios = await $axios.$get('/api/ServicioAll/' + process.env.APP_ID_CARRERA)
        const carrera_ofertasacademicas = await $axios.$get('/api/OfertasAcademicasAll/' + process.env.APP_ID_CARRERA)
        useInstitucion.asignarServicios(carrera_servicios)
        useInstitucion.asignarOfertasAcademicas(carrera_ofertasacademicas)
      }      
      if( useInstitucionStore().carrera_publicaciones == null || useInstitucionStore().carrera_gacetas == null || useInstitucionStore().carrera_eventos == null || useInstitucionStore().carrera_videos == null ){
        const carrera_publicaciones = await $axios.$get('/api/publicacionesAll/' + process.env.APP_ID_INSTITUCION)
        const carrera_gacetas = await $axios.$get('/api/gacetaunivAll/' + process.env.APP_ID_INSTITUCION)
        const carrera_eventos = await $axios.$get('/api/eventoAll/' + process.env.APP_ID_INSTITUCION)
        const carrera_videos = await $axios.$get('/api/VideosAll/' + process.env.APP_ID_INSTITUCION)
        useInstitucion.asignarPublicaciones(carrera_publicaciones)
        useInstitucion.asignarGacetas(carrera_gacetas)
        useInstitucion.asignarEventos(carrera_eventos)
        useInstitucion.asignarVideos(carrera_videos)
      }
    } catch (e) {
      console.error("error",e)
    }
  },
  data() {
    return {
      funFactData,
      counted: false,
      title_funfact: useInstitucionStore().title_funfact,
      carrera_iniciales: useInstitucionStore().institucion.institucion_iniciales,
      carrera_convocatorias: useInstitucionStore().carrera_convocatorias,
      carrera_comunicados: useInstitucionStore().carrera_comunicados,
      carrera_avisos: useInstitucionStore().carrera_avisos,
      carrera_cursos: useInstitucionStore().carrera_cursos,
      carrera_seminarios: useInstitucionStore().carrera_seminarios,
      carrera_servicios: useInstitucionStore().carrera_servicios,
      carrera_ofertasacademicas: useInstitucionStore().carrera_ofertasacademicas,
      carrera_publicaciones: useInstitucionStore().carrera_publicaciones,
      carrera_gacetas: useInstitucionStore().carrera_gacetas,
      carrera_eventos: useInstitucionStore().carrera_eventos,
      carrera_videos: useInstitucionStore().carrera_videos,
    };
  },
  methods: {
    startCounter() {
      this.$refs.countUpRef.map((item) => item.start());
      this.counted = true;
    },
  },
  mounted() {
    let funFactsSection = document.querySelector(".number-sec");
    window.addEventListener("scroll", () => {
      if (funFactsSection && !this.counted) {
        if (window.pageYOffset > funFactsSection.offsetTop - 200) {
          this.startCounter();
        }
      }
    });
  },
};
</script>

<style scoped>
</style>