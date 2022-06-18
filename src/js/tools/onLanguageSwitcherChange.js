import { refs } from '../constants/refs';
import { getWeather } from '../tools/getWeather';

const NavBarUa = `
<ul class="link-list">
    <li class="link-item">
        <a href="#" class="item-link">Погода</a>
    </li>
    <li class="link-item">
        <a href="#section_about" class="item-link">Про нас</a>
    </li>
    <li class="link-item">
        <a href="#" class="item-link">Надійність</a>
    </li>
    <li class="link-item">
        <a href="#" class="item-link">Контакти</a>
    </li>
</ul>
`;
const navBarEng = `
<ul class="link-list">
    <li class="link-item">
        <a href="#" class="item-link">Weather</a>
    </li>
    <li class="link-item">
        <a href="#section_about" class="item-link">About us</a>
    </li>
    <li class="link-item">
        <a href="#" class="item-link">Reliability</a>
    </li>
    <li class="link-item">
        <a href="#" class="item-link">Contacts</a>
    </li>
</ul>
`;
const navBarRu = `
<ul class="link-list">
    <li class="link-item">
        <a href="#" class="item-link">Погода</a>
    </li>
    <li class="link-item">
        <a href="#section_about" class="item-link">Про нас</a>
    </li>
    <li class="link-item">
        <a href="#" class="item-link">Надежность</a>
    </li>
    <li class="link-item">
        <a href="#" class="item-link">Контакты</a>
    </li>
</ul>
`;


export function LanguageSwitcher () {

    const language = localStorage.getItem("userLanguage");

    refs.lenguageOtions.forEach(item => {
        item.removeAttribute("selected");
        if (item.value === language) {

            item.setAttribute("selected", true);
            return
        }
    });
    console.log (refs.navigationEl)
    switch (language) {
       
        case 'ua':
            
            refs.navigationEl.forEach(item => {
                item.innerHTML = NavBarUa;
            });

            refs.seasonThemeLabel.textContent = "Змінити тему"
            refs.seasonThemeOptionsEl[0].textContent = "Без теми";
            refs.seasonThemeOptionsEl[1].textContent = "Літо";
            refs.seasonThemeOptionsEl[2].textContent = "Осінь";
            refs.seasonThemeOptionsEl[3].textContent = "Зима";
            refs.seasonThemeOptionsEl[4].textContent = "Весна";

            refs.heroTittlePanel.innerHTML = `
                <h1 class="hero-tittle">Погода - <span>плани</span> на майбутнє</h1>
                <p class="hero-about">
                    Правдива погода допоможе швидко та без зусиль скласти плани на майбутнє, зустрічі з друзями чи відпочинок на природі.
                </p>
                <button type="button" class="hero-btn">Дивитися</button>
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
                item.innerHTML = navBarEng;
            });

            refs.seasonThemeLabel.textContent = "Change theme"
            refs.seasonThemeOptionsEl[0].textContent = "No theme";
            refs.seasonThemeOptionsEl[1].textContent = "Summer";
            refs.seasonThemeOptionsEl[2].textContent = "Autumn";
            refs.seasonThemeOptionsEl[3].textContent = "Winter";
            refs.seasonThemeOptionsEl[4].textContent = "Spring";

            refs.heroTittlePanel.innerHTML = `
                <h1 class="hero-tittle">Weather - <span>plans</span> for the future</h1>
                <p class="hero-about">
                    True weather will help you quickly and effortlessly make plans for the future, meet friends or relax in nature.
                </p>
                <button type="button" class="hero-btn">Watch</button>
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
                    item.innerHTML = navBarRu;
                });
    
                refs.seasonThemeLabel.textContent = "Изменть тему"
                refs.seasonThemeOptionsEl[0].textContent = "Без темы";
                refs.seasonThemeOptionsEl[1].textContent = "Лето";
                refs.seasonThemeOptionsEl[2].textContent = "Осень";
                refs.seasonThemeOptionsEl[3].textContent = "Зима";
                refs.seasonThemeOptionsEl[4].textContent = "Весна";
    
                refs.heroTittlePanel.innerHTML = `
                    <h1 class="hero-tittle">Погода - <span>планы</span> на будущее</h1>
                    <p class="hero-about">
                    Правдивая погода поможет быстро и без усилий составить планы на будующее, встречи с друзьями или отдых на природе.
                    </p>
                    <button type="button" class="hero-btn">Смотреть</button>
                `;
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