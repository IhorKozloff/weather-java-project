import {refs, navBarMurkUp, modalMenuTittles } from '../constants';
import { getWeather } from '../tools';


function modalMenuMiltiLang (lengData) {
    const currentLengContent = modalMenuTittles.find(item => item.name === lengData)


    
    refs.seasonThemeLabel[0].textContent = currentLengContent.tittles[0]
    refs.seasonThemeLabel[1].textContent = currentLengContent.tittles[1]

}

function lengOptionsSelector (data) {
    refs.lenguageOtions.forEach(item => {
        item.removeAttribute("selected");
        if (item.value === data) {

            item.setAttribute("selected", true);
            return
        }
    });
}


export function LanguageSwitcher () {

    const language = localStorage.getItem("userLanguage");

    lengOptionsSelector(language);
    modalMenuMiltiLang(language);
    

    switch (language) {
       
        case 'ua':
            
            refs.navigationEl.forEach(item => {
                item.innerHTML = navBarMurkUp.ua;
            });

            
            

            refs.heroTittlePanel.innerHTML = `
                <h1 class="hero-tittle">Погода - <span>плани</span> на майбутнє</h1>
                <p class="hero-about">
                    Правдива погода допоможе швидко та без зусиль скласти плани на майбутнє, зустрічі з друзями чи відпочинок на природі.
                </p>
                <a href="#current-weather">
                    <button type="button" class="hero-btn">Дивитися</button>
                </a>
                
            `;
            refs.aboutTittleOutletEl.innerHTML = `
                <h2 class="about-tittle">Дружня <span>спільнота</span></h2>
            `;
            refs.footerTittleOutletEl.innerHTML = `
                <h2 class="footer-tittle">Новітнє <span>обладнання</span></h2>
            `;
            refs.cityChangerBtnEl.textContent = "Змінити місто?"
            refs.futureWeatherTextOutlet.innerHTML = `
                <h2>Погода - <span>надихає</span></h2>
                <h3 class="soon-tittle">Скоро на сайті</h3> 
                <h3 class="text-tittle">Найточніший прогноз погоди</h3>
                <p>
                    Дружня команда кваліфікованих розробників працює над тим,
                    щоб наша програма могла надавати інформацію про погоду на
                        найближчі 7, 10 днів, а також на цілий місяць уперед.
                </p>
                <p>
                    А поки що, нижче пропонуємо ознайомитися з погодою на сьогоднішній день.
                    Та нехай удача супроводжує вас!
                </p>
            `;
            break
        case 'eng':
            refs.navigationEl.forEach(item => {
                item.innerHTML = navBarMurkUp.eng;
            });

            refs.seasonThemeLabel.textContent = "Change theme";

            refs.heroTittlePanel.innerHTML = `
                <h1 class="hero-tittle">Weather - <span>plans</span> for the future</h1>
                <p class="hero-about">
                    True weather will help you quickly and effortlessly make plans for the future, meet friends or relax in nature.
                </p>
                <a href="#current-weather">
                    <button type="button" class="hero-btn">Watch</button>
                </a>
                
            `;
            refs.aboutTittleOutletEl.innerHTML = `
                <h2 class="about-tittle">Friendly <span>community</span></h2>
            `;
            refs.footerTittleOutletEl.innerHTML = `
                <h2 class="footer-tittle">Latest <span>equipment</span></h2>
            `;
            refs.cityChangerBtnEl.textContent = "Change city?";
            refs.futureWeatherTextOutlet.innerHTML = `
                <h2>The weather - <span>inspires</span></h2>
                <h3 class="soon-tittle">Coming soon</h3> 
                <h3 class="text-tittle">The most accurate weather forecast</h3>
                <p>
                    A friendly team of qualified developers is working on
                    so that our application can provide weather information on
                        the next 7, 10 days, as well as a whole month ahead.
                </p>
                <p>
                    In the meantime, below we offer you to get acquainted with the weather for today.
                    And may good luck accompany you!
                </p>
            `;
            break


            case 'ru':
            
                refs.navigationEl.forEach(item => {
                    item.innerHTML = navBarMurkUp.ru;
                });
    
                refs.seasonThemeLabel.textContent = "Изменть тему";
    
                // refs.heroTittlePanel.innerHTML = `
                //     <h1 class="hero-tittle">Погода - <span>планы</span> на будущее</h1>
                //     <p class="hero-about">
                //         Правдивая погода поможет быстро и без усилий составить планы на будующее, встречи с друзьями или отдых на природе.
                //     </p>
                //     <a href="#current-weather">
                //         <button type="button" class="hero-btn">Смотреть</button>
                //     </a>
                    
                // `;
                refs.aboutTittleOutletEl.innerHTML = `
                    <h2 class="about-tittle">Дружное <span>сообщество</span></h2>
                `;
                refs.footerTittleOutletEl.innerHTML = `
                    <h2 class="footer-tittle">Новейшее <span>оборудование</span></h2>
                `;
                refs.cityChangerBtnEl.textContent = "Изменить город?";
                refs.futureWeatherTextOutlet.innerHTML = `
                    <h2>Погода - <span>вдохновляет</span></h2>
                    <h3 class="soon-tittle">Скоро на сайте</h3> 
                    <h3 class="text-tittle">Cамый точный прогноз погоды</h3>
                    <p>
                        Дружная команда квалифицированных разработчиков трудится над тем,
                        что бы наше приложение могло предоставлять информацию о погоде на
                            ближайшие 7, 10 дней, а так же на целый месяц вперед.
                    </p>
                    <p>
                        А пока, ниже предлагаем ознакомиться с погодой на сегодняшний день. И пусть удача сопутствует вам!
                    </p>
                `;
                break
    }


};








export function onLanguageSwitcherChange (event) {
    localStorage.setItem("userLanguage", event.target.value);
    LanguageSwitcher();
    getWeather()
}