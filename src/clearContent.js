export default function clearContent() {
    const content = document.getElementById('content');
    while (content.children.length > 3) {
        content.removeChild(content.children[3]);
    }
}