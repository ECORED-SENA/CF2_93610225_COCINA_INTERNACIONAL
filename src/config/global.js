export default {
  global: {
    Name: 'Cocina de Asia y África',
    Description:
      'El componente formativo aborda la cocina asiática y africana, destacando platos tradicionales de Japón, China, Marruecos y Arabia, como <i>sushi</i>, <i>dim sum</i>, <i>cuscús</i>, y <i>falafel</i>. Incluye recetas detalladas, ingredientes y procedimientos. Además, proporciona un glosario de términos culinarios y una bibliografía. Es una guía para explorar sabores representativos de ambas culturas gastronómicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cocina de Asia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Japón',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'China',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cocina de África',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Marruecos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Arabia',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Japón',
      referencia:
        'Cocina Japonesa con Yuta (2021). <i>Fui a aprender cómo preparar Sushi auténtico, El secreto para preparar | Cocina Japonesa Con Yuta</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DesCzTM1Bkg',
    },
    {
      tema: 'China',
      referencia:
        'Arecetas. (s.f.). <i>Vídeos de recetas de comida china y asiática</i> [Video].',
      tipo: 'Página web',
      link: 'https://www.arecetas.com',
    },
    {
      tema: 'Marruecos',
      referencia:
        'Comida de Marruecos con Hakima. (2015, 10 de enero). <i>Platos tradicionales de Marruecos</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/user/ComidaDeMarruecos',
    },
    {
      tema: 'Arabia',
      referencia:
        '¡Que Viva La Cocina!. (2021). <i>falafel de garbanzos - La receta arabe más deseada por los veganos</i>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZPkjghdBhB4',
    },
  ],
  glosario: [
    {
      termino: '<i>Cuscús</i>',
      significado:
        'sémola de trigo cocida y servida con carnes o vegetales, típica del norte de áfrica.',
    },
    {
      termino: '<i>Dim sum</i>',
      significado:
        'pequeños bocados de masa rellenos, cocidos al vapor o fritos, típicos de la cocina china.',
    },
    {
      termino: '<i>Falafel</i>',
      significado:
        'croqueta elaborada con garbanzos o habas, común en la gastronomía árabe.',
    },
    {
      termino: '<i>Kebab</i>',
      significado:
        'carne marinada ensartada en brochetas y cocida a la parrilla, típica de oriente medio.',
    },
    {
      termino: '<i>Sashimi</i>',
      significado:
        'filetes finos de pescado crudo servidos con salsa de soya y <i>wasabi</i>.',
    },
    {
      termino: '<i>Sushi</i>',
      significado:
        'preparación japonesa a base de arroz avinagrado, pescado y otros ingredientes.',
    },
    {
      termino: '<i>Tabule</i>',
      significado:
        'ensalada árabe con sémola de trigo, tomate, perejil, limón y aceite de oliva.',
    },
    {
      termino: '<i>Tempura</i>',
      significado:
        'técnica de fritura japonesa que utiliza una mezcla de harina y agua con gas.',
    },
    {
      termino: '<i>Teriyaki</i>',
      significado:
        'salsa japonesa elaborada con soya, azúcar y vinagre, utilizada para dar brillo y sabor.',
    },
    {
      termino: '<i>Zaalouk</i>',
      significado:
        'puré de berenjenas y tomates con especias, servido frío en la cocina marroquí.',
    },
  ],
  referencias: [
    {
      referencia: 'Canal Cocina. (s.f.). <i>Barbacoa</i>.',
      link: '',
    },
    {
      referencia: 'Deville Hotels. (s.f.). <i>Feijoada</i>.',
      link: '',
    },
    {
      referencia: 'Madcaro. (s.f.). <i>Clam chowder</i>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable Línea de Producción Antioquia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
