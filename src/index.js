import { refs } from './js/constants'
import { 
    onCityChangerClick,
    onCityChangerOverlayCloseBtn,
    onCloseOverlayEscBtn,
    onSearchFormSubmit,
    onSeasonThemeFormSubmit,
    onBurgerOpenBtn,
    onBurgerCloseBtn,
    onInformBtnClick,
    onLanguageSwitcherChange,
    LanguageSwitcher,
    getWeather,
    seasonThemeSwitcher
} from './js/tools';
// import { } from './js/tools/onFormsSubmit';
// import {  } from './js/tools/burgerMenuFunc';
// import {  } from './js/tools/onFooterInformBtnClick';
// import { } from './js/tools/onLanguageSwitcherChange'
// import { } from './js/tools/getWeather';
// import {  } from './js/tools/seasonsThemeSwitcher';


async function onStart () {
    const currentLang = localStorage.getItem("userLanguage");
    const currentSeasonTheme = localStorage.getItem("userTheme");

    function setLanguage () {
        if (!currentLang) {
            localStorage.setItem("userLanguage", "ua");
            LanguageSwitcher();
        } else {
            LanguageSwitcher();
        }
    }
    
    function setTheme () {
        if (!currentSeasonTheme) {
            localStorage.setItem("userTheme", "noTheme");
            seasonThemeSwitcher();
        } else {
            seasonThemeSwitcher();
        }
    }


    setLanguage();
    setTheme();
    getWeather(); 
    console.log(refs.lenguageOtions)
};



refs.burgerMenuOpenBtnEl.addEventListener('click', onBurgerOpenBtn);
refs.burgerMenuCloseBtnEl.addEventListener('click', onBurgerCloseBtn);
refs.seasonThemeFormEl.addEventListener('submit', onSeasonThemeFormSubmit);
refs.weatherFormEl.addEventListener('submit', onSearchFormSubmit);
refs.cityChangerBtnEl.addEventListener('click', onCityChangerClick);
refs.footerInformBtn.addEventListener('click', onInformBtnClick);
refs.lenguageSwitcher.addEventListener('change', onLanguageSwitcherChange)
refs.cityChangerCloseBtnEl.addEventListener('click', onCityChangerOverlayCloseBtn)
document.addEventListener("keydown", onCloseOverlayEscBtn);



onStart()