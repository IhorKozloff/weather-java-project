export function iconGenerator (weather) {

    switch (weather) {
            case [
                "переменная облачность", "облачно с прояснениями", "небольшая облачность", 
                "уривчасті хмари", "рвані хмари", "кілька хмар",
                "scattered clouds", "broken clouds", "few clouds",
            ].find(item => item === weather):
            return "background-sun-behind-cloud";

            case [
                    "ясно", 
                    "чисте небо",
                    "clear sky"
                ].find(item => item === weather):
            return "background-sun";

            case [
                "пасмурно",
                "хмарно",
                "overcast clouds"
            ].find(item => item === weather):
            return "background-clouds";

            case [
                "небольшой дождь",
                "легкий дощ", "помірний дощ",
                "light rain", "moderate rain"
            ].find(item => item === weather):
            return "background-rain";

            case [
                "сильный дождь",
                "сильний дощ",
                "heavy intensity rain"
            ].find(item => item === weather):
            return "background-hevy-rain";

            default:
            return "background-no-icon";
    }

};


