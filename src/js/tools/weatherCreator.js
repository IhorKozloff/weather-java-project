import { refs } from '../constants/refs';
import { iconGenerator } from '../tools/iconGenerator';

export function weatherCreator (data) {
    console.log(data)
    const description = data.weather[0].description

    refs.heroWeatherOutletEl.innerHTML = `

        <div class="title-wrapper">
            <div class="tittle-text-wrapper" style="display: flex;">
                <span class="tittle-city-mark">г.</span>
                <p class="city-tittle">${data.name}</p>
            </div>
        </div>
    
        <div class="weather-large-icon-wrapper">
            <div class="weather-large-icon ${iconGenerator(description)}"></div>
        </div>

    
        <p class="weather-description">${description}</p>

        <div class="current-temperature-wrapper">
            <span class="current-temperature">${Math.round(data.main.temp)}</span>
        </div>
       
    `;
    refs.currentWeatherOutletEl.innerHTML = `
        <span class="date">Дата:${data.dt}</span>
        <span class="wind">Ветер: ${data.wind.speed} м/с</span>
        <span class="humidity">Влажность: ${data.main.humidity} %</span>
        <span class="visibility">Видимость: ${data.visibility / 1000} км</span>
        <span class="clouds">Облачность: ${data.clouds.all} %</span>
        <span class="pressure">Давление: ${data.main.pressure} hPa</span>
        <span class="max-temp">Максимальная температура: ${data.main.temp_min} deg</span>
        <span class="min-temp">Минимальная температура: ${data.main.temp_min} deg</span>
    `;
    refs.cityChangerBtnEl.classList.remove('hidden')

    
}