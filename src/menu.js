export default function menuTab() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const greeting = document.createElement('h1');
    const greetText = document.createElement('p');
    header.classList.add('header');
    greeting.textContent = 'Ratatouille Restaurant - Menu';
    greetText.textContent = 'Explore our delightful menu offerings';
    header.appendChild(greeting);
    header.appendChild(greetText);
    const container = document.createElement('div');
    container.classList.add('container');
    const menuItem1 = document.createElement('div');
    const menuItem1Heading = document.createElement('h3');
    const menuItem1Desc = document.createElement('p');
    menuItem1Heading.textContent = 'Appetizers';
    menuItem1Desc.textContent = 'Start your meal with our tantalizing appetizers, including bruschetta, stuffed mushrooms, and crispy calamari. Perfect for sharing or savoring on your own.';
    menuItem1.appendChild(menuItem1Heading);
    menuItem1.appendChild(menuItem1Desc);
    menuItem1.classList.add('menu-item');
    const menuItem2 = document.createElement('div');
    const menuItem2Heading = document.createElement('h3');
    const menuItem2Desc = document.createElement('p');
    menuItem2Heading.textContent = 'Entrees';
    menuItem2Desc.textContent = 'Indulge in our savory entrees, featuring a variety of dishes such as coq au vin, seafood paella, and steak au poivre. Each dish is prepared to perfection.';
    menuItem2.appendChild(menuItem2Heading);
    menuItem2.appendChild(menuItem2Desc);
    menuItem2.classList.add('menu-item');
    const menuItem3 = document.createElement('div');
    const menuItem3Heading = document.createElement('h3');
    const menuItem3Desc = document.createElement('p');
    menuItem3Heading.textContent = 'Desserts';
    menuItem3Desc.textContent = 'Complete your dining experience with our heavenly desserts. From rich chocolate fondant to classic crème brûlée, our desserts will satisfy your sweet cravings.';
    menuItem3.appendChild(menuItem3Heading);
    menuItem3.appendChild(menuItem3Desc);
    menuItem3.classList.add('menu-item');
    container.appendChild(menuItem1);
    container.appendChild(menuItem2);
    container.appendChild(menuItem3);
    content.appendChild(header);
    content.appendChild(container);
}