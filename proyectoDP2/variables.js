const handlerBarsContext = {
  "/index.html": {
    "galeria": [
      {
        src: "imagen/66528763272b1.jpeg",
        alt: "Rescate urgente",
        titulo: "Rescate en emergencia",
        descripcion: "Voluntarios salvan animales en situaciones críticas durante desastres."
      },
      {
        src: "imagen/cosas-donar-refugio-animales-portada-1280x720x80xX.jpg",
        alt: "Donaciones al refugio",
        titulo: "Ayuda solidaria",
        descripcion: "Apoyando con alimentos, medicinas y amor para nuestros rescatados."
      },
      {
        src: "imagen/HLD6ZXWZHREUZNDTKITVWRREX4.jpg",
        alt: "Cachorros y gatitos",
        titulo: "Nuevas oportunidades",
        descripcion: "Animales rescatados listos para encontrar un hogar lleno de amor."
      },
      {
        src: "imagen/np_equipo_rescate000.jpg",
        alt: "Equipo de rescate",
        titulo: "Fuerza voluntaria",
        descripcion: "Nuestro equipo, el alma detrás de cada rescate exitoso."
      },
      {
        src: "imagen/rescate-animales-medicina-veterinaria-USS.jpg",
        alt: "Atención veterinaria",
        titulo: "Cuidado profesional",
        descripcion: "Veterinarios brindando atención médica urgente a los rescatados."
      },
      {
        src: "imagen/resguardo-animal-CORTESIA_opt.jpg",
        alt: "Protección animal",
        titulo: "Refugio seguro",
        descripcion: "Un espacio cálido para animales que escaparon del abandono."
      },
      {
        src: "imagen/animales-rescatados.jpg",
        alt: "Animales salvados",
        titulo: "Historias de esperanza",
        descripcion: "Cada uno de ellos, una historia de lucha y recuperación."
      },
      {
        src: "imagen/foto3-naciional.jpg",
        alt: "Curación en proceso",
        titulo: "Cicatrizando heridas",
        descripcion: "Animales reciben cuidados después de un rescate doloroso."
      },
      {
        src: "imagen/Mas-de-300-animales-rescatados-durante-incendios-en-California..jpg",
        alt: "Incendios y rescates",
        titulo: "Contra el fuego",
        descripcion: "Más de 300 animales fueron rescatados durante incendios forestales."
      },
      {
        src: "imagen/Serfor-2.jpg",
        alt: "Protección forestal",
        titulo: "Rescate en zonas verdes",
        descripcion: "Autoridades resguardan animales silvestres encontrados en peligro."
      },
      {
        src: "imagen/FKULXJ7CLFE6JJG5P6N5LEAEFI.jpg",
        alt: "Alimentación especial",
        titulo: "Un nuevo comienzo",
        descripcion: "Bebés animales reciben cuidado intensivo para sobrevivir."
      },
      {
        src: "imagen/20230724_214303846_ios_0.jpg",
        alt: "Liberación de aves",
        titulo: "Regreso al hogar",
        descripcion: "Después de su recuperación, estas aves vuelan libres otra vez."
      }
    ],
    "blog": [
      {
        titulo: "Rescate de un oso hormiguero tras incendio",
        imagen: "imagen/455454918_1212447570922996_3519918286629803771_n.jpg",
        alt: "Oso hormiguero tras incendio",
        resumen: "Animalandia colabora en el rescate de fauna silvestre afectada por incendios forestales, brindando atención veterinaria, hidratación y un entorno seguro para su recuperación.",
        contenido: "Este oso hormiguero fue salvado de un incendio forestal. La intervención rápida de los voluntarios permitió su atención médica y rehabilitación."
      },
      {
        titulo: "Voluntario salva a gatito herido en incendio",
        imagen: "imagen/diseno-sin-titulo-3_287380_20211002174253.png",
        alt: "Voluntario con gato rescatado",
        resumen: "Durante operativos de emergencia, los voluntarios de Animalandia arriesgan su seguridad para salvar animales domésticos heridos, brindándoles cuidados médicos y afecto.",
        contenido: "Durante una evacuación, un voluntario encontró a este gato herido. Gracias a su atención, el felino recibió cuidados y sobrevivió al desastre."
      },
      {
        titulo: "Animalandia responde ante incendios y fauna migrante",
        imagen: "imagen/diseno-sin-titulo-2024-01-25t140604_6571531_20240125141555.jpg",
        alt: "Incendio y animales rescatados",
        resumen: "Animalandia brinda apoyo a especies en riesgo por incendios y desplazamientos forzados, atendiendo animales migrantes heridos o huérfanos en situaciones críticas.",
        contenido: "Los incendios forestales han obligado a muchas especies a desplazarse. Animalandia colabora con organizaciones de rescate animal para brindar apoyo inmediato."
      },
      {
        titulo: "Perro rescatado entre escombros por voluntarios",
        imagen: "imagen/images (1).jpeg",
        alt: "Perro rescatado",
        resumen: "Los voluntarios de Animalandia actúan con rapidez para rescatar a mascotas atrapadas tras desastres, proporcionando atención médica, alimento y refugio temporal.",
        contenido: "Durante un operativo, voluntarios de Animalandia hallaron a este perro atrapado. Fue atendido, alimentado y puesto a salvo gracias a la labor humanitaria."
      },
      {
        titulo: "Rescate nocturno en zona afectada por incendios",
        imagen: "imagen/heriberto-1200-1000-px-1200-x-12_1732237_20240904232511.png",
        alt: "Voluntario con animal en incendio",
        resumen: "Incluso en operativos nocturnos, Animalandia actúa para salvar vidas animales. Los equipos están preparados para responder con eficacia en cualquier momento del día.",
        contenido: "En medio de la oscuridad, un voluntario encontró y salvó a este animal, demostrando que la dedicación y valentía no tienen horario."
      },
      {
        titulo: "Salvando al pangolín: un acto de humanidad",
        imagen: "imagen/FotoJet-39-1.jpg",
        alt: "Pangolín rescatado",
        resumen: "En zonas rurales y afectadas por la migración forzada, Animalandia protege a especies vulnerables como el pangolín, cuidando su integridad física y evitando el tráfico ilegal.",
        contenido: "Este pangolín fue rescatado durante un operativo. Animalandia y aliados velan por el bienestar animal, mostrando que toda vida importa."
      }
      
    ]
  }
};

const pageContext = (page) => {
  const context = { ...handlerBarsContext[page] };
  return context;
};

export default pageContext;
