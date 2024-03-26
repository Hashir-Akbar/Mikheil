const hamburgetMenu  = document.querySelector('.hamburger > img');

hamburgetMenu.addEventListener('click', () => {
    const nav = document.querySelector('.hamburger-menu');
    nav.classList.toggle('hamburger-menu-display');
    }
);