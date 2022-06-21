import {refs, navBarMurkUp, themeNames } from '../constants';
import { getWeather } from '../tools/getWeather';

function themeLengContentMaker (data) {
    refs.seasonThemeOptionsEl.forEach((item, index) => {
        item.textContent = themeNames[data][index]
        console.log(item)
    });
};

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

    lengOptionsSelector(language)
    themeLengContentMaker(language);

    

    switch (language) {
       
        case 'ua':
            
            refs.navigationEl.forEach(item => {
                item.innerHTML = navBarMurkUp.ua;
            });

            refs.seasonThemeLabel.textContent = "Змінити тему";

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
            refs.cityChangerBtnEl.textContent = "Change city?"
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
                refs.cityChangerBtnEl.textContent = "Изменить город?"
                break
    }


};








export function onLanguageSwitcherChange (event) {
    localStorage.setItem("userLanguage", event.target.value);
    LanguageSwitcher();
    getWeather()
}