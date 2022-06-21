import {refs} from '../constants';
console.log(refs.burgerMenuEl)

export function onBurgerOpenBtn () {
    refs.burgerMenuEl.classList.add('active');
};

export function onBurgerCloseBtn () {
    refs.burgerMenuEl.classList.remove('active');
};