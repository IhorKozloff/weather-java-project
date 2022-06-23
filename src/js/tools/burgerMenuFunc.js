import { refs } from '../constants';

export function onBurgerOpenBtn () {
    refs.burgerMenuEl.classList.add('active');
    refs.burgerMenuOpenBtnEl.classList.add('hidden');
};

export function onBurgerCloseBtn () {
    refs.burgerMenuEl.classList.remove('active');
    refs.burgerMenuOpenBtnEl.classList.remove('hidden');
};