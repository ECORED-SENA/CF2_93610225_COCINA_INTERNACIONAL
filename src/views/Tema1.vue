<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Cocina de Asia
      .row
        .col-lg-4.pe-lg-0.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema1/img1.png', alt='').m-auto
        .col-lg-8
          .row.align-items-center.h-100.bg-c1
            .col
              .p-4
                p.mb-0 La cocina asiática es reconocida por su diversidad y técnicas culinarias innovadoras, representando tradiciones milenarias que varían según las regiones. A continuación, se presentan algunos de los platos más emblemáticos de Japón y China.
      Separador
      #t_1_1
      .titulo-segundo.color-acento-contenido.mb-0
        h2 1.1 Japón
      .row.bg-c2.mb-4
        .col-12
          .px-5
            .row.mb-4.mt-5
              .col-lg-7.order-2.order-lg-1
                p La gastronomía japonesa destaca por su delicadeza, minimalismo y el uso de ingredientes frescos. Algunos de sus platillos más conocidos incluyen:
                .row.mb-2.ms-0
                  .col-auto.bg-c3(data-aos="fade-left")
                    .row.align-items-center
                      .col-auto.px-0
                        figure
                          img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                      .col
                        h3.mb-0 #[i Sushi]
                p.mb-4 El término #[i sushi] proviene del japonés: su significa arroz y shi, avinagrado. Originalmente, el #[i sushi] era un método de conservación en el que el pescado de agua dulce se envolvía en arroz cocido, el cual no se consumía. En el siglo XVI, se añadió vinagre al arroz y la preparación evolucionó hasta convertirse en el platillo emblemático que conocemos hoy.
                p #[b #[i Philadelphia Maki] para 10 personas]
                p El #[i Philadelphia Maki] es un tipo de #[i sushi] que combina la suavidad del queso crema con la frescura del salmón y el aguacate. Esta receta está diseñada para preparar aproximadamente 10 porciones.
                p Los ingredientes son:
              .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 400px").m-auto
            .row
              .col-lg-6
                .row
                  .col-12.bg-c4
                    .p-4
                      p.text-center.mb-0 #[b Para el arroz]
                  .col-12.bg-white
                    .p-4
                      ul.lista-ul--color
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Arroz #[i gohan] (especial para sushi): 453,592 g.
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Vinagre blanco: 100 ml.
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Agua: 250 ml.
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Azúcar: 50 g.
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Sal: 3 g.
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Alga #[i kombu]: 20 g.
              .col-lg-6
                .row
                  .col-12.bg-c4
                    .p-4
                      p.text-center.mb-0 #[b Para el relleno]
                  .col-12.bg-white.bg-c5
                    .p-4
                      ul.lista-ul--color
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Salmón fresco: 200 g.
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Aguacate: 200 g.
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Pepino: 100 g.
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Queso crema: 350 g.
                        li.d-flex
                          i.fas.fa-brain.txt--green
                          |
                          p.mb-0 Alga #[i nori]: 10 hojas.
      p.mb-4 Los pasos para su preparación son:
      .row.justify-content-center.mb-5
        .col-lg-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/3KDDv2LrIcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.mb-5
        .col-12.bg-c6
          .row.justify-content-center
            .col-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 300px').m-auto
            .col-lg-7
              .row.align-items-center.h-100
                .col-12
                  .p-2.p-xl-4
                    p #[b Consejo]
                    p.mb-0 Para un acabado más profesional, cubrir el rollo con una fina lámina de salmón ahumado antes de cortar. Esto añade un toque visual y realza el sabor.
      .row.mb-2.ms-0
        .col-auto.bg-c3(data-aos="fade-left")
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
            .col
              h3.mb-0 #[i Sashimi]
      p El #[i sashimi] es una preparación sencilla pero sofisticada que realza la frescura y calidad del pescado. No lleva arroz y se presenta como cortes finos de pescado crudo, acompañados de salsa de soya y #[i wasabi] hidratado.
      .row.mb-5
        .col-12
          .p-4.bg-c7
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p #[b Los pasos para su preparación son:]
                ol.lista-ol--cuadro.ms-3
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 1
                    |
                    p.mb-0 Lavar y secar el filete de salmón.
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 2
                    |
                    p.mb-0 Retirar la piel y la grasa visible, dejando únicamente la carne magra.
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 3
                    |
                    p.mb-0 Cortar el filete en tiras o cubos de aproximadamente 8 a 10 cm de ancho, siempre en dirección perpendicular al músculo.
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 4
                    |
                    p.mb-0 Disponer las piezas en un plato blanco para destacar su color.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema1/img4.png', alt='', style="width: 430px").m-auto
      .row.mb-2.ms-0
        .col-auto.bg-c3(data-aos="fade-left")
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
            .col
              h3.mb-0 #[i Teriyaki]
      p La palabra #[i teriyaki] combina los términos japoneses #[i teri] (brillo) y #[i yaki] (cocción asada). Esta técnica da como resultado un glaseado brillante y sabroso que se utiliza para carnes, pescados o vegetales.
      .row.bg-c9.mb-5
        .col-12
          .px-5
            .row.mb-4
              .col-lg-7.order-2.order-lg-1
                .row
                  .col-12.align-items-center.h-100
                    .p-4.bg-c1
                      p #[b Los pasos para su preparación son:]
                      ol.lista-ol--cuadro.ms-3
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 1
                          |
                          p.mb-0 Salsa soya: 300 ml.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 2
                          |
                          p.mb-0 Azúcar: 100 ml.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 3
                          |
                          p.mb-0 Vinagre blanco: 80 ml.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 4
                          |
                          p.mb-0 Agua: 50 ml.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 5
                          |
                          p.mb-0 Fécula de maíz: 10 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 6
                          |
                          p.mb-0 Ajonjolí: 2 g.
              .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img6.png', alt='', style="width: 460px").m-auto
            .row.justify-content-center
              .col-sm-6.col-lg-4.mb-4.mb-lg-0
                .p-5.bg-c8.shadow-sm
                  figure.mb-3
                    img(src='@/assets/curso/tema1/img5.svg', alt='', style="width: 100px").m-auto
                  p.text-center.mb-0 Tostar el ajonjolí
              .col-sm-6.col-lg-4.mb-4.mb-lg-0
                .p-5.bg-c8.shadow-sm
                  figure.mb-3
                    img(src='@/assets/curso/tema1/img6.svg', alt='', style="width: 100px").m-auto
                  p.text-center.mb-0 Mezclar la salsa soya, azúcar y vinagre en una sartén.
              .col-sm-6.col-lg-4.mb-4.mb-lg-0
                .p-5.bg-c8.shadow-sm
                  figure.mb-3
                    img(src='@/assets/curso/tema1/img7.svg', alt='', style="width: 100px").m-auto
                  p.text-center.mb-0 Agregar la fécula disuelta en agua y cocinar hasta espesar.
      .row.mb-2.ms-0
        .col-auto.bg-c3(data-aos="fade-left")
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
            .col
              h3.mb-0 #[i Tempura]
      p Aunque su origen es debatido entre Europa y Japón, el #[i tempura] es una técnica de fritura ligera que resalta los sabores originales de los ingredientes.
      .row.align-items-center
        .col-lg-5.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img7.png', alt='', style="width: 480px").m-auto
        .col-lg-7
          .row
            .col-12.align-items-center.h-100
              .p-4.bg-c1
                .row.align-items-center.mb-3
                  .col-md-7
                    p #[b Los pasos para su preparación son:]
                    ol.lista-ol--cuadro.ms-3
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 1
                        |
                        p.mb-0 Agua helada: 200 ml.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 2
                        |
                        p.mb-0 Harina de trigo: 200 g.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 3
                        |
                        p.mb-0 Fécula de maíz: 50 g.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 4
                        |
                        p.mb-0 Sal: 2 g.
                      li.d-flex
                        .lista-ol--cuadro__vineta.v--green
                          span 5
                        |
                        p.mb-0 Agua con gas: 100 ml.
                  .col-5.d-none.d-md-block
                    figure
                      img(src='@/assets/curso/tema1/img8.svg', alt='', style="width: 300px").m-auto
                p #[b Los pasos para su preparación son:]
                ol.lista-ol--cuadro.ms-3
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 1
                    |
                    p.mb-0 Mezclar los ingredientes hasta obtener una mezcla homogénea.
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 2
                    |
                    p.mb-0 Sumergir alimentos como camarones o vegetales y freír a 180 °C hasta dorar.
      Separador
      #t_1_2
      .titulo-segundo.color-acento-contenido.mb-0
        h2 1.2 China
      .row.bg-c11.mb-4
        .col-12
          .px-5
            .row.my-5
              .col-lg-4.pe-lg-0.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/img9.png', alt='').m-auto
              .col-lg-8
                .row.align-items-center.h-100.bg-c10
                  .col
                    .p-4
                      p.mb-0 La cocina china es una de las más diversas y antiguas del mundo, famosa por su equilibrio entre sabores, colores y texturas. Entre sus platos más populares están:
            .row.align-items-center.mb-4
              .col-lg-7.order-2.order-lg-1
                .row.mb-2.ms-0
                  .col-auto.bg-c3(data-aos="fade-left")
                    .row.align-items-center
                      .col-auto.px-0
                        figure
                          img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                      .col
                        h3.mb-0 #[i Dim Sum]
                p.mb-4 El #[i dim sum] es una preparación tradicional china servida usualmente en la mañana junto con té. Consiste en pequeños rollos de masa de trigo o arroz rellenos de carne, camarones o vegetales, cocinados al vapor o fritos.
                .row.mb-2.ms-0
                  .col-auto.bg-c3(data-aos="fade-left")
                    .row.align-items-center
                      .col-auto.px-0
                        figure
                          img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                      .col
                        h3.mb-0 #[i Chow Mein]
                p.mb-0 Este plato de fideos salteados combina ingredientes frescos con una mezcla de salsas que le otorgan un sabor único.
              .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img10.png', alt='', style="width: 480px").m-auto
            .row
              .col-12
                .p-4.bg-c7
                  .row
                    .col-lg-5
                      p #[b Los ingredientes para 5 personas son:]
                      ol.lista-ol--cuadro.ms-3
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 1
                          |
                          p.mb-0 Fideos chinos: 500 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 2
                          |
                          p.mb-0 Pechuga de pollo: 500 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 3
                          |
                          p.mb-0 Raíces chinas: 40 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 4
                          |
                          p.mb-0 Apio: 80 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 5
                          |
                          p.mb-0 Champiñones: 80 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 6
                          |
                          p.mb-0 Pimentón rojo: 80 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 7
                          |
                          p.mb-0 Cebolla cabezona: 50 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 8
                          |
                          p.mb-0 Salsa soya: 50 ml.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 9
                          |
                          p.mb-0 Salsa de ostras: 10 ml.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 10
                          |
                          p.mb-0 Pimienta negra: 1 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 11
                          |
                          p.mb-0 Sal: 3 g.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 12
                          |
                          p.mb-0 Fécula de maíz: 15 g.
                    .col-lg-7
                      p #[b Los pasos para su preparación son:]
                      ol.lista-ol--cuadro.ms-3.mb-4
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 1
                          |
                          p.mb-0 Cocinar los fideos en agua con sal y reservar.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 2
                          |
                          p.mb-0 Cortar los vegetales en cubos pequeños (#[i paysanne]).
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 3
                          |
                          p.mb-0 Deshuesar la pechuga, cortar en tiras y marinar con salsa soya, ostras, sal y pimienta.
                        li.d-flex
                          .lista-ol--cuadro__vineta.v--green
                            span 4
                          |
                          p.mb-0 Saltear el pollo en un wok, agregar los vegetales, los fideos y la mezcla restante de salsas con fécula disuelta.
                      figure
                        img(src='@/assets/curso/tema1/img9.svg', alt='', style="width: 480px").m-auto
      .row.mb-2.ms-0
        .col-auto.bg-c3(data-aos="fade-left")
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
            .col
              h3.mb-0 #[i Chop Suey]
      .row.mb-5
        .col-lg-4.pe-lg-0.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema1/img11.png', alt='').m-auto
        .col-lg-8
          .row.align-items-center.h-100.bg-c1
            .col
              .p-4
                p.mb-0 El chop suey combina trozos de pollo o cerdo cortados en cubos grandes, salteados en un wok con vegetales como jengibre, zucchini, cebolla, zanahoria, raíces chinas, champiñones y apio. Se realza con salsa soya y pasta de ajo.
      .row.mb-2.ms-0
        .col-auto.bg-c3(data-aos="fade-left")
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
            .col
              h3.mb-0 Pato Laqueado
      .row
        .col-lg-7.order-2.order-lg-1
          p Este plato de fideos salteados combina ingredientes frescos con una mezcla de salsas que le otorgan un sabor único.
          .row
            .col-12
              .p-4.bg-c12
                p #[b Los pasos para su preparación son:]
                ol.lista-ol--cuadro.ms-3
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 1
                    |
                    p.mb-0 Desprender la piel del pato entero cuidadosamente para lograr una textura crujiente.
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 2
                    |
                    p.mb-0 Marinar con anís estrella, ajo, jengibre y salsa soya.
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 3
                    |
                    p.mb-0 Barnizar el pato con la marinada, sazonar con pimienta negra y refrigerar durante 24 horas.
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 4
                    |
                    p.mb-0 Repetir el barnizado antes de hornear a 150 °C por 3 horas.
                  li.d-flex
                    .lista-ol--cuadro__vineta.v--green
                      span 5
                    |
                    p.mb-0 Deshuesar y servir con pan blanco o tortillas de trigo, acompañadas de cebollín.
        .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img12.png', alt='', style="width: 480px").m-auto

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
