<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar  los ingredientes, técnicas y tradiciones clave de la cocina asiática y africana mediante la identificación de platos representativos y sus procesos de preparación.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué ingrediente es fundamental para preparar sushi?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arroz basmati.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Arroz <i>gohan</i>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Arroz integral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Arroz jazmín.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'El sashimi se sirve acompañado de:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limón y aceite de oliva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasta de ajo y paprika.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salsa de soya y <i>wasabi</i>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Vinagre y azúcar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué técnica de cocción es clave para el tempura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vapor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fritura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Horneado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué país es conocido por platos como el dim sum y el chow mein?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Japón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Marruecos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'China.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'India.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'El cuscús se prepara a partir de:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arroz basmati.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Harina de maíz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sémola de trigo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Legumbres cocidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'El <i>falafel</i> se elabora con:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garbanzos o habas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Pasta de ajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pollo desmenuzado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuscús.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué ingrediente principal se usa para el tabule?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sémola de maíz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sémola de trigo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Arroz jazmín.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pasta de garbanzos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'El teriyaki destaca por su:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Brillo y textura espesa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aromas ácidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sabor picante. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Consistencia líquida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué técnica es común en la preparación del chop <i>suey</i>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salteado en <i>wok</i>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Horneado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fritura profunda..',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vapor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'El <i>kibbe</i> es un pastel típico de la cocina árabe.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'El pato laqueado se cocina a la parrilla en brochetas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'El <i>zaalouk</i> de berenjenas se sirve:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Frío y refrigerado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Caliente y recién hecho.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Con acompañamientos dulces.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En brochetas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué especias se utilizan para marinar el <i>kebab</i>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Canela y clavo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cardamomo y nuez moscada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Pimienta blanca y orégano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cilantro y azafrán.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es el origen del <i>bissara</i>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'India.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Marruecos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Arabia Saudita.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Egipto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'En el <i>sushi</i>, el alga nori se coloca:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En la parte exterior del rollo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dentro del arroz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo como decoración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En trozos pequeños dentro del relleno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
