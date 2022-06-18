import { refs } from '../constants/refs';
import { getWeather } from '../tools/getWeather';
import { seasonThemeSwitcher } from './seasonsThemeSwitcher';
import { closeOverlay } from './onCityChangerClick';

export async function onSearchFormSubmit (event) {
    event.preventDefault();

    const request = event.currentTarget.elements.city.value
    closeOverlay();
    getWeather(request);


};

export function onSeasonThemeFormSubmit (event) {
    event.preventDefault();
    const seasonTheme = event.currentTarget.elements.themeSwitcher.value;

    localStorage.setItem("userTheme", seasonTheme)
    seasonThemeSwitcher(); 
};

