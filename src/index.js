import { refs } from './js/constants/refs';
import { onCityChangerClick } from './js/tools/onCityChangerClick';
import { onFormSubmit } from './js/tools/onFormSubmit';
import { getCurrentWeather } from './js/tools/API';
import { weatherCreator } from './js/tools/weatherCreator';

async function onStart (request) {
    const resultData = await getCurrentWeather(request);

    weatherCreator(resultData); 
}

onStart("Киев")

refs.weatherFormEl.addEventListener('submit', onFormSubmit);
refs.cityChangerBtnEl.addEventListener('click', onCityChangerClick);


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


