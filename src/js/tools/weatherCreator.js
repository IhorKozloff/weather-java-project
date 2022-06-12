import { refs } from '../constants/refs';
import { iconGenerator } from '../tools/iconGenerator';

export function weatherCreator (data) {
    console.log(data)
    const description = data.weather[0].description

    refs.currentWeatherOutletEl.innerHTML = `

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
    refs.cityChangerBtnEl.classList.remove('hidden')

    
}