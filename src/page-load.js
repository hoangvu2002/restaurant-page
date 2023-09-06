import myImage from './Daco_1750329.png';
import myBackground from './pexels-lina-kivaka-1458757.jpg'
export default function pageLoad() {
    const content = document.getElementById('content');
    const logo = document.createElement('img');
    const heading = document.createElement('h1');
    const nav = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    home.classList.add('home');
    menu.classList.add('menu');
    contact.classList.add('contact');
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    nav.classList.add('nav-bar');
    logo.src = myImage;
    logo.classList.add('logo');
    heading.textContent = 'Ratatouille';
    content.appendChild(logo);
    content.appendChild(heading);
    content.appendChild(nav);
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${myBackground})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
}

function setBackgroundImage() {
    const body = document.querySelector('body');
    body.style.backgroundImage = myBackground;
}
