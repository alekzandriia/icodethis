const secret = document.getElementById('secret-message');
const toggle = document.getElementById('switch');

toggle.addEventListener('change', () => secret.classList.toggle('reveal'))