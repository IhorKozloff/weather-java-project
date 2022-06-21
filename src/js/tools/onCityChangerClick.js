import { refs } from '../constants';

export function closeOverlay () {
    refs.cityChangerBtnEl.classList.remove('hidden');
    refs.cityChangerOverlay.classList.add('hidden');
};

function openOverlay () {
    refs.cityChangerBtnEl.classList.add('hidden');
    refs.cityChangerOverlay.classList.remove('hidden');
};


export function onCityChangerClick () {
    openOverlay();
};


export function onCityChangerOverlayCloseBtn () {
    closeOverlay();
};

export function onCloseOverlayEscBtn (event) {
    if ( event.code !== "Escape") {
        return
    }
    closeOverlay();
};









