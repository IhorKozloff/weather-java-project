import { refs } from '../constants';

function classListSwitcher (elementId, addedClasses) {
    const domElement = document.querySelector(elementId); 
    domElement.classList.value = '';
    domElement.classList.add(addedClasses);
};

function activeThemeButtonSetter (data) {
    refs.seasonThemeOptionsEl.forEach(item => {
        item.classList.remove('active');
    })
    refs.seasonThemeOptionsEl.forEach(item => {
        if (item.dataset.value === data) {
            item.classList.add('active');
        }
    })
}

export function seasonThemeSwitcher () {

    const currentSeasonTheme = localStorage.getItem("userTheme");

    activeThemeButtonSetter(currentSeasonTheme)

    switch (currentSeasonTheme) {
        case "summer":
            classListSwitcher('#headerSection','header__summer-time')
            classListSwitcher('#aboutSection','about__summer-time')
            classListSwitcher('#footerSection','footer__summer-time')
            classListSwitcher('#heroSection','hero__summer-time')
            classListSwitcher('#futureWeatherSection','future__summer-time')
        break;
        
        case "autumn":
            classListSwitcher('#headerSection','header__autumn-time')
            classListSwitcher('#aboutSection','about__autumn-time')
            classListSwitcher('#footerSection','footer__autumn-time')
            classListSwitcher('#heroSection','hero__autumn-time')
            classListSwitcher('#futureWeatherSection','future__autumn-time')
        break;

        case "winter":
            classListSwitcher('#headerSection','header__winter-time')
            classListSwitcher('#aboutSection','about__winter-time')
            classListSwitcher('#footerSection','footer__winter-time')
            classListSwitcher('#heroSection','hero__winter-time')
            classListSwitcher('#futureWeatherSection','future__winter-time')
        break;

        case "spring":
            classListSwitcher('#headerSection','header__spring-time')
            classListSwitcher('#aboutSection','about__spring-time')
            classListSwitcher('#footerSection','footer__spring-time')
            classListSwitcher('#heroSection','hero__spring-time')
            classListSwitcher('#futureWeatherSection','future__spring-time')
        break;

        case "noTheme":
            classListSwitcher('#headerSection','header-section')
            classListSwitcher('#aboutSection','about-section')
            classListSwitcher('#footerSection','footer-section')
            classListSwitcher('#heroSection','hero-section')
        break;


        default:
            classListSwitcher('#headerSection','header-section')
            classListSwitcher('#aboutSection','about-section')
            classListSwitcher('#footerSection','footer-section')
            classListSwitcher('#heroSection','hero-section')
    }
};