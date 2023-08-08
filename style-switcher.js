/** ==== toggle style switcher ===  */
const switcherToggler = document.querySelector('.style-switcher-toggler');
switcherToggler.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});
/* ==== remove style switcher when scrolling */
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open');
    }
});

// ====== Change theme colors ======
const changeColorTheme = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    changeColorTheme.forEach((theme) => {
        if (color === theme.getAttribute('title')) {
            theme.removeAttribute('disabled');
        }
        else {
            theme.setAttribute('disabled', true);
        }
    })
}

// ====== light mode and Dark mode ======
const darkMode = document.querySelector('.day-night');
darkMode.addEventListener('click', () => {
    darkMode.querySelector('i').classList.toggle('fa-sun');
    darkMode.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})

window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        darkMode.querySelector('i').classList.add('fa-sun');
    }
    else {
        darkMode.querySelector('i').classList.add('fa-moon');
    }
})

