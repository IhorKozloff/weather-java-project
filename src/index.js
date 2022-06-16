import { refs } from './js/constants/refs';
import { onCityChangerClick, onCityChangerOverlayCloseBtn } from './js/tools/onCityChangerClick';
import { onSearchFormSubmit, onSeasonThemeFormSubmit } from './js/tools/onFormsSubmit';
import { onBurgerOpenBtn, onBurgerCloseBtn } from './js/tools/burgerMenuFunc';
import { onInformBtnClick } from './js/tools/onFooterInformBtnClick';
import { onLanguageSwitcherChange } from './js/tools/onLanguageSwitcherChange'
import { getWeather } from './js/tools/getWeather';


async function onStart () {
    getWeather() 
};



refs.burgerMenuOpenBtnEl.addEventListener('click', onBurgerOpenBtn);
refs.burgerMenuCloseBtnEl.addEventListener('click', onBurgerCloseBtn);
refs.seasonThemeFormEl.addEventListener('submit', onSeasonThemeFormSubmit);
refs.weatherFormEl.addEventListener('submit', onSearchFormSubmit);
refs.cityChangerBtnEl.addEventListener('click', onCityChangerClick);
refs.footerInformBtn.addEventListener('click', onInformBtnClick);
refs.lenguageSwitcher.addEventListener('change', onLanguageSwitcherChange)
refs.cityChangerCloseBtnEl.addEventListener('click', onCityChangerOverlayCloseBtn)




onStart()