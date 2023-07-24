import { defineStore } from "pinia";

export const useInstitucionStore = defineStore("Institucion", {
  state: () => ({
    url_api: process.env.APP_ROOT_API,
    institucion: null,
    nombre: 'ingenieria de sistemas',
    carrera_links_externos: null,
    carrera_convocatorias: null,
    carrera_avisos: null,
    carrera_comunicados: null,
    carrera_cursos: null,
    carrera_seminarios: null,
    carrera_autoridades: null,
    carrera_servicios: null,
    carrera_ofertasacademicas: null,
    carrera_publicaciones: null,
    carrera_gacetas: null,
    carrera_eventos: null,
    carrera_videos: null,

    fotosPagina: null,
    fotosPortada: null,

    /* ================================== INDEX ========================= */

    /* INDEX - ABOUT - INFORMATION */
    title_index_about : 'Perfil y Carrera de Licenciatura en ',

    /* INDEX - SERVICES - INFORMATION */
    title_index_services: 'Informacion sobre la carrera',

    /* INDEX - FUNFACT - INFORMACION */
    title_funfact: 'Todos los comunicados de la Carrera',

    /* INDEX - BLOG - CONVOCATORIAS */
    pretitle_convocatorias: 'Lo ultimo de ...',
    title_convocatorias : 'Convocatorias, Comunicados y Avisos',

    /* INDEX - BLOG - CURSOS */
    pretitle_cursos : 'Lo ultimo de ...',
    title_cursos: 'Curso y Seminarios',

    /* INDEX - BLOG - AUTORIDADES */
    pretitle_autoridades : 'Nuestras',
    title_autoridades: 'Autoridades',

    /* INDEX - CALL - ORGANIGRAMA */
    title_index_organigrama: 'Organigrama de la carrera de',

    /*============================ CATEGORIES ============================== */
    title_categories: 'Categorias',
    text_categories: 'Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.',
    textBackground_categories: 'Upea',

    /*========================== CONTACTO =================================== */
    title_contacto: 'Contacto',
    pretitle_contacto: 'contactate con la universidad para mas informacion sobre la carrera.',

    /*========================== ABOUT ======================================== */
    title_about : 'Historia de la carrera'
  }),
  actions:{
    asignarInstitucion(colection){
        this.institucion = colection
    },
    asignarCarreraLinksExternos(colection){
        this.carrera_links_externos = colection
    },
    asignarConvocatorias(colection){
        this.carrera_convocatorias = colection
    },
    asignarComunicados(colection){
        this.carrera_comunicados = colection
    },
    asignarAvisos(colection){
        this.carrera_avisos = colection
    },
    asignarCursos(colection){
        this.carrera_cursos = colection
    },
    asignarSeminarios(colection){
        this.carrera_seminarios = colection
    },
    asignarFotosPagina(colection){
        this.fotosPagina = colection
    },
    asignarFotosPortada(colection){
        this.fotosPortada = colection
    },
    asignarServicios(colection){
        this.carrera_servicios = colection
    },
    asignarOfertasAcademicas(colection){
        this.carrera_ofertasacademicas = colection
    },
    asignarPublicaciones(colection){
        this.carrera_publicaciones = colection
    },
    asignarGacetas(colection){
        this.carrera_gacetas = colection
    },
    asignarEventos(colection){
        this.carrera_eventos = colection
    },
    asignarVideos(colection){
        this.carrera_videos = colection
    },
  }
});
