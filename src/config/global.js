export default {
  global: {
    Name: 'Negociación y acuerdos comerciales campesinos',
    Description:
      'Este componente formativo fortalece las capacidades del campesinado para negociar de forma justa, suscribir acuerdos comerciales, conocer políticas que inciden en la comercialización rural y acceder a nuevos mercados. Promueve la organización comunitaria y las alianzas estratégicas, con el fin de garantizar precios justos, autonomía en la producción y sostenibilidad económica para las familias del campo.',
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Principios de negociación campesina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es negociar en el contexto campesino?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios claves de la negociación campesina',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ejercicio ',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Políticas comerciales en mercados locales campesinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              '¿Qué son las políticas comerciales en el contexto campesino?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Tipos de políticas comerciales que impactan al productor rural',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Participación del campesinado en estas políticas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Obstáculos comunes que enfrentan los productores',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas para suscripción de acuerdos comerciales campesinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Qué es un acuerdo comercial campesino?',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              '¿Qué tipos de acuerdos comerciales se usan en el contexto campesino?',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Pasos para elaborar un acuerdo comercial campesino (aplicable a cualquier nivel) ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acceso a mercados nacionales e internacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '¿Qué es “acceder a nuevos mercados”?',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Mercados nacionales accesibles para el campesinado',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: '¿Y cómo es eso de exportar como campesino?',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estrategias para prepararse como productor campesino',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fortalecimiento organizativo y alianzas estratégicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: '¿Qué es el fortalecimiento organizativo campesino?',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: '¿Qué son las alianzas estratégicas campesinas?',
            hash: 't_5_2',
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
      tema: 'Principios de negociación campesina',
      referencia:
        'ONU Colombia- (2021). Circuitos cortos de Comercialización de la Agricultura Campesina, Familiar y Comunitaria [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=LKxBNCv5xqQ&t=432s&ab_channel=ONUColombia ',
    },
    {
      tema: 'Políticas comerciales y casos de éxito',
      referencia:
        ' LINKATA CANAL (2021). Conferencia: Agricultura por contrato: políticas de comercialización y casos de éxito. [Video]. YouTube.',
      tipo: 'Video ',
      link:
        'https://www.youtube.com/watch?v=ddJSAi6-LXY&ab_channel=LINKATACANAL ',
    },
    {
      tema: 'Técnicas para suscripción de acuerdos comerciales campesinos',
      referencia:
        'Corporacion Colombia Internacional CCI (2021). Webinar #2 ¿Cómo llegar a acuerdos comerciales exitosos? Programa Es Campesino Local  [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=nROkhNOaq5w&t=561s&ab_channel=CorporacionColombiaInternacionalCCI ',
    },
    {
      tema: 'Acceso a mercados nacionales e internacionales',
      referencia:
        'Agencia de Desarrollo Rural. (2018). 6 ADR beneficiará al 74% de los productores agrícolas con sello ACFC',
      tipo: 'Página web',
      link:
        'https://www.adr.gov.co/6-adr-beneficiara-al-74-de-los-productores-agricolas-con-sello-acfc/ ',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo comercial',
      significado:
        'documento con condiciones claras de venta entre productor y comprador.',
    },
    {
      termino: 'Alianza estratégica',
      significado: 'asociación entre actores para alcanzar objetivos comunes.',
    },
    {
      termino: 'Comercialización',
      significado: 'proceso de venta o intercambio de productos en un mercado.',
    },
    {
      termino: 'Negociación',
      significado:
        'proceso de diálogo para llegar a acuerdos mutuamente beneficiosos.',
    },
    {
      termino: 'Política comercial',
      significado:
        'conjunto de reglas o decisiones que regulan las actividades de mercado.',
    },
  ],
  referencias: [
    {
      referencia: 'FAO. (2019). Guía sobre modelos inclusivos de negocio. ',
      link:
        ' https://openknowledge.fao.org/items/d4cf56dc-c433-4885-87a5-79eb439892a9',
    },
    {
      referencia:
        'Ministerio de Agricultura de Colombia. (2019). Programa Agricultura por Contrato.  ',
      link:
        'https://sioc.minagricultura.gov.co/Documentos/1.%20Documento%20de%20Pol%C3%ADtica%20Coseche%20y%20Venda%20a%20la%20Fija%202019.pdf',
    },
    {
      referencia:
        'Pérez, R. (2020). Manual de comercialización rural. Editorial AgroLíder.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
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
          nombre: 'Nombre responsable',
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
