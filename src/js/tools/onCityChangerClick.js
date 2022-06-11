import { refs } from '../constants/refs';

export function onCityChangerClick () {
    console.log('change city clicked')
    refs.tittleWrapperEl.classList.add('hidden');
    refs.weatherFormEl.classList.remove('hidden');
};








