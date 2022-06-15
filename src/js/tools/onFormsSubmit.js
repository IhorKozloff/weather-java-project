import { refs } from '../constants/refs';
import { getCurrentWeather} from './API';
import { weatherCreator } from './weatherCreator';
import { seasonThemeSwitcher } from './seasonsThemeSwitcher';

export async function onSearchFormSubmit (event) {
    event.preventDefault();

    refs.weatherFormEl.classList.add('hidden');

    const request = event.currentTarget.elements.city.value

    const currentLanguage =  refs.lenguageSwitcher.value 

    const resultData = await getCurrentWeather(request, currentLanguage);

    weatherCreator(resultData); 
};

export function onSeasonThemeFormSubmit (event) {
    event.preventDefault();
    const seasonTheme = event.currentTarget.elements.themeSwitcher.value;
    seasonThemeSwitcher(seasonTheme); 
};
