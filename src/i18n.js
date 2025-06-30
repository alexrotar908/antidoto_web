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
