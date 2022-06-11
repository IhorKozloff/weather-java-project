import { refs } from '../constants/refs';


export function weatherCreator (data) {
    console.log(data)
    console.dir(refs.cityTittleEl)
    refs.cityTittleEl.textContent = data.name;
    refs.currentTemperatureEl.textContent = Math.round(data.main.temp);
    refs.weatherDescriptionEl.textContent = data.weather[0].description;
}