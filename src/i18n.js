import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      inicio: "Home",
      restaurantes: "Restaurant",
      reservas_1: "Reservations",
      sobreNosotros: "About Us",
      admin: "Admin",
      idioma: "Language",
      espanol: "Spanish",
      ingles: "English",
      footerLeft: "© {{year}} Antídoto · Madrid",
      footerRight: "Website created by <0>Ai Creations Lex</0>",
       home: {
        welcome: "Welcome to Antidoto",
        subtitle: "The flavor of Madrid in every sip and bite",
        restaurantButton: "Restaurant",
      },
      restaurante: {
        title: "Restaurant",
        desayuno: "Breakfasts and Snacks",
        menuDia: "Menu of the Day",
        comidas: "Meals",
        tostasBocadillos: "Toast and Sandwiches",
        bebidas: "Drinks",
        volver: "Back to Restaurant",
        momentoTitulo: "Antídoto Moment",
        momentoTexto: "From a delicious breakfast to a dinner tailored to your taste, at ANTÍDOTO we have something for everyone. Enjoy top quality in a pleasant atmosphere!"
      }, 

      desayunos: {
        title: "Breakfast & Snacks",
        cafe: "Coffees",
        dulces_salados: "Sweet and Savory",
        merienda: "Snacks",
        volver: "Breakfasts & Snacks",
        momentoTitulo: "Antidoto Moment",
        momentoTexto: "At ANTÍDOTO, we start the day with you. From aromatic coffee for early risers to sweet and savory treats and snacks to share in good company. Every bite is crafted to offer you quality, flavor, and a comforting experience in a cozy setting. Whether it’s a quick breakfast or a relaxing afternoon break, you’ll always find the perfect moment to enjoy in our space."
      },

      cafe: {
      title: "COFFEES",
      description: "We work with organic coffee, grown in mountainous areas with an ideal climate and nutrient-rich soils. We select coffee to enjoy a delicious drink while supporting practices that represent the Earth and its inhabitants.",
      specials: "SPECIAL COFFEES"
    },

    dulces_salados: {
        title: "Sweet & Savory",
        dulces: "Sweet",
        salados: "Savory",
      },
    
    merienda: {
      title: "Snacks",
      description: "Our snacks served with special coffee, soda or fresh juice",
    },  
    
    comidas: {
      entrantes: "Starters",
      sartenes: "Pans & Spoon",
      ensaladas: "Salads",
      pescados: "Fish & Seafood",
      carnes: "Meat",
      arroces: "Rice Dishes",
      arrocesNota: "Minimum 2 people, by request",
      pecar: "Sinfully Good"
    },

    tostas_bocadillos:{
      tostas: "Toasts",
      bocadillos: "Sandwiches",
    },

    vino: {
      title: "Wine Menu",
      burbujas: "Sparkling Wines & The Pleasure of Sharing",
      blanco: "A White to Accompany",
      rosado: "Rosé, the Great Unknown",
     faena: "Let's Get to Work"
    },
    bebidas: {
      title: "Drinks",
      vinos: "Wines",
      refrescps: "Soft Drinks",
      cervezas: "Beers",
     },


     about: {
  title: "About Us",
  history: "History",
  historyText: "Antídoto was born in the heart of Madrid in the Concepción neighborhood.",
  philosophy: "Philosophy",
  philosophyText: "We believe in the power of good food, great service, and spaces that invite you to stay. Antídoto is not just a place to eat or drink, it's a meeting point to enjoy, share, and unwind.",
  founders: "Founders",
  founderText: "Founder: Cristina Tatu Maties",
  visitUs: "Come visit us",
  quote: "“They say wine is the only art you can drink.”",
  visitText1: "You're nearby, come visit us at Calle Baeza 11 in Chamartín.",
  visitText2: "Everyone is different, and we are here to ensure your family gatherings or amazing get-togethers with friends are special.",
  visitText3: "Cold beer, a great wine selection, and traditional dishes with exquisite flavor will make your moments unforgettable...",
  hours: "Hours",
  weekdays: "Monday to Friday",
  saturday: "Saturday",
  sunday: "Sunday",
  contact: "Contact",
  reservations: "Reservations",
  phone: "Phone",
  location: "Location",
  reportTitle: 'REPORT "ANTÍDOTO BAR RESTAURANTE" \nJavier Hernández',
  reportLink: "View the report in PDF",
},

