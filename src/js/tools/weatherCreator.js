import { refs, weatherComponentsNames } from '../constants';
import { iconGenerator } from '../tools/iconGenerator';

const moment = require('moment')

function weatherTemplateDataCreator () {
    const language = localStorage.getItem("userLanguage");
    return  weatherComponentsNames.find(item => item.language === language);
};

export function weatherCreator (data) {
    
    const description = data.weather[0].description
    
    const { components: { wind, visibility, pressure, humidity, cloudiness, tMinMax} } = weatherTemplateDataCreator();

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
            <span class="current-weather-date">${moment(Date.now()).locale("ru").format('L').split("/").join(".")}</span>
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
                <span class="weather-component wind">
                    ${wind.name}
                </span>
                <ul class="weather-component-decor-line">
                    <li></li><li></li><li></li><li></li>
                </ul>
                <span class="weather-component-value">
                    ${data.wind.speed}
                </span>
                <span class="weather-component-inch">
                     ${wind.inch}
                </span>
            </li>

            <li class="current-weather-item current-weather-item__background-arc">

                <span class="weather-component visibility">
                    ${visibility.name}
                </span>
                <ul class="weather-component-decor-line">
                    <li></li><li></li><li></li><li></li>
                </ul>
                <span class="weather-component-value">
                     ${data.visibility / 1000}
                </span>
                <span class="weather-component-inch">
                    ${visibility.inch}
                </span>

            </li>

            <li class="current-weather-item current-weather-item__background-wind-right">

                <span class="weather-component pressure">
                    ${pressure.name}
                </span>
                <ul class="weather-component-decor-line">
                    <li></li><li></li><li></li><li></li>
                </ul>
                <span class="weather-component-value">
                     ${Math.round(data.main.pressure / 1.33)}
                </span>
                <span class="weather-component-inch">
                    ${pressure.inch}
                </span>

            </li>

            <li class="current-weather-item current-weather-item__background-wind-left rotated">

                <span class="weather-component humidity">
                    ${humidity.name}
                </span>
                <ul class="weather-component-decor-line">
                    <li></li><li></li><li></li><li></li>
                </ul>
                <span class="weather-component-value">
                     ${data.main.humidity}
                </span>
                <span class="weather-component-inch">
                     ${humidity.inch}
                </span>

            </li>

            <li class="current-weather-item current-weather-item__background-arc rotated">

                <span class="weather-component clouds">
                    ${cloudiness.name}
                </span>
                <ul class="weather-component-decor-line">
                    <li></li><li></li><li></li><li></li>
                </ul>
                <span class="weather-component-value">
                     ${data.clouds.all}
                </span>
                <span class="weather-component-inch">
                     ${cloudiness.inch}
                </span>

            </li>

            <li class="current-weather-item current-weather-item__background-wind-right rotated">

                <span class="min-max-temp">
                    ${tMinMax.name}
                </span>
                <ul class="weather-component-decor-line">
                    <li></li><li></li><li></li><li></li>
                </ul>
                <span class="weather-component-value">
                     ${Math.round(data.main.temp_min)} - ${Math.round(data.main.temp_max)}
                </span>
                <span class="weather-component-inch">
                     ${tMinMax.inch}
                </span>

            </li>
        </ul>
    
    `;
        
    
    refs.cityChangerBtnEl.classList.remove('hidden')

    
}