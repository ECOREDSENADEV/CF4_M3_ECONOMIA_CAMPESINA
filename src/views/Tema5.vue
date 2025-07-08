<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Fortalecimiento organizativo y alianzas estratégicas
    
   
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un campesino puede sembrar, cosechar e incluso vender por su cuenta. Pero cuando se organiza junto a otros, su capacidad se multiplica. No solo se produce: también se gestiona, se transforma, se accede a proyectos, se participa en decisiones del territorio y se llega a nuevos mercados.
    
    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 ¿Qué es el fortalecimiento organizativo campesino?
    
    p.mb-5 El fortalecimiento organizativo es un proceso mediante el cual campesinos y campesinas se agrupan, se capacitan y toman decisiones colectivas, con base en sus propios intereses y necesidades. Significa pasar de lo individual a lo colectivo con estructura, visión y proyección.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.tarjeta.p-4(data-aos="fade-left")
          p Fortalecer una organización campesina implica:
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/3.svg").mx-auto
            .col-lg
              ul.lista-ul--color.mb-0
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Definir con claridad sus objetivos
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Mejorar la estructura interna y roles
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Gestionar bien sus recursos
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Participar en redes o plataformas más amplias
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Acceder a apoyos públicos o privados
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Tener voz ante el Estado y otros actores del territorio
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/4.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-4.p-4.tarjeta(data-aos="fade-left")
          h5.mb-5 Ejemplo
          p.mb-0 Una asociación de mujeres en Bolívar se organizó para procesar productos del campo (harinas, encurtidos, dulces), capacitarse, registrar sus productos ante el Invima y vender a escuelas. Hoy tienen clientes fijos, fondo común y proyectos propios.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Formas de organización campesina más comunes
    
    p.mb-5 Existen diversas formas en que los productores rurales pueden agruparse, dependiendo de su contexto, objetivos y nivel de formalidad. La siguiente tabla presenta las más frecuentes y sus principales características:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1 
        TabsA.color-acento-botones.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4(titulo="Asociaciones")
            h4 Asociaciones
            p Grupo formal con junta directiva, NIT y capacidad de firmar convenios
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cooperativas")
            h4 Cooperativas
            p Comparten ganancias y decisiones; modelo fuerte para la comercialización colectiva
          .tarjeta.color-acento-botones--borde.p-4(titulo="Redes o nodos")
            h4 Redes o nodos
            p Unión de asociaciones o colectivos; facilitan incidencia a nivel nacional
          .tarjeta.color-acento-botones--borde.p-4(titulo="Colectivos informales")
            h4 Colectivos informales
            p Grupos de hecho; útiles para apoyo mutuo e intercambio comunitario
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Beneficios de estar organizados
    
    p.mb-5 Organizarse trae ventajas prácticas, económicas y políticas. Estas son las principales:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/6.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.tarjeta.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 <b>Acceso a compras públicas y contratos grandes</b>. PAE, agricultura por contrato, programas de alimentación institucional.
            li.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 <b>Reducción de costos</b>. Transporte, empaque, insumos, tiempo
            li.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 <b>Mejor capacidad de negociación</b>. Exigir precios, condiciones o rechazar lo injusto. 
            li.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 <b>Mayor posibilidad de recibir apoyo institucional</b>. SENA, alcaldías, gobernaciones, ONG.
            li.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 <b>Más visibilidad y voz pública</b>. Mesas de diálogo, consejos rurales, plataformas de incidencia.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Elementos clave para fortalecer una organización campesina
    
    p.mb-5 A continuación, se presenta pódcast que aborda los elementos clave para fortalecer una organización campesina, destacando principios de liderazgo, transparencia, inclusión y formación continua como ejes para lograr una gestión participativa y sostenible

    .row
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/7.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        div.bg-color-10.tarjeta.mb-5
          .p-4.p-md-5
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema5/8.svg", data-aos="zoom-in")
              .col-lg-7
                p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast:
        
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="Tipos de políticas comerciales que impactan al productor rural"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/9.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-5.tarjeta(data-aos="fade-left")
          h5.mb-4 Ejemplo
          p.mb-0 En Antioquia, una red de jóvenes rurales nació dentro de una organización de productores de aguacate. Hoy lideran la parte digital, promoción por redes y relaciones con universidades.
    
    
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 ¿Qué son las alianzas estratégicas campesinas?
    
    p.mb-5 Las alianzas estratégicas campesinas son acuerdos de colaboración entre organizaciones rurales y otros actores públicos, privados o sociales, con el fin de alcanzar objetivos comunes. Estas alianzas permiten ampliar capacidades, compartir recursos y generar impacto colectivo en los territorios.

    .bg-full-width-2.bg-fondo-3
      .p-4.p-md-5
        .row.justify-content-center.mb-5
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema5/10.svg', alt='')
          .col-lg-6
            p Pueden enfocarse en:
            .row.p-2.mb-3
              .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
                div.bg-color-11.tarjeta.p-3.h-100.align-content-center
                  p.mb-0.text-bold.text-center Comercializar productos
              .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
                div.bg-color-11.tarjeta.p-3.h-100.align-content-center
                  p.mb-0.text-bold.text-center Acceder a insumos a menor costo
              .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
                div.bg-color-11.tarjeta.p-3.h-100.align-content-center
                  p.mb-0.text-bold.text-center Recibir capacitación técnica
            .row.p-2.mb-3
              .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
                div.bg-color-11.tarjeta.p-3.h-100.align-content-center
                  p.mb-0.text-bold.text-center Promover productos en nuevos mercados
              .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
                div.bg-color-11.tarjeta.p-3.h-100.align-content-center
                  p.mb-0.text-bold.text-center Defender derechos territoriales y culturales
              .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
                figure
                  img(src='@/assets/curso/tema5/11.svg', alt='')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Actores con los que se pueden hacer alianzas

        p.mb-5 Existen distintos tipos de aliados que pueden fortalecer los procesos organizativos y comerciales del campesinado. La siguiente tabla muestra ejemplos de actores y cómo pueden contribuir:       

        
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 SENA
                p.text-center Formación técnica, asesoría comercial, ruedas de negocios
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Alcaldías / Gobernaciones
                p.text-center Apoyo a ferias, dotaciones, compras institucionales
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Universidades
                p.text-center Investigación, innovación, prácticas académicas
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 ONG y fundaciones
                p.text-center Financiamiento, formación, acompañamiento a proyectos
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Empresas responsables
                p.text-center Compra directa, logística, apoyo financiero
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Redes campesinas
                p.text-center Visibilidad, incidencia política, acompañamiento nacional
    
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema5/12.png', alt='')
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.tarjeta.p-4(data-aos="fade-left")
          p Recomendaciones para crear alianzas efectivas
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 Buscar aliados que respeten la autonomía campesina.
            li.mb-2.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 Definir claramente qué aporta y qué recibe cada parte.
            li.mb-2.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 Formalizar la alianza por escrito, aunque sea de forma sencilla.
            li.mb-2.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 Evaluar periódicamente el avance del trabajo conjunto.
            li.mb-2.d-flex.bg-color-9.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 No depender de un solo aliado: diversificar las relaciones fortalece la independencia.
    
    div.bg-color-6.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/20.svg", style="max-width: 100px").mx-auto
          .col-lg
            p.mb-0 Fortalecer la organización campesina y tejer alianzas estratégicas es sembrar futuro colectivo. Porque solos se puede avanzar, pero juntos se puede transformar el territorio. Una organización sólida no solo vende más: resiste más, aprende más, exige más y cuida mejor a su gente y su tierra. En tiempos difíciles, una red campesina organizada es más fuerte que cualquier sequía, plaga o amenaza del mercado.
    
        
    



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
