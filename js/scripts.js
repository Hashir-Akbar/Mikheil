const hamburgetMenu  = document.querySelector('.hamburger-menu-container > img');

hamburgetMenu.addEventListener('click', () => {
    const nav = document.querySelector('.hamburger-menu');
    nav.classList.toggle('hamburger-menu-anzeige');
    }
);