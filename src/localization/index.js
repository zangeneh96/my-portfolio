import en_us from './en';
import fa_ir from './fa';

/* get language site  from your localstorage */
const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "fa";
export { lang }


/* get direction site */
const direction = {
  fa: "rtl",
  en: "ltr"
}

function getDirection() {
  return direction[lang]
}
export { getDirection }



/* get font site */
const fonts = {
  fa: "IRANSans",
  en: "sans-serif",
}

function getFont() {
  return fonts[lang]
}
export { getFont }


/* get translate site */
const translates = {
  en: en_us,
  fa: fa_ir,
}

function getTranslate() {
  return translates[lang]
}
export { getTranslate }


/* function for  chage language site  */
function changeLanguage(newLang) {
  if (newLang === lang) {
    return
  }
  localStorage.setItem('lang', newLang);
  window.location.reload();
}

export { changeLanguage }