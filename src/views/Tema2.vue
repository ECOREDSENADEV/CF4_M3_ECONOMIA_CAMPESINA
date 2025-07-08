<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Políticas comerciales en mercados locales y territoriales campesinos
    
    p.mb-5 Cuando se habla de políticas comerciales, no se hace referencia únicamente a las normas establecidas desde instancias centrales como Bogotá. También se incluyen aquellas reglas, prácticas y acuerdos que surgen desde los territorios: veredas, pueblos y municipios. Estas políticas locales regulan aspectos clave como:

    .bg-full-width-2.bg-color-12
      .p-4.p-md-5
        div.bg-color-13.p-4.tarjeta
          .row
            .col-lg-3
              figure.mb-3
                img(src='@/assets/curso/tema2/1.svg', alt='')
            .col-lg-9
              .row.p-2.mb-3
                .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
                  div.bg-color-10.tarjeta.p-4.h-100.align-content-center
                    p.mb-0.text-bold La organización de las ventas
                .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
                  div.bg-color-10.tarjeta.p-4.h-100.align-content-center
                    p.mb-0.text-bold La fijación de precios
                .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
                  div.bg-color-10.tarjeta.p-4.h-100.align-content-center
                    p.mb-0.text-bold La gestión de los espacios de comercialización
                .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
                  div.bg-color-10.tarjeta.p-4.h-100.align-content-center
                    p.mb-0.text-bold La relación entre productores y compradores
              p.mb-0 Estas formas de autorregulación no solo son legítimas, sino que tienen respaldo jurídico. El Artículo 64 de la Constitución Política de Colombia establece que el Estado debe:
    
    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 “Promover el acceso progresivo a la propiedad de la tierra y a los servicios de apoyo para los trabajadores agrarios, especialmente para la agricultura campesina, familiar y comunitaria.”
        p(data-aos="fade-left") Esto significa que organizarse desde lo local es un derecho, no una concesión. Las prácticas comerciales propias del campesinado tienen fundamento constitucional y deben ser fortalecidas como parte del desarrollo rural. Conocer estas políticas permite al campesinado entrar al mercado con conocimiento y estrategia, entendiendo:
      
        .bg-color-14.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/3.svg").mx-auto
            .col-lg
              ul.lista-ul--color.mb-0
                li.d-flex.bg-color-7.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Cómo funciona el entorno comercial.
                li.d-flex.bg-color-7.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Qué oportunidades existen.
                li.d-flex.bg-color-7.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Qué normas se deben cumplir.
                li.d-flex.bg-color-7.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Cómo proteger su producción frente a abusos o prácticas injustas, especialmente de intermediarios.
    
    .bg-full-width-2.bg-fondo-3
      .p-4.p-md-5
        separador

        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 ¿Qué son las políticas comerciales en el contexto campesino?
        
        .bg-full-width-2.bg-fondo-1
          .p-4.p-md-5
            .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema2/4.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Las políticas comerciales en el contexto campesino son el conjunto de reglas y decisiones que definen cómo se venden los productos del campo dentro de un territorio específico. Estas políticas pueden estar formalmente escritas, como ordenanzas municipales, o acordadas colectivamente entre actores locales, como en el caso de normas internas de mercados campesinos.
        
            p.mb-5 Estas políticas no solo regulan el comercio, sino que reflejan las prioridades, valores y dinámicas locales. Con frecuencia, se construyen desde la práctica y la participación directa de las comunidades rurales. Para comprender su alcance, revisa esta tabla con los elementos clave que pueden conformarlas:

            .row.justify-content-center.mb-5.align-items-center
              .col-lg-7.mb-3.mb-lg-0
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Acceso a los espacios de venta
                    p.text-center Quién puede vender en la plaza o feria
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Organización del espacio comercial
                    p.text-center Distribución y ubicación de los puestos
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Fijación de precios
                    p.text-center Establecimiento de precios mínimos acordados
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Prioridades de productos
                    p.text-center Promoción de productos locales, agroecológicos y tradicionales
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Presencia o control de intermediarios
                    p.text-center Regulación o exclusión de revendedores en ciertos espacios
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Apoyo institucional
                    p.text-center Participación de alcaldías, SENA, ICA u otras entidades
        
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema2/5.png', alt='')
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-5.tarjeta(data-aos="fade-left")
          h5 Ejemplo concreto:
          p.mb-0 En municipios como Nuevo Colón (Boyacá) existen políticas locales que priorizan la compra de productos a asociaciones campesinas para el Programa de Alimentación Escolar (PAE). Este tipo de decisión local es una política comercial favorable al campesinado, ya que garantiza un mercado justo y estable para sus productos.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Tipos de políticas comerciales que impactan al productor rural
    
    .row
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") A continuación, se presenta un pódcast  que explica los distintos tipos de políticas comerciales que inciden en el productor rural, destacando su origen, alcance y efectos en los procesos de comercialización campesina.
        div.bg-color-10.tarjeta.mb-5
          .p-4.p-md-5
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")
              .col-lg-7
                p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast:
        
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="Tipos de políticas comerciales que impactan al productor rural"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Participación del campesinado en estas políticas
    
    p.mb-5 Las políticas comerciales no deben imponerse unilateralmente. El campesinado tiene el derecho a participar en su construcción, expresar sus necesidades, hacer propuestas y señalar lo que no está funcionando. La participación activa fortalece la legitimidad de las políticas y garantiza que respondan a la realidad rural.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8 
        p A continuación, se presentan las principales formas de participación campesina en la construcción y aplicación de políticas comerciales:

        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-3")
          div(titulo="Asociaciones o redes campesinas")
            p.mb-0 Organizaciones que representan colectivamente intereses productivos y comerciales
          div(titulo="Consejos Municipales de Desarrollo Rural (CMDR)")
            p.mb-0 Espacios de diálogo donde se puede incidir en decisiones locales relacionadas con el campo
          div(titulo="Relación directa con gobiernos locales")
            p.mb-0 Interacción con alcaldías y gobernaciones para proponer o revisar políticas
          div(titulo="Propuestas colectivas")
            p.mb-0 Documentos o iniciativas elaboradas por las comunidades para presentar formalmente
          div(titulo="Eventos institucionales")
            p.mb-0 Ferias, encuentros o programas del SENA, ICA, gobernaciones, entre otros, que permiten visibilizar necesidades y propuestas
       
    .row
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-5.tarjeta(data-aos="fade-left")
          h5 Ejemplo inspirador
          p.mb-0 En el departamento de Bolívar, mujeres campesinas han participado activamente en la creación de acuerdos para que las ferias rurales sean organizadas por ellas mismas, priorizando la venta directa sin intermediarios. Este tipo de participación transforma las condiciones del comercio rural y empodera a quienes tradicionalmente han sido marginadas.


    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Obstáculos comunes que enfrentan los productores
    
    p.mb-5 Aunque existen políticas favorables al campo, los productores campesinos continúan enfrentando barreras que dificultan su participación justa en los mercados. Estas dificultades afectan su capacidad de comercializar con autonomía, justicia y sostenibilidad. A continuación, se identifican los principales obstáculos que enfrentan en sus territorios:

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-10.tarjeta.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Falta de información
                p.mb-0 Desconocimiento de normas y requisitos básicos para vender
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Exigencias técnicas complicadas
                p.mb-0 Trámites como facturación electrónica o registros sanitarios
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Espacios controlados por externos
                p.mb-0 Presencia dominante de comerciantes ajenos a la comunidad
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Baja representación en decisiones
                p.mb-0 Escasa participación en espacios de formulación de políticas
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Desconfianza entre productores
                p.mb-0 Competencia interna en lugar de cooperación organizada
    
    p.mb-5 Por eso, es fundamental promover acciones colectivas desde el territorio que permitan transformar estas condiciones.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-6.tarjeta.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Solicitar mercados campesinos apoyados por la alcaldía
                p.mb-0 Garantizar espacios estables para la venta directa
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Promover acuerdos de precios y calidad comunitarios
                p.mb-0 Evitar competencia desleal y fortalecer la imagen colectiva
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Crear o fortalecer asociaciones campesinas
                p.mb-0 Tener representación en decisiones públicas
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Realizar veeduría a programas como el PAE
                p.mb-0 Asegurar transparencia y acceso justo a compras públicas
            li.d-flex.bg-color-15.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              h5 Pedir formación técnica a instituciones locales
                p.mb-0 Cumplir requisitos legales como el INVIMA o la facturación
    

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-4.tarjeta(data-aos="fade-left")
          h5 Ejemplo:
          p.mb-5(data-aos="fade-left") En municipios de Cundinamarca y Boyacá, productores organizaron ferias dominicales propias en las plazas. Establecieron reglas para evitar la competencia desleal, compartieron transporte y crearon un fondo común para mejorar la presentación de los productos. Así, construyeron su propia política comercial local desde la práctica.
  
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/20.svg", style="max-width: 271px").mx-auto
            .col-lg
              p.mb-0 Las políticas comerciales no están lejos: se construyen en la plaza, en la feria, en la escuela, en la alcaldía, en los acuerdos entre vecinos. Conocerlas y participar en su construcción permite al campesinado decidir cómo, dónde y a qué precio vender. Cuando el campesinado se organiza y actúa, convierte las reglas del mercado en herramientas de justicia, dignidad y sostenibilidad para su territorio.
          
    

  
    


</template>

<script>
export default {
  name: 'Tema2',
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
