
const translations = {
  en: {
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
    brand_title: "About the Brand",
    brand_text: "Studio DeLuz is a European art label creating emotionally resonant neuroabstract designs for wearable culture. Our mission is to make bold, expressive statements through fashion-forward backpacks, posters, and shirts."
  },
  pl: {
    about: "O nas",
    gallery: "Galeria",
    contact: "Kontakt",
    brand_title: "O marce",
    brand_text: "Studio DeLuz to europejska marka artystyczna, tworząca neuroabstrakcyjne projekty dla noszonej kultury. Naszą misją jest tworzenie wyrazistych, emocjonalnych projektów na plecakach, plakatach i koszulkach."
  },
  ua: {
    about: "Про нас",
    gallery: "Галерея",
    contact: "Контакт",
    brand_title: "Про бренд",
    brand_text: "Studio DeLuz — європейський арт-лейбл, що створює нейроабстрактні дизайни для носимої культури. Наша місія — робити емоційно резонансні заяви через рюкзаки, постери та футболки."
  }
};

function setLang(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    el.textContent = translations[lang][key];
  });
}
