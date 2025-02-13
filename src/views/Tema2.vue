<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Cocina de África
    .row(data-aos="fade-down")
      .col-lg-4.pe-lg-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='').m-auto
      .col-lg-8
        .row.align-items-center.h-100.bg-c1
          .col
            .p-4
              p.mb-0 África cuenta con una rica tradición culinaria, influenciada por la variedad de sus recursos y las técnicas de sus comunidades. En esta sección exploraremos algunos platos representativos.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido.mb-0
      h2 2.1 Marruecos
    .row.bg-c2.mb-4
        .col-12
          .px-5
            .row.mb-4.mt-5
              .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
                p.mb-4 Marruecos destaca por el uso de ingredientes como la sémola, especias aromáticas y técnicas de cocción tradicionales. La sémola de trigo, por ejemplo, se utiliza en múltiples preparaciones con vegetales, carnes y pescados.
                .row.mb-2.ms-0
                  .col-auto.bg-c3(data-aos="fade-left")
                    .row.align-items-center
                      .col-auto.px-0
                        figure
                          img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                      .col
                        h3.mb-0 Cuscús
                p El cuscús es la base de muchas recetas tradicionales marroquíes. Su textura suave y versatilidad permiten combinarlo con diferentes ingredientes según la ocasión.
                .row
                  .col-12.align-items-center.h-100
                    .p-4.bg-c1
                      p #[b Los pasos para su preparación son:]
                      ol.lista-ol--cuadro.ms-3
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 1
                          |
                          p.mb-0 Utilizar una parte de cuscús por cinco partes de agua con sal y aceite.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 2
                          |
                          p.mb-0 Llevar a fuego medio hasta que el cuscús esté cocido.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 3
                          |
                          p.mb-0 Añadir mantequilla y separar los granos con un tenedor.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 4
                          |
                          p.mb-0 Reservar para su uso en diversas combinaciones.
              .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/tema2/img2.png', alt='', style='width: 430px').m-auto
            .row.mb-2.ms-0
              .col-auto.bg-c3(data-aos="fade-left")
                .row.align-items-center
                  .col-auto.px-0
                    figure
                      img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                  .col
                    h3.mb-0 #[i Tahine] de garbanzo
            p(data-aos="fade-right") El #[i tahine] de garbanzo es una crema tradicional que se prepara con ingredientes básicos de la región.
    .row.bg-c9.mb-5
      .col-12
        .px-5
          .row.mb-4
            .col-12
              .p-4.bg-c7
                .row.align-items-center.justify-content-center
                  .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
                    p #[b Los pasos para su preparación son:]
                    ol.lista-ol--cuadro.ms-3
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 1
                        |
                        p.mb-0 Garbanzos: 250 g.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 2
                        |
                        p.mb-0 Limón: 1 unidad.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 3
                        |
                        p.mb-0 Pasta de ajo: 10 g.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 4
                        |
                        p.mb-0 Aceite de oliva: 40 ml.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 5
                        |
                        p.mb-0 Sal: al gusto.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 6
                        |
                        p.mb-0 Paprika: al gusto.
                  .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/tema2/img3.png', alt='', style='width: 460px').m-auto
          p.mb-4(data-aos="fade-right") Los pasos para su preparación son:
          .row.justify-content-center(data-aos="fade-down")
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .p-5.bg-c8.shadow-sm
                figure.mb-0
                  img(src='@/assets/curso/tema1/img5.svg', alt='', style="width: 115px").m-auto
                p.text-center.mb-0 Seleccionar y remojar los garbanzos durante 4 horas.
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .p-5.bg-c8.shadow-sm
                figure.mb-3
                  img(src='@/assets/curso/tema1/img6.svg', alt='', style="width: 100px").m-auto
                p.text-center.mb-0 Cocinarlos en agua con sal hasta ablandar.
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .p-5.bg-c8.shadow-sm
                figure.mb-3
                  img(src='@/assets/curso/tema1/img7.svg', alt='', style="width: 100px").m-auto
                p.text-center.mb-0 Licuar los garbanzos con el zumo de limón, aceite de oliva y pasta de ajo hasta obtener una consistencia cremosa.
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .p-5.bg-c8.shadow-sm
                figure.mb-3
                  img(src='@/assets/curso/tema2/img1.svg', alt='', style="width: 100px").m-auto
                p.text-center.mb-0 Decorar con paprika y servir con pan árabe.
    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 #[i Bissara]
    .row.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p El #[i bissara] es un platillo humilde pero tradicional de Marruecos, elaborado con habas y arvejas.
        .row
          .col-12
            .p-4.bg-c12
              p #[b Los ingredientes son:]
              ol.lista-ol--cuadro.ms-3
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 1
                  |
                  p.mb-0 Habas: 350 g.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 2
                  |
                  p.mb-0 Arvejas: 150 g.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 3
                  |
                  p.mb-0 Comino en polvo: 1 g.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 4
                  |
                  p.mb-0 Ajo: 1 diente.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 5
                  |
                  p.mb-0 Sal: al gusto.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 6
                  |
                  p.mb-0 Pimentón dulce: 1 g.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 7
                  |
                  p.mb-0 Chili en polvo: 1 g.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 8
                  |
                  p.mb-0 Aceite de oliva: 30 ml.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img4.png', alt='', style='width: 460px').m-auto
    p(data-aos="fade-right") Los pasos para su preparación son:
    .row.mb-5
      .col-12
        .px-4.pt-4.bg-c7
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img2.svg', alt='', style='width: 460px').m-auto
            .col-lg-7(data-aos="fade-left")
              .row.align-items-center.h-100
                .col-12
                  ol.lista-ol--cuadro
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 1
                      |
                      p.mb-0 Lavar las habas y arvejas, remojándolas durante una hora.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 2
                      |
                      p.mb-0 Retirar las cáscaras y cocinar en una olla con agua, sal y ajo por 30 minutos.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 3
                      |
                      p.mb-0 Licuar los ingredientes con un poco del agua de cocción hasta obtener una crema homogénea.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 4
                      |
                      p.mb-0 Decorar con aceite de oliva, comino, pimentón dulce y chili antes de servir.
    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 #[i Zaalouk] de berenjenas
    p.mb-4(data-aos="fade-right") El #[i zaalouk] es un puré de berenjenas conocido como el "caviar de berenjenas", muy popular en Marruecos.
    .row.bg-c9
      .col-12
        .px-5
          .row.mb-4
            .col-12
              .p-4.bg-c1
                .row.align-items-center.justify-content-center
                  .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
                    p #[b Los ingredientes son:]
                    ol.lista-ol--cuadro.ms-3
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 1
                        |
                        p.mb-0 Berenjenas horneadas (convertidas en puré).
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 2
                        |
                        p.mb-0 Tomates maduros sin piel.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 3
                        |
                        p.mb-0 Perejil.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 4
                        |
                        p.mb-0 Pimentón dulce.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 5
                        |
                        p.mb-0 Pimienta.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 6
                        |
                        p.mb-0 Ajo.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 7
                        |
                        p.mb-0 Limón.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 8
                        |
                        p.mb-0 Sal.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 9
                        |
                        p.mb-0 Aceite de oliva.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 10
                        |
                        p.mb-0 Aceitunas negras.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 11
                        |
                        p.mb-0 Comino.
                  .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/tema2/img5.png', alt='', style='width: 480px').m-auto
          .row.justify-content-center(data-aos="fade-down")
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .p-5.bg-c8.shadow-sm
                figure.mb-0
                  img(src='@/assets/curso/tema1/img5.svg', alt='', style="width: 115px").m-auto
                p.text-center.mb-0 Cocinar todos los ingredientes juntos hasta obtener una mezcla homogénea.
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .p-5.bg-c8.shadow-sm
                figure.mb-3
                  img(src='@/assets/curso/tema1/img6.svg', alt='', style="width: 100px").m-auto
                p.text-center.mb-0 Refrigerar en un recipiente tapado.
            .col-sm-6.col-lg-4
              .p-5.bg-c8.shadow-sm
                figure.mb-3
                  img(src='@/assets/curso/tema1/img7.svg', alt='', style="width: 100px").m-auto
                p.text-center.mb-0 Servir frío como entrada o acompañamiento.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido.mb-0
      h2 2.2 Arabia
    .row.bg-c2.mb-5
        .col-12
          .px-5
            p.mt-5.mb-4(data-aos="fade-right") La gastronomía árabe combina especias intensas y sabores equilibrados, representando una tradición rica y profundamente cultural.
            .row.mb-2.ms-0
              .col-auto.bg-c3(data-aos="fade-left")
                .row.align-items-center
                  .col-auto.px-0
                    figure
                      img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                  .col
                    h3.mb-0 #[i Falafel]
            .row.justify-content-center.mb-4
              .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
                p Las croquetas de falafel son un clásico de la cocina árabe, preparadas con legumbres como garbanzos o habas.
                .row.align-items-center
                  .col-12
                    .p-4.bg-c10
                      p #[b Los ingredientes son:]
                      ol.lista-ol--cuadro.ms-3
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 1
                          |
                          p.mb-0 Legumbres (garbanzos, habas, lentejas o soya).
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 2
                          |
                          p.mb-0 Ajo.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 3
                          |
                          p.mb-0 Cilantro.
              .col-lg-5(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/tema2/img6.png', alt='', style='width: 440px').m-auto
            p(data-aos="fade-right") Los pasos para su preparación son:
            .row.justify-content-center(data-aos="fade-down")
              .col-sm-6.col-lg-4.mb-4.mb-lg-0
                .p-5.bg-c8.shadow-sm
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img5.svg', alt='', style="width: 115px").m-auto
                  p.text-center.mb-0 Remojar las legumbres sin cocinarlas.
              .col-sm-6.col-lg-4.mb-4.mb-lg-0
                .p-5.bg-c8.shadow-sm
                  figure.mb-3
                    img(src='@/assets/curso/tema1/img6.svg', alt='', style="width: 100px").m-auto
                  p.text-center.mb-0 Molerlas y sazonarlas con ajo y cilantro.
              .col-sm-6.col-lg-4
                .p-5.bg-c8.shadow-sm
                  figure.mb-3
                    img(src='@/assets/curso/tema1/img7.svg', alt='', style="width: 100px").m-auto
                  p.text-center.mb-0 Formar croquetas y freír en aceite caliente.
    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 #[i Kibbe]
    .row.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p El #[i kibbe] es una masa de trigo rellena con carne molida y especias, valorada por su sabor único.
        .row
          .col-12
            .px-4.pt-4.bg-c13
              .row.align-items-center
                .col-md-4
                  p #[b Los ingredientes son:]
                  ol.lista-ol--cuadro.ms-3
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 1
                      |
                      p.mb-0 Carne molida.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 2
                      |
                      p.mb-0 Trigo.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 3
                      |
                      p.mb-0 Perejil.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 4
                      |
                      p.mb-0 Cebolla.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 5
                      |
                      p.mb-0 Pimienta.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 6
                      |
                      p.mb-0 Comino.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 7
                      |
                      p.mb-0 Hierbabuena.
                .col
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', alt='', style='width: 340px').m-auto
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img7.png', alt='', style="width: 480px").m-auto
    p.mb-4(data-aos="fade-right") Los pasos para su preparación son:
    .row.mb-5
      .col-12
        .px-4.pt-4.bg-c7
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img4.svg', alt='', style='width: 460px').m-auto
            .col-lg-7(data-aos="fade-left")
              .row.align-items-center.h-100
                .col-12
                  ol.lista-ol--cuadro
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 1
                      |
                      p.mb-0 Mezclar todos los ingredientes formando una masa uniforme.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 2
                      |
                      p.mb-0 Dar forma de “zepelín” alargado.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 3
                      |
                      p.mb-0 Freír u hornear según preferencia.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 4
                      |
                      p.mb-0 Servir como entrada o plato principal.
    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 #[i Kebab]
    .row.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p El #[i kebab], símbolo de la cocina árabe, consiste en carne asada con especias y vegetales.
        .row
          .col-12
            .p-4.bg-c12
              p #[b Los ingredientes son:]
              ol.lista-ol--cuadro.ms-3.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 1
                  |
                  p.mb-0 Cordero.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 2
                  |
                  p.mb-0 Jengibre.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 3
                  |
                  p.mb-0 Cebollas.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 4
                  |
                  p.mb-0 Pimientos.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 5
                  |
                  p.mb-0 Limón.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 6
                  |
                  p.mb-0 Ajo.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 7
                  |
                  p.mb-0 Especias como cardamomo, nuez moscada, clavo, coriandro y pimienta de Jamaica.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 480px").m-auto
    p.mb-4(data-aos="fade-right") Los pasos para su preparación son:
    .row.mb-5
      .col-12.bg-c6
        .row.justify-content-center
          .col-4.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img5.svg', alt='', style='width: 380px').m-auto
          .col-lg-7(data-aos="fade-left")
            .row.align-items-center.h-100
              .col-12
                .p-2.p-xl-4
                  ol.lista-ol--cuadro.ms-3.mb-0
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 1
                      |
                      p.mb-0 Marinar la carne con todos los ingredientes.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 2
                      |
                      p.mb-0 Ensartar en brochetas.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 3
                      |
                      p.mb-0 Cocinar a la parrilla hasta dorar.
    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 #[i Tabule]
    .row.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p El #[i tabule] es una ensalada fresca, ideal como entrada o acompañamiento.
        .row
          .col-12
            .px-4.pt-4.bg-c13
              .row.align-items-center
                .col-md-4
                  p #[b Los ingredientes son:]
                  ol.lista-ol--cuadro.ms-3
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 1
                      |
                      p.mb-0 Sémola de trigo.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 2
                      |
                      p.mb-0 Tomate.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 3
                      |
                      p.mb-0 Perejil.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 4
                      |
                      p.mb-0 Limón.
                    li.d-flex
                      .lista-ol--cuadro__vineta.v--green
                        span 5
                      |
                      p.mb-0 Aceite de oliva.
                  p.mb-0 Opcional: pepino y menta.
                .col
                  figure
                    img(src='@/assets/curso/tema2/img6.svg', alt='', style='width: 340px').m-auto
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img9.png', alt='', style="width: 480px").m-auto
    p.mb-4(data-aos="fade-right") Los pasos para su preparación son:
    .row.justify-content-center(data-aos="fade-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .p-5.bg-c8.shadow-sm
          figure.mb-0
            img(src='@/assets/curso/tema1/img5.svg', alt='', style="width: 115px").m-auto
          p.text-center.mb-0 Mezclar todos los ingredientes.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .p-5.bg-c8.shadow-sm
          figure.mb-3
            img(src='@/assets/curso/tema1/img6.svg', alt='', style="width: 100px").m-auto
          p.text-center.mb-0 Refrigerar antes de servir.
      .col-sm-6.col-lg-4
        .p-5.bg-c8.shadow-sm
          figure.mb-3
            img(src='@/assets/curso/tema1/img7.svg', alt='', style="width: 100px").m-auto
          p.text-center.mb-0 Servir frío acompañado de carnes o pescados.

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
