import { getWeather, seasonThemeSwitcher, closeOverlay } from '../tools';

export async function onSearchFormSubmit (event) {
    event.preventDefault();

    const request = event.currentTarget.elements.city.value
   
    
    getWeather(request);

    closeOverlay();
};

export function onSeasonThemeListClick (event) {
    if (event.target.nodeName !== "LI") {
        return;
    }
    const currentWeatherVaue = event.target.dataset.value;
    localStorage.setItem("userTheme", currentWeatherVaue);
    seasonThemeSwitcher();
};