reservas: {
  titulo: "Reserve your table",
  confirmacion: "Thanks for your reservation! We'll contact you soon.",
  nombre: "Name",
  telefono: "Phone number",
  email: "Email address",
  personas: "People",
  seleccionaHora: "Select a time",
  comentarios: "Special requests (optional)",
  aceptaTerminos: "I have read and accept the",
  terminos: "terms and conditions",
  consienteDatos: "I consent to the",
  tratamientoDatos: "processing of my personal data",
  boton: "Book",
  errorTelefono: "Please enter a valid Spanish phone number.",
  errorEmail: "Please enter a valid email address.",
  errorTerminos: "You must accept the terms and conditions to proceed.",
  errorDatos: "You must consent to data processing to proceed."
},

consent: {
  titulo: "Basic Information on Personal Data Protection",
  intro: "In compliance with the General Data Protection Regulation, the following is informed to the user:",
  responsableTitulo: "DATA CONTROLLER",
  identidad: "Name",
  direccion: "Address",
  nie: "ID",
  email: "Email",
  web: "Website",
  finalidadTitulo: "PURPOSE OF DATA PROCESSING",
  finalidad1: "Data will be used for booking management, service provision, and commercial communication. Also to avoid duplicates with restaurants sharing booking software.",
  finalidad2: "Data will be kept until deletion is requested or no longer necessary.",
  legitimacion: "LEGAL BASIS",
  legit1: "Explicit and informed consent",
  legit2: "Contract execution or precontractual measures",
  legit3: "Legitimate interest",
  legit4: "Legal compliance",
  derechosTitulo: "RIGHTS",
  derecho1: "Access",
  derecho1desc: "know if data is being processed",
  derecho2: "Rectification",
  derecho2desc: "correct inaccurate data",
  derecho3: "Opposition",
  derecho3desc: "stop data processing",
  derecho4: "Erasure",
  derecho4desc: "delete your data",
  derecho5: "Restriction",
  derecho5desc: "limit modification or deletion",
  derecho6: "Portability",
  derecho6desc: "receive data in a clear format",
  comoEjercer: "How to exercise these rights?",
  contacto: "Write to Calle de Baeza, 11, Chamartín, 28002 Madrid or email: antidoto_bar_restaurante11@antidotobarrestaurante.com",
  reclamacion: "Or file a claim with the Spanish Data Protection Agency:"
},

terminos: {
  cancelacionTitulo: "CANCELLATION POLICY",
  p1: "Once you make a reservation through the web engine, you will receive a confirmation email with all necessary details.",
  p2: "If you want to modify the date or number of guests, please call the restaurant in advance to check availability.",
  p3: "You will receive a message or email days before to reconfirm or cancel your booking.",
  p4: "Your reservation is only fully confirmed once reconfirmed through those means.",
  p5: "If you prefer, you can confirm by calling the restaurant before your reservation date.",
  p6: "If guests do not show up, there is no prior notice, or they fail to cancel within a minimum number of hours before the scheduled time, a charge per person may apply if a cancellation policy is in place.",
  leEsperamos: "We look forward to welcoming you.",

  avisoLegalTitulo: "LEGAL NOTICE",
  legal1: "In compliance with REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT, we inform you that to manage your reservation and send commercial info, personal data processing is required.",
  legal2: "You may exercise your legal rights by sending a signed letter with ID to the restaurant or via email."
},

