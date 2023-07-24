<template>
    <section
      :class="`${
        grid ? (grid === 3 ? 'three-column' : null) : null
      } portfolio section-padding pb-70`"
    >
      <div v-if="!hideFilter" class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div class="sec-head text-center">
              <h6 class="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
              <h3 class="wow color-font">
                Our Recent Web Design &amp; <br />
                Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div
            v-if="!hideFilter"
            :class="`filtering ${
              filterPosition === 'center'
                ? 'text-center'
                : filterPosition === 'left'
                ? 'text-left'
                : 'text-right'
            } col-12`"
          >
            <div class="filter">
              <span data-filter="*" class="active"> All </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div>
  
          <div class="gallery full-width">
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/convocatorias"
                >
                  <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <!-- 800 x 1000-->
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Convocatorias</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>
  
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items web wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/comunicados"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Comunicados</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>
  
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items brand wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  to="/convocatorias/avisos"
                  class="imago wow"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Avisos</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>
  
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/cursos"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Cursos</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>
  
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items web wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/seminarios"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Seminarios</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>
  
            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items brand wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/servicios"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Servicios</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items brand wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/ofertasacademicas"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Ofetas Academicas</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items brand wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/publicaciones"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Publicaciones</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items brand wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/gacetas"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Gacetas</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items brand wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/eventos"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Eventos</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>

            <div
              :class="`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items brand wow fadeInUp`"
              data-wow-delay=".4s"
            >
              <div class="item-img">
                <NuxtLink
                  class="imago wow"
                  to="/convocatorias/videos"
                >
                <img style="object-fit: cover;height: 460px;" src="/img/universidad/categorias.jpg" alt="image" />
                  <div class="item-img-overlay"></div>
                </NuxtLink>
              </div>
              <div class="cont">
                <h6>Videos</h6>
                <span> <span>{{ carrera_iniciales }}</span>, <span>{{ carrera_nombre }}</span> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { useInstitucionStore } from '@/store/store'
  import initIsotope from "../../common/initIsotope";
  
  export default {
    props: ["grid", "filterPosition", "hideFilter"],
    async asyncData({ $axios }) {
      const useInstitucion = useInstitucionStore()     
      if( useInstitucionStore().institucion == null ){
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)                
        const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + process.env.APP_ID_INSTITUCION)
        useInstitucion.asignarInstitucion(institucion.Descripcion)        
        useInstitucion.asignarCarreraLinksExternos(carrera_links_externos)
      }
    },    
    data() {
        return {
            carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
            carrera_iniciales : useInstitucionStore().institucion.institucion_iniciales
        };
    },
    mounted() {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    },
  };
  </script>
  
  <style scoped>
  </style>