import { refs } from '../constants';

function classListSwitcher (elementId, addedClasses) {
    const domElement = document.querySelector(elementId); 
    domElement.classList.value = '';
    domElement.classList.add(addedClasses);

};


export function seasonThemeSwitcher () {

    const currentSeasonTheme = localStorage.getItem("userTheme")

    refs.seasonThemeOptionsEl.forEach(item => {
        item.removeAttribute("selected");
        if (item.value === currentSeasonTheme) {
            item.setAttribute("selected", true);
            return
        }
    });

    switch (currentSeasonTheme) {
        case "summer":
            classListSwitcher('#headerSection','header__summer-time')
            classListSwitcher('#aboutSection','about__summer-time')
            classListSwitcher('#footerSection','footer__summer-time')
            classListSwitcher('#heroSection','hero__summer-time')
        break;
        
        case "autumn":
            classListSwitcher('#headerSection','header__autumn-time')
            classListSwitcher('#aboutSection','about__autumn-time')
            classListSwitcher('#footerSection','footer__autumn-time')
            classListSwitcher('#heroSection','hero__autumn-time')
        break;

        case "winter":
            classListSwitcher('#headerSection','header__winter-time')
            classListSwitcher('#aboutSection','about__winter-time')
            classListSwitcher('#footerSection','footer__winter-time')
            classListSwitcher('#heroSection','hero__winter-time')
        break;

        case "spring":
            classListSwitcher('#headerSection','header__spring-time')
            classListSwitcher('#aboutSection','about__spring-time')
            classListSwitcher('#footerSection','footer__spring-time')
            classListSwitcher('#heroSection','hero__spring-time')
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