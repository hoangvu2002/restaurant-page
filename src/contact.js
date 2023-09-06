export default function contactTac() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const greeting = document.createElement('h1');
    const greetText = document.createElement('p');
    header.classList.add('header');
    greeting.textContent = 'Ratatouille Restaurant - Contact';
    greetText.textContent = 'Get in touch with us';
    header.appendChild(greeting);
    header.appendChild(greetText);
    const container = document.createElement('div');
    const contactInfo1 = document.createElement('div');
    const address = document.createElement('h2');
    const addressDesc1 = document.createElement('p');
    const addressDesc2 = document.createElement('p');
    address.textContent = 'Address';
    addressDesc1.textContent = '123 Gourmet Street';
    addressDesc2.textContent = 'Paris, France';
    contactInfo1.appendChild(address);
    contactInfo1.appendChild(addressDesc1);
    contactInfo1.appendChild(addressDesc2);
    contactInfo1.classList.add('contact-info');
    const contactInfo2 = document.createElement('div');
    const phone = document.createElement('h2');
    const phoneDesc1 = document.createElement('p');
    const phoneDesc2 = document.createElement('p');
    phone.textContent = 'Phone';
    phoneDesc1.textContent = 'Reservations: +1 (123) 456-7890';
    phoneDesc2.textContent = 'General Inquiries: +1 (234) 567-8901';
    contactInfo2.appendChild(phone);
    contactInfo2.appendChild(phoneDesc1);
    contactInfo2.appendChild(phoneDesc2);
    contactInfo2.classList.add('contact-info');
    const contactInfo3 = document.createElement('div');
    const email = document.createElement('h2');
    const emailDesc1 = document.createElement('p');
    const emailDesc2 = document.createElement('p');
    email.textContent = 'Email';
    emailDesc1.textContent = 'info@ratatouillerestaurant.com';
    emailDesc2.textContent = 'feedback@ratatouillerestaurant.com';
    contactInfo3.appendChild(email);
    contactInfo3.appendChild(emailDesc1);
    contactInfo3.appendChild(emailDesc2);
    contactInfo3.classList.add('contact-info');
    const contactInfo4 = document.createElement('div');
    const operation = document.createElement('h2');
    const operationDesc1 = document.createElement('p');
    const operationDesc2 = document.createElement('p');
    operation.textContent = 'Hours of Operation';
    operationDesc1.textContent = 'Monday to Saturday: 11:30 AM - 10:00 PM';
    operationDesc2.textContent = 'Sunday: Closed';
    contactInfo4.appendChild(operation);
    contactInfo4.appendChild(operationDesc1);
    contactInfo4.appendChild(operationDesc2);
    contactInfo4.classList.add('contact-info');
    container.appendChild(contactInfo1);
    container.appendChild(contactInfo2);
    container.appendChild(contactInfo3);
    container.appendChild(contactInfo4);
    content.appendChild(header);
    content.appendChild(container);
}