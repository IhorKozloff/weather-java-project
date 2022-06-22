import { getWeather, seasonThemeSwitcher, closeOverlay } from '../tools';

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

