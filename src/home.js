export default function homeTab() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const greeting = document.createElement('h1');
    const greetText = document.createElement('p');
    header.classList.add('header');
    greeting.textContent = 'Welcome to Ratatouille Restaurant';
    greetText.textContent = 'Discover the finest flavors in town';
    header.appendChild(greeting);
    header.appendChild(greetText);
    const container = document.createElement('div');
    const welcome = document.createElement('div');
    const welcomeText = document.createElement('h2');
    const welcomeDesc = document.createElement('p');
    welcomeText.textContent = 'Welcome to Ratatouille';
    welcomeDesc.textContent = 'We take pride in serving you exquisite dishes prepared with the freshest ingredients. At Ratatouille, we believe that dining is an experience that should delight all your senses. Our talented chefs are dedicated to crafting dishes that will leave you craving for more.';
    welcome.appendChild(welcomeText);
    welcome.appendChild(welcomeDesc);
    welcome.classList.add('welcome');
    const about = document.createElement('div');
    const aboutHeading = document.createElement('h2');
    const aboutText = document.createElement('p');
    const aboutDesc = document.createElement('p');
    aboutHeading.textContent = 'About Us';
    aboutText.textContent = 'Located in the heart of the city, Ratatouille is a culinary gem that offers a blend of traditional and modern cuisine. Our menu features a wide range of dishes inspired by French and Mediterranean flavors, from classic ratatouille to delectable desserts.';
    aboutDesc.textContent = 'Whether you\'re looking for a romantic dinner, a family celebration, or a casual lunch, Ratatouille is the perfect choice. We take pride in our warm and inviting ambiance, attentive service, and commitment to delivering an unforgettable dining experience.';
    about.appendChild(aboutHeading);
    about.appendChild(aboutText);
    about.appendChild(aboutDesc);
    about.classList.add('about');
    content.appendChild(header);
    content.appendChild(container)
    container.appendChild(welcome);
    container.appendChild(about);
}