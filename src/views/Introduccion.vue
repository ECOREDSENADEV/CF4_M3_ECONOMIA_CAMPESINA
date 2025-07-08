<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width-2.bg-fondo-1
      .p-4.p-md-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El trabajo campesino no termina en la cosecha. Una vez se siembra, se cuida y se recoge, viene una de las partes más importantes: vender lo producido de forma justa. Y ahí es donde muchas veces el campesino pierde. Porque no hay precios claros, porque se depende de un intermediario, o porque no se conoce cómo negociar.

        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p.mb-5(data-aos="fade-left") Negociar no es gritar ni pelear. Negociar es acordar con respeto, claridad y beneficio mutuo. Y hacer acuerdos comerciales es dejar todo eso por escrito o de palabra, con condiciones justas para todas las partes. En los mercados campesinos, donde se valora el trabajo directo con la tierra, aprender a negociar bien es clave para que el esfuerzo valga lo que realmente cuesta.
        
            .bg-color-1.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/intro/3.png", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Este componente formativo busca que las familias campesinas y sus asociaciones desarrollen habilidades para negociar, reconocer sus derechos comerciales, evitar abusos, y fortalecer su presencia en mercados locales, nacionales e incluso internacionales. No se trata de convertir al campesino en abogado o economista, sino de fortalecer su palabra, su autonomía y su capacidad de decidir cómo y a quién venderle.


</template>

<script>
export default {
  name: 'Introduccion',
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
