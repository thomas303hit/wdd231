const hambutton = document.getElementById('menu');
const mainnav = document.getElementById('primarynav');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('#primarynav a').forEach(link => {
    link.addEventListener('click', () => {
        mainnav.classList.remove('open');
        hambutton.classList.remove('open');
    });
});