import { refs } from '../constants';

export function onBurgerOpenBtn () {
    refs.burgerMenuEl.classList.add('active');
};

export function onBurgerCloseBtn () {
    refs.burgerMenuEl.classList.remove('active');
};