export default function clearContent() {
    const content = document.getElementById('content');
    const header = document.querySelector('.header');
    const container = document.querySelector('.container');
    content.removeChild(header);
    content.removeChild(container);
}