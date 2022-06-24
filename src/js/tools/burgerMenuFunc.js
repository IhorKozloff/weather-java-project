import { refs } from '../constants';

export function onBurgerOpenBtn () {
    refs.burgerMenuOpenBtnEl.classList.add('hidden');
    refs.burgerMenuOverlayBtn.classList.remove('hidden');
    refs.burgerMenuEl.classList.add('active');
    
    
};

export function onBurgerCloseBtn () {
    refs.burgerMenuEl.classList.remove('active');
    refs.burgerMenuOpenBtnEl.classList.remove('hidden');
    refs.burgerMenuOverlayBtn.classList.add('hidden');
};