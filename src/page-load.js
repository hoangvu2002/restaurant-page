import myImage from './Daco_1750329.png';
export default function pageLoad() {
    const content = document.getElementById('content');
    const logo = document.createElement('img');
    const heading = document.createElement('h1');
    const nav = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
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
}

function setBackgroundImage() {

}