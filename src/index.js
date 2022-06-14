import { refs } from './js/constants/refs';
import { onCityChangerClick } from './js/tools/onCityChangerClick';
import { onSearchFormSubmit, onSeasonThemeFormSubmit } from './js/tools/onFormsSubmit';
import { getCurrentWeather } from './js/tools/API';
import { weatherCreator } from './js/tools/weatherCreator';
import { onBurgerOpenBtn, onBurgerCloseBtn } from './js/tools/burgerMenuFunc';

async function onStart (request) {
    const resultData = await getCurrentWeather(request);
    weatherCreator(resultData); 
}

function onInformBtnClick () {
    refs.footerInformBtn.classList.toggle('rotated');
    refs.secondaryInformText.classList.toggle('active');
};

refs.burgerMenuOpenBtnEl.addEventListener('click', onBurgerOpenBtn);
refs.burgerMenuCloseBtnEl.addEventListener('click', onBurgerCloseBtn);
refs.seasonThemeFormEl.addEventListener('submit', onSeasonThemeFormSubmit);
refs.weatherFormEl.addEventListener('submit', onSearchFormSubmit);
refs.cityChangerBtnEl.addEventListener('click', onCityChangerClick);
refs.footerInformBtn.addEventListener('click', onInformBtnClick)





onStart("Киев")


























// async function onFormSubmit (event) {
    // event.preventDefault();
    // console.log('form submited');
//     const selectedOptionValue = refs.inputSelectEl.value;
//     console.log(selectedOptionValue)
//     const resultData = await getCurrentWeather(selectedOptionValue);
//      console.log(resultData)
//     // weatherDaysCardCreator();

// }

// refs.weatherFormEl.addEventListener('submit', onFormSubmit);










// const queryRequest = 'Vinnytsia'
// getWeatherByName(queryRequest);


