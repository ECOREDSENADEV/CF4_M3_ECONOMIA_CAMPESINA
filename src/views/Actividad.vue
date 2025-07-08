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
      tema: 'Negociación y acuerdos comerciales en el contexto campesino',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos clave sobre la negociación campesina, políticas comerciales, acuerdos, acceso a mercados y fortalecimiento organizativo para una comercialización justa y sostenible.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué se busca principalmente al negociar en el contexto campesino?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener acuerdos justos y beneficiosos para ambas partes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Imponer precios a los compradores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar vender productos al mercado local.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '¿Qué se busca principalmente al negociar en el contexto campesino?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un principio fundamental de la negociación campesina?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Renunciar a beneficios en situaciones de urgencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aceptar condiciones del comprador sin discusión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Preparación e información previa a la negociación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Firmar cualquier documento sin leerlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué representan los repertorios culturales en la economía campesina?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contratos legales y documentos notariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Saberes tradicionales que regulan la producción y comercialización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Prácticas modernas del mercado urbano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Normas impuestas por entidades financieras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál NO es una recomendación durante la negociación campesina?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aceptar cualquier precio por urgencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dejar constancia del acuerdo por escrito o grabación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Negociar con calma y conocimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Buscar relaciones comerciales duraderas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de acuerdo comercial se basa solo en la palabra dada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Legal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Informal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Semi-formal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Corporativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué elemento NO debe faltar en un acuerdo comercial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Condiciones de transporte de otros productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Datos de contacto de ambas partes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Precio unitario y total.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Forma de entrega y pago.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué permite el fortalecimiento organizativo campesino?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la calidad del producto para competir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tomar decisiones colectivas y acceder a beneficios institucionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de productores en un territorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar toda relación con el mercado externo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué es una alianza estratégica campesina?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una forma de competencia individual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un acuerdo de colaboración con otros actores para objetivos comunes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un contrato con multinacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una venta sin negociación previa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una barrera común que enfrentan los productores campesinos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falta de información sobre normas de comercialización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Acceso libre a todos los mercados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sobreoferta de productos campesinos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exceso de recursos institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué permite acceder a mercados nacionales e internacionales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener producción informal sin requisitos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vender exclusivamente a vecinos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organizarse, cumplir requisitos y mantener la identidad rural.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar programas estatales y ONG.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Negociar en el campo implica principalmente pelear por el mejor precio.',
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
          texto:
            'Las políticas comerciales locales pueden tener respaldo constitucional.',
          imagen: require('@/assets/actividad/imagen4.png'),
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
          id: 13,
          texto:
            'Firmar acuerdos comerciales es útil solo para ventas grandes.',
          imagen: require('@/assets/actividad/imagen1.png'),
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
          id: 14,
          texto:
            'El acceso a mercados internacionales requiere cumplir con normas técnicas y sanitarias.',
          imagen: require('@/assets/actividad/imagen2.png'),
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
          id: 15,
          texto:
            'Las alianzas estratégicas ayudan al campesinado a fortalecer su economía y autonomía.',
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
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
