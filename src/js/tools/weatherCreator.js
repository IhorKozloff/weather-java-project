import { refs } from '../constants/refs';
import { iconGenerator } from '../tools/iconGenerator';

export function weatherCreator (data) {
    console.log(data)
const description = data.weather[0].description



    refs.cityTittleEl.textContent = data.name;
    refs.currentTemperatureEl.textContent = Math.round(data.main.temp);
    refs.weatherDescriptionEl.textContent = description;
    refs.weatherLargeIconEl.classList.add(iconGenerator(description));
    
}