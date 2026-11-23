// Demo para Aluminio y Cristalería Escobar (Sevilla), lead de la cola de
// prospección. Datos de su ficha de Google y de la investigación (22/10/2026).
// Fotos: las de ejemplo del template (IA), salen con la etiqueta «Imagen generada con IA».
// PENDIENTE: marcado con «PENDIENTE» lo que no sale de la ficha y hay que confirmar.
import { defineSiteConfig } from "@andrei-leads/core";

export default defineSiteConfig({
  negocio: {
    nombre: "Aluminio y Cristalería Escobar",
    nombreLegal: "Cristalería Escobar SL", // PENDIENTE: confirmar la razón social exacta en el BORME
    nif: "B41828906",
    sector: "Cristalería y carpintería de aluminio",
    descripcionCorta:
      "Cristalería y carpintería de aluminio en Sevilla desde 1996: cristales, persianas, ventanas, cerramientos y trabajos a medida.",
    anioFundacion: 1996,
    tipoSchema: ["HomeAndConstructionBusiness"],
  },
  contacto: {
    telefono: "+34954960624",
    // Sin whatsapp: el teléfono de la ficha es un fijo. Sin este campo no salen botones de WhatsApp.
    email: "pendiente@example.com", // PENDIENTE: la ficha no tiene email y el contrato lo exige
    direccion: { calle: "Calle Comunidad Valenciana, 8", cp: "41008", ciudad: "Sevilla", provincia: "Sevilla" },
    horario: [
      { dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "09:00", cierra: "14:00" },
      { dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "17:00", cierra: "20:00" },
    ],
    coordenadas: { lat: 37.412018, lng: -5.973328 },
    fichaGoogle: "https://maps.google.com/?cid=17222168591927497448",
  },
  zonas: ["Sevilla"], // PENDIENTE: la ficha no dice a qué municipios van
  valoracion: { media: 4.6, total: 16 },
  imagenesHero: [
    { src: "/ejemplo/hero.jpg", alt: "Salón con ventanal corredero de aluminio gris antracita abierto a una terraza", origen: "ia" },
  ],
  servicios: [
    {
      titulo: "Cristales y sustitución de vidrios",
      descripcion: "Cambiamos cristales rotos o antiguos en ventanas, puertas y mamparas.",
      imagenes: [{ src: "/ejemplo/servicio-vidrio.jpg", alt: "Cristal nuevo colocado en una ventana de aluminio", origen: "ia" }],
    },
    {
      titulo: "Persianas",
      descripcion: "Persianas de aluminio nuevas, cambio de lamas y reparación.",
      imagenes: [{ src: "/ejemplo/servicio-persiana.jpg", alt: "Persiana de aluminio a medio bajar en una fachada", origen: "ia" }],
    },
    {
      titulo: "Ventanas y cerramientos de aluminio",
      descripcion: "Ventanas de aluminio y cerramientos de terraza fabricados a medida.",
      imagenes: [{ src: "/ejemplo/servicio-cerramiento.jpg", alt: "Terraza cerrada con cristal y perfiles de aluminio", origen: "ia" }],
    },
    {
      titulo: "Trabajos a medida",
      descripcion: "Muebles de aluminio y soluciones para huecos de terraza, hechos a la medida de tu casa.",
      imagenes: [{ src: "/ejemplo/servicio-corredera.jpg", alt: "Ventana corredera de aluminio en un salón luminoso", origen: "ia" }],
    },
  ],
  // Reseñas reales de su ficha de Google (las 8 visibles; fechas aproximadas a partir de «hace N meses»).
  resenas: [
    { autor: "Patricia", texto: "Todos los trabajos me lo hacen ellos, muy profesionales sin duda siempre los recomiendo", puntuacion: 5, fecha: "2026-06", fuente: "google" },
    { autor: "Carmen Gomez", texto: "Buen trabajo realizado en terraza, tanto persianas como un mueble que quería en un hueco. Ha quedado perfecto. Muy contenta.", puntuacion: 5, fecha: "2026-02", fuente: "google" },
    { autor: "Rocio Espinosa", texto: "La mejor cristalería de Sevilla, amables, simpáticos y muy serviciales sin duda alguna, volveré a contratar por su buena calidad y precio.", puntuacion: 5, fecha: "2026-02", fuente: "google" },
    { autor: "Magnus", texto: "Muy profesionales y atención de 10", puntuacion: 5, fecha: "2025-12", fuente: "google" },
    { autor: "Rocio Muñoz", texto: "Súper contenta con el trabajo realizado. Trabajo bien hecho y rapidito", puntuacion: 5, fecha: "2025-11", fuente: "google" },
    { autor: "Manuel Maria Perez Domínguez", texto: "Francamente, muy satisfecho por el trabajo realizado. Son meticulosos y cuidan el detalle.", puntuacion: 5, fecha: "2023-11", fuente: "google" },
  ],
  empresa: {
    historia: [
      "Somos una empresa familiar de Sevilla. Desde 1996 trabajamos el cristal y el aluminio: cristales, persianas, ventanas, cerramientos y trabajos a medida.",
    ],
    imagenes: [
      { src: "/ejemplo/empresa-taller.jpg", alt: "Taller de aluminio con perfiles y máquina de corte", origen: "ia" },
    ],
  },
  seo: {
    titulo: "Cristalería y aluminio en Sevilla | Cristalería Escobar",
    descripcion: "Cristales, persianas, ventanas y cerramientos de aluminio a medida en Sevilla. Empresa familiar desde 1996.",
    url: "https://web-cristaleria-escobar.vercel.app", // PROVISIONAL hasta el primer despliegue
  },
  analitica: { vercel: true },
});
