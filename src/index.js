import './style.css';
import pageLoad from './page-load.js';
import homeTab from './home';
import menuTab from './menu';
import contactTab from './contact';
import clearContent from './clearContent';
pageLoad();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        buttons.forEach((button) => button.classList.remove('active'));
        event.target.classList.add('active');
    })
})