import { refs } from "../constants";
import { getCurrentWeather, weatherCreator } from "../tools";

async function weatherActions (cityName) {
    const currentLanguage =  refs.lenguageSwitcher.value;

    const resultData = await getCurrentWeather(cityName, currentLanguage);
    weatherCreator(resultData);
    localStorage.setItem("currentCity", JSON.stringify(resultData));
}

export async function getWeather (request) {

    if (request) {
        try {
            await weatherActions(request);
        } catch (error){
            console.log('Такого города нет')
            console.log(error)
        }
        return
    } else {

        const storageData = JSON.parse(localStorage.getItem("currentCity"));

        if (storageData !== null) {
            try {

                await weatherActions (storageData.name);

            } catch (error){
                console.log('Такого города нет')
                console.log(error)
            }
            return
        } else {
            try {

                await weatherActions ("Kharkiv");

            } catch (error){
                console.log('Такого города нет')
                console.log(error)
            }
            return
            

        }

    }

            

    
    // if (request !== undefined) {
    //     try {
    //         const resultData = await getCurrentWeather(request, currentLanguage);
    
    //         weatherCreator(resultData, request); 
    //     } catch (error){
    //         console.log('Такого города нет')
    //         console.log(error)
    //     }
    //     return

    // } if (cityTittle) {
    //     console.log(cityTittle)

    //     try {
    //         const resultData = await getCurrentWeather(cityTittle, currentLanguage);
    
    //         weatherCreator(resultData, request); 
    //     } catch (error){
    //         console.log('Такого города нет')
    //         console.log(error)
    //     }
    //     return

    // } else {
    //     try {
            
    //         const resultData = await getCurrentWeather("Харьков", currentLanguage);
    
    //         weatherCreator(resultData, request); 
    //     } catch (error){
    //         console.log('Такого города нет')
    //         console.log(error)
    //     }
    // }
     
    

}