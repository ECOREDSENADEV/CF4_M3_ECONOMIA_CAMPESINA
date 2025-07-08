<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas para suscripción de acuerdos comerciales campesinos
    
    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") Cuando un campesino vende su producción —ya sea papa, queso, hortalizas, huevos, o transformados como dulces o cuajadas— lo ideal no es que todo dependa de un apretón de manos o una promesa verbal. Lo ideal es dejar por escrito lo que se acuerda, con claridad sobre qué, cómo, cuándo y a qué precio se va a entregar el producto.
    
        .row.align-items-start
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Eso es lo que llamamos un acuerdo comercial. Puede ser formal (firmado por ambas partes) o informal (anotado y reconocido entre ambas personas). Lo importante es que protege al productor campesino, evita malentendidos y da seguridad a quien compra.
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 ¿Qué es un acuerdo comercial campesino?
    
    p.mb-5 A continuación, se presenta un video que explica de manera clara y estructurada los elementos fundamentales que debe contener un acuerdo comercial campesino, subrayando su utilidad en diversos contextos de venta, desde pequeños comercios hasta contratos institucionales.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Por qué es importante firmar acuerdos comerciales en el campo?
    
    p.mb-5 Contar con un acuerdo comercial escrito no solo previene conflictos, sino que mejora la organización y abre puertas a nuevas oportunidades. A continuación, se presentan las razones principales por las que este tipo de herramienta es clave para el productor rural:

    .row.mb-3
      .col-md-6
        .bg-color-13.h-100.tarjeta.mb-3(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/3.svg', alt='')
              .col-lg
                .p-4
                  p.mb-0(data-aos="fade-up") <b>Para proteger al productor campesino</b>: muchos entregan su producto "de palabra" y luego enfrentan problemas porque el comprador no paga, paga menos o desaparece. Un acuerdo firmado permite exigir el cumplimiento.
      .col-md-6
        .bg-color-13.h-100.tarjeta.mb-3(data-aos="fade-down")
            .row.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/4.svg', alt='')
              .col-lg
                .p-4
                  p.mb-0(data-aos="fade-up") <b>Para dar garantías al comprador</b>: algunos compradores desconfían por temor a que el producto no llegue a tiempo o con la calidad esperada. El acuerdo da tranquilidad y confianza mutua.
    
    .row.mb-3
      .col-md-6
        .bg-color-13.h-100.tarjeta.mb-3(data-aos="fade-down")
            .row.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/5.svg', alt='')
              .col-lg
                .p-4
                  p.mb-0(data-aos="fade-up") <b>Para planificar mejor la producción</b>: si se sabe con anticipación qué se va a entregar y a quién, se puede organizar mejor la siembra, cosecha, empaque y transporte.
      .col-md-6
        .bg-color-13.h-100.tarjeta.mb-3(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/6.svg', alt='')
              .col-lg
                .p-4
                  p.mb-0(data-aos="fade-up") <b>Para acceder a programas del Estado</b> : iniciativas como Agricultura por Contrato del Ministerio de Agricultura o el Programa de Alimentación Escolar (PAE) requieren acuerdos por escrito como requisito para participar.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 ¿Qué tipos de acuerdos comerciales se usan en el contexto campesino?
    
    p.mb-5 En los territorios rurales existen diversas formas de pactar compromisos de venta. La elección de un tipo de acuerdo depende del nivel de confianza, el volumen de la transacción y los requisitos institucionales. A continuación, se presentan los tres tipos más comunes de acuerdos comerciales en el ámbito campesino:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Informales" :icono="require('@/assets/componentes/2.svg')")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Informales
            p Basados en la palabra o una anotación simple- Usados entre vecinos o compradores frecuentes- No tienen garantía legal.
            p <b>Ejemplo</b>: “Doña Carmen me entrega 10 libras de queso todos los miércoles. Yo le pago en efectivo a la entrega. Precio fijo: $7.000/lb.” Puede anotarse en una libreta o confirmarse con un audio en WhatsApp
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/7.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Semi-formales" :icono="require('@/assets/componentes/3.svg')")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Semi-formales
            p Anotados y firmados por ambas partes- No requieren abogado- Ofrecen mayor claridad y seguridad que los acuerdos verbales
            p <b>Ejemplo</b>: Acuerdo de compra-venta campesina entre Don Álvaro Pérez y Luz Elena Soto:• Producto: huevo criollo• Cantidad: 10 cubetas semanales• Precio: $12.000 por cubeta• Entrega: cada viernes• Pago: contado al recibirFirmado el 12 de abril de 2025.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/8.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Formales (legales)" :icono="require('@/assets/componentes/4.svg')")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h4 Formales (legales)
            p Requieren documentos oficiales y registro- Usados en ventas a entidades o programas estatales- Incluyen cláusulas, penalidades y condiciones claras
            p <b>Ejemplo</b>: Una asociación campesina firma contrato con el PAE para entregar 300 kg semanales de plátano y yuca durante tres meses. El contrato incluye precios, fechas, calidad y condiciones de pago.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/9.png', alt='Texto que describa la imagen')
    
    p Estos tipos de acuerdo permiten al campesinado adaptarse a diferentes contextos de venta sin perder control sobre sus productos ni sobre las condiciones en las que comercia.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Pasos para elaborar un acuerdo comercial campesino (aplicable a cualquier nivel)
    
    p.mb-5 El acuerdo comercial no requiere abogados ni trámites costosos, pero sí claridad, orden y compromiso. A continuación, se presentan los pasos esenciales para elaborarlo de manera adecuada:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 A.  Conversar y acordar los términos
              p Antes de escribir, dialoga con el comprador y definan:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Qué producto se necesita.
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Cantidad.
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Precio.
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Frecuencia de entrega.
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Forma y fecha de pago.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 B. Anotar todo en limpio
              p Utiliza hoja blanca o formato prediseñado. Incluye lo acordado, datos de contacto, lugar de entrega y condiciones especiales.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 C. Firmar el documento
              p Las dos partes deben firmar. Si alguien no sabe escribir, puede usar su huella. También se puede guardar una foto del acuerdo con el celular.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 D.  Entregar una copia a cada parte
              p Una copia es para el campesino y otra para el comprador. Así ambos pueden consultar lo acordado si ocurre algún problema.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Elementos que no deben faltar en un acuerdo comercial
      
    p.mb-5 Un acuerdo claro incluye los siguientes datos. La siguiente tabla presenta cada elemento acompañado de un ejemplo:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Elementos de acuerdo comercial
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.p-3.bg-color-10 Elemento
                th.p-3.bg-color-10 Ejemplo
            tbody
              tr
                td.p-2 Datos de las partes
                td.p-2 Nombres, cédulas, teléfonos
              tr
                td.p-2 Descripción del producto
                td.p-2 Leche pasteurizada de vaca, en bolsa sellada de 1 litro
              tr
                td.p-2 Cantidad
                td.p-2 100 litros semanales
              tr
                td.p-2 Precio unitario y total
                td.p-2 $2.000 por litro - total $200.000 por semana
              tr
                td.p-2 Forma de entrega
                td.p-2 Entrega en puerta del comprador, cada lunes a las 8 a.m.
              tr
                td.p-2 Forma de pago
                td.p-2 Transferencia al finalizar la entrega semanal
              tr
                td.p-2 Tiempo de duración del acuerdo
                td.p-2 Del 10 de mayo al 10 de agosto de 2025
              tr
                td.p-2 Firmas
                td.p-2 Firma o huella de ambas partes
       
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.tarjeta.p-4(data-aos="fade-left")
          p Las recomendaciones para proteger la venta son: 
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/16.svg").mx-auto
            .col-lg
              ul.lista-ul--color.mb-0
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 No entregar productos sin acuerdo claro.
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Conservar todo por escrito, incluso si es en un cuaderno.
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Tomar fotos de la entrega del producto como evidencia.
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 En caso de vender en grupo, que todos los productores firmen.
                li.d-flex.bg-color-15.tarjeta.p-2
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 No firmar documentos que no se entienden: pedir ayuda si es necesario.
          
    div.bg-color-6.mb-5.tarjeta
      .px-4.px-md-5.py-4
        p.mb-0 El acuerdo comercial es una herramienta que fortalece la palabra del campesino. No se necesita ser abogado, solo tener claridad en lo acordado y dejarlo por escrito.Cuando el campesinado firma acuerdos bien hechos, deja de improvisar y toma el control de su producción, su tiempo y su dignidad.

    


</template>

<script>
export default {
  name: 'Tema3',
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
