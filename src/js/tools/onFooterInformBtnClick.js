import { refs } from "../constants";

export function onInformBtnClick () {
    refs.footerInformBtn.classList.toggle('rotated');
    refs.secondaryInformText.classList.toggle('active');
    refs.footerSectionEl.classList.toggle('footer-section__extended-text');
};