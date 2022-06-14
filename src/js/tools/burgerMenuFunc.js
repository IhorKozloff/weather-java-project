import { refs } from '../constants/refs';


export function onBurgerOpenBtn () {
    refs.burgerMenuEl.classList.add('active');
};

export function onBurgerCloseBtn () {
    refs.burgerMenuEl.classList.remove('active');
};