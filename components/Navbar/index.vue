<template>
  <nav
    :ref="nr"
    class="navbar navbar-expand-lg change"
    :class="theme === 'light' ? 'light' : ''"
  >
    <div class="container">
      <NuxtLink to="/" class="logo">
          <img
            ref="lr"
            src="/img/logo-dark.png"
            v-if="theme === 'light'"
            alt="logo"
          />
          <img
            ref="lr"
            src="/img/logo-light.png"
            v-else-if="theme === 'themeD'"
            alt="logo"
          />
          <img ref="lr" :src="url_api + '/InstitucionUpea/' + carrera_logo" v-else alt="logo" />
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        @click="handleMobileDropdown"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown" @click="handleDropdown">
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Inicio
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/about/about-dark"> 
                Sobre Nosotros
              </NuxtLink>
              <!--<NuxtLink class="dropdown-item" to="/homepage/home1-dark">
                Main Home
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home2-dark">
                Creative Agency
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home5-dark">
                Digital Agency
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home4-dark">
                Business One Page
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home3-dark">
                Corporate Business
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home6-dark">
                Modern Agency
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home7-dark">
                Freelancer
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home8-dark">
                Architecture
              </NuxtLink>-->
            </div>
          </li>
          <li class="nav-item dropdown" @click="handleDropdown">
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Convocatorias
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/convocatorias/convocatorias">
                Convocatorias
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/comunicados">
                Comunicados
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/avisos">
                Avisos
              </NuxtLink>
              <!--<NuxtLink
                class="dropdown-item"
                to="/blog-details/blog-details-dark"
              >
                Blog Details
              </NuxtLink>-->
            </div>
          </li>
          <li class="nav-item dropdown" @click="handleDropdown">
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cursos
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/convocatorias/cursos">
                Cursos
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/seminarios">
                Seminarios
              </NuxtLink>
              <!--<NuxtLink class="dropdown-item" to="/showcase/showcase-dark">
                Showcase Parallax
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/showcase3/showcase3-dark">
                Showcase Carousel
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/showcase2/showcase2-dark">
                Showcase Circle
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/works/works-dark">
                Portfolio Masonry
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/works2/works2-dark">
                Portfolio Filtering
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/works3/works3-dark">
                Portfolio Gallery
              </NuxtLink>-->
            </div>
          </li>
          <li class="nav-item dropdown" @click="handleDropdown">
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Mas
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/convocatorias/servicios">
                Servicios
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/ofertasacademicas">
                Ofertas Academicas
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/publicaciones">
                Publicaciones
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/gacetas">
                Gacetas
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/eventos">
                Eventos
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/convocatorias/videos">
                Videos
              </NuxtLink>
              <!--<NuxtLink class="dropdown-item" to="/blog/blog-dark">
                Blog Standerd
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/blog-list/blog-list-dark">
                Blog List
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/blog-grid/blog-grid-dark">
                Blog Grid
              </NuxtLink>
              <NuxtLink
                class="dropdown-item"
                to="/blog-details/blog-details-dark"
              >
                Blog Details
              </NuxtLink>-->
            </div>
          </li>
          <li class="nav-item dropdown" @click="handleDropdown">
            <span
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Links
            </span>
            <div class="dropdown-menu">
              <a class="dropdown-item" target="_blank" :href="link.ei_link" v-for="(link,id_link) in carrera_links" :key="id_link">
                {{ link.ei_nombre }}
              </a>              
              <!--<NuxtLink
                class="dropdown-item"
                to="/blog-details/blog-details-dark"
              >
                Blog Details
              </NuxtLink>-->
            </div>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact/contact-dark">
              Contacto
            </NuxtLink>
          </li>          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
import getSiblings from "../../common/getSiblings";
export default {
  props: ["lr", "theme", "nr"],
  async asyncData({ $axios }) {
    try {
      const useInstitucion = useInstitucionStore()     

      if(useInstitucionStore().carrera_links_externos == null){
        const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + process.env.APP_ID_INSTITUCION)
        useInstitucion.asignarCarreraLinksExternos(carrera_links_externos)
      }

      if( useInstitucionStore().institucion == null ){
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)            
        useInstitucion.asignarInstitucion(institucion.Descripcion)
      }    
    } catch (e) {
      console.error("el error es: ",e)
    }
  },
  data() {
    return {
      url_api: process.env.APP_ROOT_API,
      carrera_logo: useInstitucionStore().institucion.institucion_logo,
      carrera_nombre: useInstitucionStore().institucion.institucion_nombre,
      carrera_links: useInstitucionStore().carrera_links_externos,
    };
  },
  created() {    
  },
  methods: {
    handleDropdown: (e) => {
      getSiblings(e.target.parentElement)
        .filter((item) => item.classList.contains("show"))
        .map((item) => {
          item.classList.remove("show");
          if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
          }
          if (item.childNodes[2]) {
            item.childNodes[2].classList.remove("show");
          }
        });
      e.target.setAttribute("aria-expanded", true);
      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];
        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    },
    handleMobileDropdown: (e) => {
      document
        .getElementById("navbarSupportedContent")
        .classList.toggle("show-with-trans");
    },
  },
};
</script>

<style scoped>
</style>