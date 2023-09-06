import './style.css';
import pageLoad from './page-load.js';
import homeTab from './home';
import menuTab from './menu';
import contactTab from './contact';
import clearContent from './clearContent';
pageLoad();
homeTab();
homeTab();
clearContent();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        buttons.forEach((button) => button.classList.remove('active'));
        event.target.classList.add('active');
    })
})

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
home.addEventListener('click', () => {
    clearContent();
    homeTab();
    console.log('Hello');
});
menu.addEventListener('click', () => {
    clearContent();
    menuTab();
});
contact.addEventListener('click', () => {
    clearContent();
    contactTab();
})