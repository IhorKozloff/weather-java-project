
export function iconGenerator (weather) {

    switch (weather) {
            case "переменная облачность":
            return "background-sun-behind-cloud";
            
            case "облачно с прояснениями":
            return "background-sun-behind-cloud";

            case "ясно":
            return "background-sun";

            case "пасмурно":
            return "background-clouds";

            case "небольшой дождь":
            return "background-rain";
        
            default:
            return "background-no-icon";
    }

};


