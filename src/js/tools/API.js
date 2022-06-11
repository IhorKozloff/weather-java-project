import axios from "axios"
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = "cf43e0136f8c34fc07ed8b788e0c7b14";


export async function getCurrentWeather (queryCity) {
    try {
        const response = await axios.get(`?q=${queryCity}&units=metric&lang=ru&appid=${apiKey}`)
        return response.data
    } catch (error){
        console.log(error)
        return 'not found'
    }
}
