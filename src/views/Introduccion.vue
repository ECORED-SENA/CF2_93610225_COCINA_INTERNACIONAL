<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-down") La gastronomía es un reflejo de la historia, la cultura y las tradiciones de cada región. En este material, se explorarán los sabores característicos de Asia y África, dos continentes ricos en diversidad culinaria. A través de recetas emblemáticas, se busca resaltar los ingredientes, técnicas y simbolismos que hacen únicos sus platos.
    .row
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-4.bg-c1
              .row
                .col-md-auto.mb-2.mb-md-0
                  figure
                    img(src='@/assets/curso/intro/img1.svg', alt='', style="width: 100px").m-auto
                .col
                  p.mb-0 La gastronomía es un reflejo de la historia, la cultura y las tradiciones de cada región. En este material, se explorarán los sabores característicos de Asia y África, dos continentes ricos en diversidad culinaria. A través de recetas emblemáticas, se busca resaltar los ingredientes, técnicas y simbolismos que hacen únicos sus platos. 
        p.mb-0 La cocina africana nos invita a descubrir preparaciones como el cuscús, el tahine y el falafel, representativos de Marruecos y Arabia. Estos platos destacan por su uso de especias y técnicas tradicionales que han trascendido fronteras. Este recorrido permitirá al aprendiz sumergirse en la riqueza culinaria de estas regiones y valorar su influencia global.
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img1.png', alt='', style="width: 480px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
