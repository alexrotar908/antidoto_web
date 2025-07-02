import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      inicio: "Home",
      restaurante: "Restaurant",
      reservas: "Reservations",
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
      vinos: "Wines"
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
    }
  },

  es: {
    translation: {
      inicio: "Inicio",
      restaurante: "Restaurante",
      reservas: "Reservas",
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
        volver: "Desayunos & Meriendas"
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
     vinos: "Vinos"
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
