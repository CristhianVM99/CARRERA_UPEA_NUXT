<template>
  <footer :class="`${!hideBGCOLOR ? 'sub-bg' : ''}`">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="item md-mb50">
            <div class="title">
              <h5>Contacta con Nosotros</h5>
            </div>
            <ul>
              <li>
                <span class="icon pe-7s-map-marker"></span>
                <div class="cont">
                  <h6>direccion</h6>
                  <p>{{ carrera_direccion }}</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-mail"></span>
                <div class="cont">
                  <h6>Correo</h6>
                  <p>{{ carrera_correo1 }}</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-call"></span>
                <div class="cont">
                  <h6>Telefono</h6>
                  <p>{{ carrera_telefono1 }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <!--<div class="item md-mb50">
            <div class="title">
              <h5>Recent News</h5>
            </div>
            <ul>
              <li>
                <div class="img">
                  <NuxtLink to="#">
                    <img src="/img/blog/1.jpg" alt=""
                  /></NuxtLink>
                </div>
                <div class="sm-post">
                  <NuxtLink to="#">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span class="date">14 sep 2022</span>
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="img">
                  <NuxtLink to="#">
                    <img src="/img/blog/2.jpg" alt="" />
                  </NuxtLink>
                </div>
                <div class="sm-post">
                  <NuxtLink to="#">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                    <span class="date">14 sep 2022</span>
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="subscribe">
                  <input type="text" placeholder="Type Your Email" />
                  <span class="subs pe-7s-paper-plane"></span>
                </div>
              </li>
            </ul>
          </div>-->
        </div>
        <div class="col-lg-4">
          <div class="item">
            <div class="logo">
              <img :src="url_api + '/InstitucionUpea/' + carrera_logo" alt="logo" />
              <span>{{ carrera_nombre }}</span>
            </div>
            <div class="social">
              <a :href="carrera_facebook" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a :href="carrera_twitter" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <!--<NuxtLink to="#0">
                <i class="fab fa-instagram"></i>
              </NuxtLink>-->
              <a :href="carrera_youtube" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
            <div class="copy-right">
              <p>
                © 2023, Todos los derechos reservados 
                <span >Universidad Publica de El Alto</span>.
              </p>
              <p>Desarrollador <a target="_blank" href="https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/">CristhianVM</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useInstitucionStore } from '@/store/store'
export default {
    props: ['hideBGCOLOR'],
    async asyncData({ $axios }) {
      const useInstitucion = useInstitucionStore()     
      if( useInstitucionStore().institucion == null ){
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + process.env.APP_ID_INSTITUCION)                
        useInstitucion.asignarInstitucion(institucion.Descripcion)
      }
    },
    data() {
      return {
        url_api : process.env.APP_ROOT_API,
        carrera_celular1 : useInstitucionStore().institucion.institucion_celular1,
        carrera_celular2 : useInstitucionStore().institucion.institucion_celular2,
        carrera_telefono1 : useInstitucionStore().institucion.institucion_telefono1,
        carrera_telefono2 : useInstitucionStore().institucion.institucion_telefono2,
        carrera_correo1 : useInstitucionStore().institucion.institucion_correo1,
        carrera_correo2 : useInstitucionStore().institucion_correo2,
        carrera_facebook : useInstitucionStore().institucion.institucion_facebook,
        carrera_youtube : useInstitucionStore().institucion.institucion_youtube,
        carrera_twitter : useInstitucionStore().institucion.institucion_twitter,
        carrera_direccion :  useInstitucionStore().institucion.institucion_direccion, 
        carrera_logo : useInstitucionStore().institucion.institucion_logo,    
        carrera_nombre : useInstitucionStore().institucion.institucion_nombre,
      }
    },
};
</script>

<style scoped>
</style>