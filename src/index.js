import { refs } from './js/constants/refs';
import { onCityChangerClick } from './js/tools/onCityChangerClick';
import { onSearchFormSubmit, onSeasonThemeFormSubmit } from './js/tools/onFormsSubmit';
import { getCurrentWeather } from './js/tools/API';
import { weatherCreator } from './js/tools/weatherCreator';
import { onBurgerOpenBtn, onBurgerCloseBtn } from './js/tools/burgerMenuFunc';
import { onInformBtnClick } from './js/tools/onFooterInformBtnClick';
import { onLanguageSwitcherChange } from './js/tools/onLanguageSwitcherChange'

async function onStart (request, leng) {
    const resultData = await getCurrentWeather(request, leng);
    weatherCreator(resultData); 
}



refs.burgerMenuOpenBtnEl.addEventListener('click', onBurgerOpenBtn);
refs.burgerMenuCloseBtnEl.addEventListener('click', onBurgerCloseBtn);
refs.seasonThemeFormEl.addEventListener('submit', onSeasonThemeFormSubmit);
refs.weatherFormEl.addEventListener('submit', onSearchFormSubmit);
refs.cityChangerBtnEl.addEventListener('click', onCityChangerClick);
refs.footerInformBtn.addEventListener('click', onInformBtnClick);
refs.lenguageSwitcher.addEventListener('change', onLanguageSwitcherChange)




onStart("Київ", 'ua')