menuDia: {
  titulo: "DAILY MENU",
  disponible: "(Available Monday to Friday – Weekdays)",
  primero: "Starter",
  segundo: "Main",
  postre: "Dessert",
  aElegir: "Choose one",
  incluye: "Includes bread, drink, and coffee or tea",
  precio: "Price: €{{precio}} VAT included",
  volver: "Back to Restaurant",
  cargando: "Loading menu...",
  error: "Daily menu not found."
},




    }
  },

  es: {
    translation: {
      inicio: "Inicio",
      restaurantes: "Restaurante",
      reservas_1: "Reservas",
      sobreNosotros: "Sobre Nosotros",
      admin: "Admin",
      idioma: "Idioma",
      espanol: "Español",
      ingles: "Inglés",
      footerLeft: "© {{year}} Antídoto · Madrid",
      footerRight: "Sitio web realizado por <0>Ai Creations Lex</0>",
      home: {
        welcome: "Bienvenidos a Antidoto",
        subtitle: "El sabor de Madrid en cada sorbo y bocado",
        restaurantButton: "Restaurante",
      },
         restaurante: {
        title: "Restaurante",
        desayuno: "Desayunos y meriendas",
        menuDia: "Menú del día",
        comidas: "Comidas",
        tostasBocadillos: "Tostas y Bocadillos",
        bebidas: "Bebidas",
        volver: "Volver a Restaurante",
        momentoTitulo: "Momento Antídoto",
        momentoTexto: "Desde un delicioso desayuno hasta una cena adaptada a tus gustos, en ANTÍDOTO tenemos algo para todos. ¡Disfruta de la mejor calidad en un ambiente agradable!",
      },

       desayunos: {
        title: "Desayunos & Meriendas",
        cafe: "Cafés",
        dulces_salados: "Dulces y salados",
        merienda: "Meriendas",
        volver: "Desayunos & Meriendas",
        momentoTitulo: "Momento Antídoto",
        momentoTexto: "En ANTÍDOTO comenzamos el día contigo. Desde un café aromático para los más madrugadores hasta dulces, salados y meriendas para compartir en buena compañía. Cada bocado está pensado para ofrecerte calidad, sabor y una experiencia reconfortante en un entorno acogedor. Ya sea un desayuno rápido o una pausa tranquila por la tarde, siempre encontrarás el momento perfecto para disfrutar en nuestro espacio."
      },
       cafe: {
      title: "CAFÉS",
      description: "Trabajamos con café ecológico, cultivado en zonas montañosas con un clima ideal y con suelos ricos en nutrientes. Elegimos un café para disfrutar de una bebida deliciosa apoyando a la vez prácticas que representan La Tierra y sus habitantes.",
      specials: "CAFÉS ESPECIALES"
    },

    dulces_salados: {
        title: "Dulces y Salados",
        dulces: "Dulces",
        salados: "Salados",
      },

       merienda: {
      title: "Meriendas",
      description: "Nuestras meriendas acompañadas de cafés especiales, refresco o zumo natural",
    },

    comidas: {
      entrantes: "Entrantes",
      sartenes: "Sartenes y Cuchara",
      ensaladas: "Ensaladas",
      pescados: "Pescados y Mariscos",
      carnes: "Carnes",
      arroces: "Arroces",
      arrocesNota: "Por encargo mín 2 personas",
      pecar: "Pecar es bueno"
    },

    tostas_bocadillos:{
      tostas: "Tostas",
      bocadillos: "Bocadillos",
    }, 
    
    vino: {
      title: "Carta de vinos",
      burbujas: "Las burbujas & el placer de compartir",
      blanco: "Un blanco para acompañar",
      rosado: "Rosado el gran desconocido",
      faena: "Nos metemos en faena"
    },


    bebidas: {
     title: "Bebidas",
     vinos: "Vinos",
     refrescos:"Refrescos",
     cervezas:"Cervezas",
    },

    about: {
  title: "Sobre Nosotros",
  history: "Historia",
  historyText: "Antídoto nació en el corazón de Madrid en el barrio de la concepción.",
  philosophy: "Filosofía",
  philosophyText: "Creemos en el poder de la buena comida, el buen trato y los espacios que invitan a quedarse. Antídoto no es solo un lugar para comer o tomar algo, es un punto de encuentro para disfrutar, compartir y desconectar.",
  founders: "Fundadores",
  founderText: "Fundador: Cristina Tatu Maties",
  visitUs: "Ven a conocernos",
  quote: "“Dicen que el vino es el único arte que se puede beber”.",
  visitText1: "Estás cerca, ven a conocernos, estamos en la calle Baeza 11 en Chamartín.",
  visitText2: "Cada persona es un mundo, nosotros te acompañamos para que tus reuniones familiares o las magníficas quedadas de amigos sean especiales.",
  visitText3: "La cerveza fría, la variedad de vinos y los platos tradicionales con un sabor exquisito harán que los momentos sean únicos...",
  hours: "Horario",
  weekdays: "Lunes a Viernes",
  saturday: "Sábado",
  sunday: "Domingo",
  contact: "Contacto",
  reservations: "Reservas",
  phone: "Teléfono",
  location: "Ubicación",
  reportTitle: 'REPORTAJE "ANTÍDOTO BAR RESTAURANTE" \nJavier Hernández',
  reportLink: "Ver el reportaje en PDF",
},

reservas: {
  titulos: "Reserva tu mesa",
  confirmacion: "¡Gracias por reservar! Te contactaremos pronto.",
  nombre: "Nombre",
  telefono: "Teléfono",
  email: "Correo electrónico",
  personas: "Personas",
  seleccionaHora: "Selecciona una hora",
  comentarios: "Comentarios especiales (opcional)",
  aceptaTerminos: "He leído y acepto los",
  terminos: "términos y condiciones",
  consienteDatos: "Consiento el",
  tratamientoDatos: "tratamiento de mis datos personales",
  boton: "Reservar",
  errorTelefono: "Por favor, introduce un número de teléfono español válido.",
  errorEmail: "Por favor, introduce un correo electrónico válido.",
  errorTerminos: "Debe aceptar los términos y condiciones para continuar.",
  errorDatos: "Debe consentir el tratamiento de datos personales para continuar."
},

consent: {
  titulo: "Información básica sobre Protección de datos de carácter personal",
  intro: "En cumplimiento del Reglamento General de Protección de Datos de Carácter Personal, se informa al interesado de lo siguiente:",
  responsableTitulo: "RESPONSABLE DEL TRATAMIENTO",
  identidad: "Identidad",
  direccion: "Dirección postal",
  nie: "NIE",
  email: "Correo electrónico",
  web: "Página web",
  finalidadTitulo: "FINALIDAD DEL TRATAMIENTO",
  finalidad1: "Se tratarán los datos para la gestión de la reserva, la prestación del servicio y prospección comercial, así como para evitar duplicidades con otros restaurantes.",
  finalidad2: "Los datos se conservarán mientras no se solicite su supresión o dejen de ajustarse a la finalidad para la que fueron recabados.",
  legitimacion: "LEGITIMACIÓN",
  legit1: "Consentimiento inequívoco y expreso",
  legit2: "Ejecución de un contrato o medidas precontractuales",
  legit3: "Interés legítimo",
  legit4: "Seguimiento de obligaciones legales",
  derechosTitulo: "DERECHOS",
  derecho1: "Acceso",
  derecho1desc: "saber si se tratan sus datos",
  derecho2: "Rectificación",
  derecho2desc: "modificar datos inexactos",
  derecho3: "Oposición",
  derecho3desc: "dejar de tratarlos",
  derecho4: "Supresión",
  derecho4desc: "eliminarlos",
  derecho5: "Limitación",
  derecho5desc: "evitar su modificación o supresión",
  derecho6: "Portabilidad",
  derecho6desc: "obtenerlos en formato estructurado",
  comoEjercer: "¿Cómo ejercer sus derechos?",
  contacto: "Por escrito a Calle de Baeza, 11, Chamartín, 28002 Madrid, o por email a antidoto_bar_restaurante11@antidotobarrestaurante.com",
  reclamacion: "También puede presentar una reclamación ante la AEPD:"
},

terminos: {
  cancelacionTitulo: "POLÍTICA DE CANCELACIÓN",
  p1: "Una vez hecha la reserva a través del motor web recibirá un correo electrónico confirmando la validez de la misma con toda la información correspondiente.",
  p2: "Si desea modificar la fecha de reserva o el número de comensales, su petición será atendida siempre y cuando se realice con una antelación mínima de la hora concertada, y si existen plazas disponibles. Puede llevar a cabo el trámite llamando al teléfono del restaurante.",
  p3: "Le comunicamos que días antes de la fecha y hora reservada, recibirá un mail o SMS donde deberá reconfirmar o cancelar la reserva en los enlaces que están habilitados para tal efecto, si existieran.",
  p4: "Sólo una vez reconfirmada la reserva por usted desde el email o sms, tendrá su reserva completamente confirmada.",
  p5: "Si lo prefiere puede llevar a cabo la confirmación llamando al teléfono del restaurante antes de la fecha de reserva.",
  p6: "En caso que los comensales no se presentaran, no existiera aviso alguno por su parte o no cancelen con un mínimo de horas de antelación a la hora reservada, se procedería a cobrar el importe correspondiente por persona, en caso de que la reserva llevara una política de cancelación asociada.",
  leEsperamos: "Le esperamos.",

  avisoLegalTitulo: "AVISO LEGAL",
  legal1: "En cumplimiento del REGLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO Y DEL CONSEJO de 27 de abril de 2016 sobre protección de datos personales, le informamos que con el fin de gestionar su reserva y remitirle información comercial, se requiere su consentimiento para el tratamiento de datos personales.",
  legal2: "Podrá ejercer sus derechos de acceso, rectificación, cancelación, oposición, portabilidad y olvido enviando un escrito con copia de su DNI al restaurante o por correo electrónico."
},

menuDia: {
  titulo: "MENÚ DEL DÍA",
  disponible: "(Disponible de lunes a viernes – Laborables)",
  primero: "Primero",
  segundo: "Segundo",
  postre: "Postre",
  aElegir: "A elegir",
  incluye: "Incluye pan, bebida y café o infusión",
  precio: "Precio: {{precio}} € IVA incluido",
  volver: "Volver a Restaurante",
  cargando: "Cargando menú...",
  error: "No se encontró el menú del día."
}




   }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
  });

export default i18n;
