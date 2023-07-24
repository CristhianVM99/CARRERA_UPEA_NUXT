<template>
    <div>
      <Navbar ref="navbar" />
      <IntroWithSlider ref="fixedSlider" />
      <div class="main-content" ref="MainContent">
        <AboutUs1 />
        <!--<Services1 />-->     
        <CallToAction />   
        <VideoWithTestimonials />        
        <Blogs1 tipo="autoridades"/>
        <!--<FunFacts1 />-->        
        <!--<SkillsCircle theme="dark" />-->        
        <div v-if="foto != null && Object.keys(foto).length != 0" :style="`background-image: url(${url_api + '/InstitucionUpea/Portada/' + foto.portada_imagen});`" class="intermedio"></div>
        <div v-else class="intermedio"></div>
        <Blogs1 tipo="convocatorias"/>
        <div v-if="foto != null && Object.keys(foto).length != 0" :style="`background-image: url(${url_api + '/InstitucionUpea/Portada/' + foto.portada_imagen});`" class="intermedio"></div>
        <div v-else class="intermedio"></div>
        <Blogs1 tipo="cursos"/>        
        <Clients1 theme="dark" />
        <!--<Works1 />-->        
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import { useInstitucionStore } from '@/store/store'
  export default {
    layout: "dark",
    async asyncData({ $axios }) {        
        try {            
            const useInstitucion = useInstitucionStore()     
            const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)
            const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + process.env.APP_ID_INSTITUCION)
            const ComunicadosFilter = await $axios.$get('/api/convocatoriasAll/' + process.env.APP_ID_CARRERA)
            const CursosFilter = await $axios.$get('/api/cursosAll/' + process.env.APP_ID_CARRERA)
            const carrera_servicios = await $axios.$get('/api/ServicioAll/' + process.env.APP_ID_CARRERA)
            const carrera_ofertasacademicas = await $axios.$get('/api/OfertasAcademicasAll/' + process.env.APP_ID_CARRERA)
            const carrera_publicaciones = await $axios.$get('/api/publicacionesAll/' + process.env.APP_ID_INSTITUCION)
            const carrera_gacetas = await $axios.$get('/api/gacetaunivAll/' + process.env.APP_ID_INSTITUCION)
            const carrera_eventos = await $axios.$get('/api/eventoAll/' + process.env.APP_ID_INSTITUCION)
            const carrera_videos = await $axios.$get('/api/VideosAll/' + process.env.APP_ID_INSTITUCION)

            let fotosPagina = institucion.Descripcion.portada.filter(port => port.portada_titulo === "PAGINA")
            let fotosPortada = institucion.Descripcion.portada.filter(port => port.portada_titulo != "PAGINA")
            let carrera_ConvocatoriasAll = ComunicadosFilter.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_estado === "1") 
            let carrera_CursosAll = CursosFilter.filter(cur => cur.det_estado === '1')
            
            let comunicados = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "COMUNICADOS")
            let convocatorias = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "CONVOCATORIAS")
            let avisos = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "AVISOS")            
            let cursos = carrera_CursosAll.filter(cur => cur.tipo_curso_otro.tipo_conv_curso_nombre === "CURSOS")
            let seminarios = carrera_CursosAll.filter(cur => cur.tipo_curso_otro.tipo_conv_curso_nombre === "SEMINARIOS")

            useInstitucion.asignarCarreraLinksExternos(carrera_links_externos)
            useInstitucion.asignarInstitucion(institucion.Descripcion)
            useInstitucion.asignarConvocatorias(convocatorias)
            useInstitucion.asignarComunicados(comunicados)
            useInstitucion.asignarAvisos(avisos)
            useInstitucion.asignarCursos(cursos)
            useInstitucion.asignarSeminarios(seminarios)
            useInstitucion.asignarServicios(carrera_servicios)
            useInstitucion.asignarOfertasAcademicas(carrera_ofertasacademicas)
            useInstitucion.asignarPublicaciones(carrera_publicaciones)
            useInstitucion.asignarGacetas(carrera_gacetas)
            useInstitucion.asignarEventos(carrera_eventos)
            useInstitucion.asignarVideos(carrera_videos)
            useInstitucion.asignarFotosPagina(fotosPagina)
            useInstitucion.asignarFotosPortada(fotosPortada)            
        } catch (e) {
            console.error("error",e)
        }
    },
    data() {
      return {
        carrera_nombre : useInstitucionStore().institucion.institucion_nombre,
        institucion_logo : useInstitucionStore().institucion.institucion_logo,
        url_api : process.env.APP_ROOT_API,
        carrera_colores : useInstitucionStore().institucion.colorinstitucion,
        foto: useInstitucionStore().fotosPagina[2],
      }
    },
    head() {
      return {
        title: 'UPEA | '+this.carrera_nombre,
        link: [
          { rel: 'icon', type:"image/x-icon", href: this.url_api + '/InstitucionUpea/' + this.institucion_logo }
        ]
      }
    },    
    methods: {
      setColor(){
        if (Object.keys(this.carrera_colores).length != 0) {
        if (process.client) { // Verifica si el código se está ejecutando en el lado del cliente
          document.documentElement.style.setProperty(
            '--color-primario',
            this.carrera_colores[0].color_primario
          );
          document.documentElement.style.setProperty(
            '--color-secundario',
            this.carrera_colores[0].color_primario
          );
          document.documentElement.style.setProperty(
            '--color-terciario',
            this.carrera_colores[0].color_secundario
          );
        }
        }
      },      
      createdComponent(){
        this.setColor()        
      }
    },    
    created() {   
        this.createdComponent()
    },
    mounted() {
      if (this.$refs.fixedSlider.$el && this.$refs.MainContent) {
        var slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
        this.$refs.MainContent.style.marginTop = slidHeight + "px";
      }
      var navbar = this.$refs.navbar.$el;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
      });
    },
  };
  </script>
  
  <style scoped>
  .intermedio{
    height: 300px;
    background-image: url(/img/universidad/intermedio.jpg);
    background-repeat: none;
    background-size: cover;
    background-attachment: fixed;
  }
  </style>