<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Principios de negociación campesina
    
    .row.mb-5
      .col-lg-6.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        p(data-aos="fade-left") Negociar, en el mundo campesino, ha sido durante años una práctica cotidiana: se negocia el jornal, el arriendo de tierras o el intercambio de productos. Sin embargo, estas negociaciones frecuentemente se realizan sin reglas claras, sin conocimiento pleno de los derechos propios y en condiciones desiguales frente a comerciantes o compradores con mayor poder económico.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Negociar bien no significa ser experto en leyes ni utilizar un lenguaje complicado. Significa, más bien, defender con seguridad lo que se produce, buscar acuerdos que beneficien a ambas partes y, sobre todo, mantener la dignidad sin ceder ante abusos. Este enfoque apunta a construir relaciones comerciales más justas y sostenibles.
    
    p.mb-5 El aprendizaje sobre negociación campesina se orienta a comprender principios básicos, prepararse adecuadamente para no aceptar precios injustos, y establecer acuerdos duraderos que reconozcan el valor del trabajo campesino.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Condición campesina y regulación de repertorios culturales
    
    p.mb-5 La condición campesina no es solo una categoría ocupacional, sino una forma de vida ligada al territorio, al trabajo familiar y comunitario, y a una economía basada en la reciprocidad, la solidaridad y el respeto por los ciclos de la naturaleza. Esta condición implica también autonomía, identidad y conocimientos colectivos, que se expresan en prácticas como:

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/2.svg', alt='')
        .col-lg
          .row.p-2
            .col-lg-3.mb-3.mb-lg-0
              div.bg-color-1.tarjeta.p-4.h-100.align-content-center
                p.mb-0.text-center.text-bold La palabra dada
            .col-lg-3.mb-3.mb-lg-0
              div.bg-color-1.tarjeta.p-4.h-100.align-content-center
                p.mb-0.text-center.text-bold El trueque
            .col-lg-3.mb-3.mb-lg-0
              div.bg-color-1.tarjeta.p-4.h-100.align-content-center
                p.mb-0.text-center.text-bold Los acuerdos entre vecinos
            .col-lg-3.mb-3.mb-lg-0
              div.bg-color-1.tarjeta.p-4.h-100.align-content-center
                p.mb-0.text-center.text-bold La organización por veredas o núcleos familiares
          .p-4
            p.mb-0(data-aos="fade-up") Los repertorios culturales que regulan la economía campesina comprenden esos saberes y prácticas tradicionales que organizan cómo se produce, se negocia y se comercializa en el campo. No se trata solo de precios y cantidades, sino de relaciones construidas sobre la base de la confianza, la historia compartida y el respeto mutuo.
    
    .row.justify-content-center
      .col-lg-11
        div.bg-color-3.tarjeta.p-3
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/3.png", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Reconocer y fortalecer estos repertorios es esencial para lograr negociaciones más justas. Esto implica valorar las formas propias del campesinado para establecer acuerdos, evitando imponer modelos externos. La formación en negociación, por tanto, debe partir de las prácticas culturales propias, reforzar la dignidad campesina y aportar herramientas útiles sin desarraigar su identidad.
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 ¿Qué es negociar en el contexto campesino?

    p.mb-5 Negociar es llegar a un acuerdo entre dos o más personas sobre algo que se quiere intercambiar: productos, servicios, tiempo o condiciones de trabajo. En el ámbito campesino, esto se traduce en prácticas diarias que incluyen decisiones económicas y sociales esenciales para la vida rural. En este contexto, se negocia comúnmente:
    
    .bg-full-width-2.bg-fondo-2
      .p-4.p-md-5
        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-7.mb-3.mb-lg-0.order-lg-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Precio de los productos
                    p.text-center Papa, leche, frutas, huevos
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Cantidad a entregar
                    p.text-center Por kilos, arrobas, canastas
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Forma de pago
                    p.text-center Al contado o a crédito
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Transporte y entrega
                    p.text-center ¿Quién paga?, ¿dónde se entrega?
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Condiciones de empaque o calidad
                    p.text-center Tamaño, madurez, presentación
        
              .col-lg-3.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/4.png', alt='')

            .row.mb-5
              .col-lg-4.order-lg-2.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
              .col-lg-8.order-lg-1
                .bg-color-4.p-4(data-aos="fade-left")
                  h5 Ejemplo práctico
                  p.mb-5(data-aos="fade-left") Don José lleva 20 canastas de tomate al pueblo. Un comerciante le ofrece $1.000 por kilo, pero Don José había calculado que necesitaba al menos $1.300 para cubrir sus costos y obtener una ganancia. Aquí comienza la negociación.
          
                  .row.align-items-start
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema1/11.png", style="max-width: 271px").mx-auto
                    .col-lg
                      p.mb-0 Si Don José sabe explicar sus razones y conoce el valor de su producto, puede lograr un mejor acuerdo o decidir buscar otro comprador. Este tipo de negociación no solo busca un precio justo, sino también defender con dignidad el esfuerzo invertido en la producción.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Principios claves de la negociación campesina
    
    p.mb-5 Negociar bien en el campo implica más que hablar de precios. Es una práctica que combina conocimiento, respeto y estrategia. A continuación se presentan los cinco principios fundamentales para una negociación campesina justa y efectiva:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Dignidad y respeto
              p Toda negociación debe partir del respeto mutuo. El productor campesino debe valorar su trabajo y no aceptar tratos injustos por necesidad o presión externa. 
              p “No estoy regalando lo que produzco. Estoy ofreciendo algo de calidad, con esfuerzo, y espero lo justo.”
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Preparación e información
              p Quien negocia sin información está en desventaja. Antes de ofrecer un producto, hay que:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Conocer los costos reales de producción
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Saber a cuánto venden otros
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Investigar el precio de mercado.
              p <b>Ejemplo</b>: Si producir un kilo de arracacha cuesta $800 y en el mercado se vende a $1.400, puedes negociar entre $1.300 y $1.500.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Claridad y acuerdos por escrito
              p Siempre que se haga un trato, debe quedar por escrito o grabado, para evitar malentendidos. Un acuerdo claro debe incluir:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Producto
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Cantidad
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Precio
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Fecha y lugar de entrega
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Forma de pago
              p <b>Consejo</b>: Un mensaje de voz por WhatsApp también puede servir como prueba.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 No negociar con hambre ni urgencia
              p Negociar en desesperación lleva a aceptar condiciones injustas. Es mejor planificar la cosecha, buscar alternativas y contar con respaldo de asociaciones o redes. 
              p.text-bold Negociar con calma da más poder.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Relaciones duraderas, no solo ventas
              p Una buena negociación construye relaciones de confianza. Si el comprador te valora y vuelve, has ganado más que una venta: has ganado un cliente. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Cumple lo prometido
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Entrega buena calidad
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-5
                  p.mb-0 Escucha sugerencias
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-6.tarjeta.p-4(data-aos="fade-left")
          p Lo que NO debe pasar en una negociación campesina:
          ul.lista-ul--color.ms-3
            li.d-flex.bg-color-7.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 Aceptar precios sin discutir
            li.d-flex.bg-color-7.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 Dejar que el otro fije todas las condiciones
            li.d-flex.bg-color-7.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 Entregar el producto sin saber cómo ni cuándo se paga
            li.d-flex.bg-color-7.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 Ceder ante amenazas como: “si no me vende a ese precio, le compro a otro”
            li.d-flex.bg-color-7.tarjeta.p-2
              i.fas.fa-leaf.bg-color-5
              p.mb-0 Firmar papeles que no entiendes
          p.mb-0 Ante la duda, es mejor no vender. Más vale perder una venta que perder toda la producción o quedar endeudado.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué significa vincular la condición campesina y los repertorios culturales que regulan su economía?
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Vincular la condición campesina con los repertorios culturales que estructuran su economía significa reconocer una forma de vida completa, no solo una ocupación. Esta forma de vida está profundamente relacionada con el territorio, la comunidad, los ciclos naturales y una lógica distinta de producción y comercialización, alejada de los esquemas del mercado convencional.
    
        .bg-color-4.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Ser campesino o campesina implica una identidad cultural, social y económica que se manifiesta en la forma de producir, intercambiar y tomar decisiones. No se trata únicamente de cultivar o vender productos, sino de actuar desde una lógica comunitaria, sustentada en el respeto, la solidaridad y el arraigo territorial.
    
    p.mb-5 Los repertorios culturales son el conjunto de conocimientos, costumbres, valores y formas de organización que regulan estas prácticas económicas. Son saberes construidos históricamente, que permiten sostener una economía basada en la confianza y la cooperación. A continuación, se presentan sus principales expresiones:

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema1/20.svg', alt='Texto que describa la imagen')
          h3.text-center Acuerdos orales válidos
          p.text-small La palabra dada como compromiso firme
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema1/21.svg', alt='Texto que describa la imagen')
          h3.text-center Relaciones de confianza y reciprocidad
          p.text-small Intercambios sostenidos sin necesidad de contratos formales
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema1/22.svg', alt='Texto que describa la imagen')
          h3.text-center Prácticas económicas propias
          p.text-small Trueque, ferias locales, precios acordados colectivamente
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema1/23.svg', alt='Texto que describa la imagen')
          h3.text-center Organización comunitaria tradicional
          p.text-small Mingas, familias ampliadas, asociaciones, comités veredales

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Por qué es importante hacerlo?
    
    p.mb-5 A continuación, se presentan tres razones fundamentales para integrar la condición campesina y sus repertorios

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-9.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/25.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") <b>Porque potencia el aprendizaje</b>: cuando los contenidos formativos se conectan con los saberes y experiencias que el campesinado ya posee, el proceso de aprendizaje se vuelve más efectivo y significativo.
        .bg-color-9.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/26.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") <b>Porque evita la exclusión cultural</b>: muchos intentos de integrar al campesinado al mercado han fracasado por imponer modelos externos que desconocen sus formas organizativas y sus valores colectivos.
        .bg-color-9.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/27.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") <b>Porque fortalece la autonomía</b>: al validar sus prácticas, se dignifica su experiencia y se promueve una economía más justa, sin dependencia de intermediarios ni lógicas empresariales impuestas.
       
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Cómo se traduce esto en el contenido del componente formativo?
    
    p Adaptar el contenido a la lógica campesina no es simplificarlo, sino enriquecerlo desde la cultura rural. A continuación, se explica como hacerlo: 

    .bg-full-width-2.bg-color-12
      .p-4.p-md-5
        div.bg-color-10.p-4.tarjeta
          figure.mb-3
            img(src='@/assets/curso/tema1/28.png', alt='')
          .row.p-2.mb-3
            .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
              div.bg-color-11.tarjeta.p-4.h-100.align-content-center
                h5 Negociación
                p.mb-0 Diálogo cara a cara, respeto mutuo, palabra como compromiso
            .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
              div.bg-color-11.tarjeta.p-4.h-100.align-content-center
                h5 Acuerdos comerciales
                p.mb-0 Reconocimiento de acuerdos orales y escritos como válidos
            .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
              div.bg-color-11.tarjeta.p-4.h-100.align-content-center
                h5 Alianzas y redes
                p.mb-0 Fortalecimiento del trabajo colectivo y la colaboración
            .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
              div.bg-color-11.tarjeta.p-4.h-100.align-content-center
                h5 Acceso a mercados
                p.mb-0 Valorización de ferias locales, mercados agroecológicos y compras públicas
          p.mb-0 Vincular la condición campesina con sus repertorios culturales es enseñar desde la realidad, respetando y fortaleciendo lo que el campesinado ya sabe, sin imponer modelos descontextualizados. Este enfoque permite potenciar sus prácticas, reforzar su identidad rural y avanzar hacia una economía más justa, sostenible y en armonía con su cultura.

        separador

        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Ejercicio 

        p.mb-5 Antes de vender un producto, se recomienda realizar un ejercicio sencillo que ayuda a llegar al mercado con claridad y seguridad sobre el valor del trabajo campesino. Este ejercicio puede realizarse en un cuaderno, y consiste en responder las siguientes preguntas:  

        .row.justify-content-center
          .col-lg-10
            div.bg-color-1.tarjeta.p-5
              .row.p-2.mb-3
                .col-lg-4.position-relative.mb-3.mb-lg-0(data-aos="fade-up")
                  div.bg-color-2.tarjeta.p-4.h-100.align-content-center
                    h5 ¿Qué se va a vender?
                    p.mb-0 Ejemplo: 100 kilos de papa criolla.
                  img.pst(src='@/assets/curso/tema1/29.svg', style="max-width: 37px")
                .col-lg-4.position-relative.mb-3.mb-lg-0(data-aos="fade-down")
                  div.bg-color-2.tarjeta.p-4.h-100.align-content-center
                    h5 ¿Cuánto costó producirlo?
                    p.mb-0 Se deben sumar los costos de semillas, abono, mano de obra, transporte, etc
                  img.pst(src='@/assets/curso/tema1/29.svg', style="max-width: 37px")
                .col-lg-4.position-relative.mb-3.mb-lg-0(data-aos="fade-up")
                  div.bg-color-2.tarjeta.p-4.h-100.align-content-center
                    h5 ¿Cuál es el precio justo?
                    p.mb-0 Se debe establecer un valor que permita recuperar los costos y obtener una ganancia
                  img.pst(src='@/assets/curso/tema1/29.svg', style="max-width: 37px")
              .row.p-2.mb-3
                .col-lg-4.position-relative.mb-3.mb-lg-0(data-aos="fade-down")
                  div.bg-color-2.tarjeta.p-4.h-100.align-content-center
                    h5 ¿Quiénes pueden ser los compradores?
                    p.mb-0 Mercado local, vecinos, tienda, plaza, asociación, entre otros.
                  img.pst(src='@/assets/curso/tema1/29.svg', style="max-width: 37px")
                .col-lg-4.position-relative.mb-3.mb-lg-0(data-aos="fade-up")
                  div.bg-color-2.tarjeta.p-4.h-100.align-content-center
                    h5 ¿Qué se está dispuesto a negociar y qué no?
                    p.mb-0 Ejemplo: se puede bajar $100, pero no más.
                  img.pst(src='@/assets/curso/tema1/29.svg', style="max-width: 37px")
                .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
                  figure
                    img(src='@/assets/curso/tema1/30.svg', alt='')
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/31.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Este ejercicio permite que la persona productora llegue al mercado con conciencia de lo que ofrece y del valor de su esfuerzo. Negociar no es un conflicto, sino una conversación con objetivos claros. Cuando el campesinado se prepara, defiende sus precios y busca acuerdos justos, deja de ser explotado y logra una mayor retribución por su trabajo. La negociación campesina no consiste en enfrentarse al comprador, sino en poner sobre la mesa el conocimiento, el trabajo y la dignidad del productor rural.
    
        .bg-color-6.tarjeta(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure.d-flex.justify-content-center
                img(src='@/assets/curso/tema1/32.svg', style="max-width: 310px")
            .col-lg
              .p-4.p-lg-0
                h5.mb-3(data-aos="fade-up")  Como se dice en el campo:
                h5 “El que no sabe lo que vale, se lo pagan por lo que quieran.”
                p.mb-0 Este ejercicio es un paso para reconocer y defender ese valor.

           




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
