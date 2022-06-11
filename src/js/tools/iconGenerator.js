
export function iconGenerator (weather) {


    if (weather === "переменная облачность") {
        return "sun-behind-cloud"
    } else {
        return "sun"
    }
// switch (weather) {
//         case "переменная облачность":
//           return "/sprite.e70822e0.svg#icon-sun-behind-cloud";
      
//         default:
//           return "/sprite.e70822e0.svg#icon-sun-behind-cloud";
//     }

};
