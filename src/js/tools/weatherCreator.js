import { refs } from '../constants/refs';
import { iconGenerator } from '../tools/iconGenerator';

const moment = require('moment')


export function weatherCreator (data) {

    const description = data.weather[0].description

    refs.heroWeatherOutletEl.innerHTML = `

        <div class="current-weather-preview-content-wrapper ${iconGenerator(description)}">

            <div class="city-name-wrapper"">
                <p class="city-name">${data.name}</p>
            </div>


            

            <div class="current-weather-lower-content">
                <div class="current-weather-temperature-wrapper">
                    <span class="current-weather-temperature">${Math.round(data.main.temp)}</span>
                </div>
                <p class="current-weather-description">${description}</p>
            </div>
        

        </div>
    `;
    
    
    
    refs.currentWeatherOutletEl.innerHTML = `
        <div class="weather-preview">
            <span class="current-weather-date">Дата:${moment(Date.now()).locale("ru").format('L')}</span>
            <div class="current-weather-preview-content-wrapper ${iconGenerator(description)}">
    
                <div class="city-name-wrapper"">
                    <p class="city-name">${data.name}</p>
                </div>
    
    
                
    
                <div class="current-weather-lower-content">
                    <div class="current-weather-temperature-wrapper">
                        <span class="current-weather-temperature">${Math.round(data.main.temp)}</span>
                    </div>
                    <p class="current-weather-description">${description}</p>
                </div>
            
    
            </div>
        </div>
    
        <ul class="current-weather-list">
            <li class="current-weather-item current-weather-item__background-wind-left">
                <span class="wind">Ветер: ${data.wind.speed} м/с</span>
            </li>
            <li class="current-weather-item current-weather-item__background-arc">
                <span class="visibility">Видимость: ${data.visibility / 1000} км</span>
            </li>
            <li class="current-weather-item current-weather-item__background-wind-right">
                <span class="pressure">Давление: ${Math.round(data.main.pressure / 1.33)} мм.рт.ст.</span>
            </li>
            <li class="current-weather-item current-weather-item__background-wind-left rotated">
                <span class="humidity">Влажность: ${data.main.humidity} %</span>
            </li>
            <li class="current-weather-item current-weather-item__background-arc rotated">
                <span class="clouds">Облачность: ${data.clouds.all} %</span>
            </li>
            <li class="current-weather-item current-weather-item__background-wind-right rotated qqqqqq">
                <span class="min-max-temp">Мин - Макс: ${Math.round(data.main.temp_min)} - ${Math.round(data.main.temp_max)} deg</span>
            </li>
        </ul>
    `;
    refs.cityChangerBtnEl.classList.remove('hidden')

    
}