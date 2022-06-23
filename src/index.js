import { refs } from './js/constants'
import { 
    onCityChangerClick,
    onCityChangerOverlayCloseBtn,
    onCloseOverlayEscBtn,
    onSearchFormSubmit,
    onSeasonThemeListClick,
    onBurgerOpenBtn,
    onBurgerCloseBtn,
    onInformBtnClick,
    onLanguageSwitcherChange,
    LanguageSwitcher,
    getWeather,
    seasonThemeSwitcher
} from './js/tools';

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
};





refs.seasonThemeListEl.addEventListener('click', onSeasonThemeListClick)
refs.burgerMenuOpenBtnEl.addEventListener('click', onBurgerOpenBtn);
refs.burgerMenuCloseBtnEl.addEventListener('click', onBurgerCloseBtn);
refs.weatherFormEl.addEventListener('submit', onSearchFormSubmit);
refs.cityChangerBtnEl.addEventListener('click', onCityChangerClick);
refs.footerInformBtn.addEventListener('click', onInformBtnClick);
refs.lenguageSwitcher.addEventListener('change', onLanguageSwitcherChange)
refs.cityChangerCloseBtnEl.addEventListener('click', onCityChangerOverlayCloseBtn)
document.addEventListener("keydown", onCloseOverlayEscBtn);



onStart()