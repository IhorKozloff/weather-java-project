import { refs } from '../constants/refs';

export function onCityChangerClick () {
    console.log('change city clicked')
    refs.cityChangerBtnEl.classList.add('hidden');
    refs.weatherFormEl.classList.remove('hidden');
};








