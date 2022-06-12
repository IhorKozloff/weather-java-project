import { refs } from '../constants/refs';
import { getCurrentWeather } from './API';
import { weatherCreator } from './weatherCreator';

export async function onFormSubmit (event) {
    event.preventDefault();

    refs.weatherFormEl.classList.add('hidden');

    const request = event.currentTarget.elements.city.value

    const resultData = await getCurrentWeather(request);

    weatherCreator(resultData); 
};