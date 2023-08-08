// ============= typing animation =============
var typedAnimation = new Typed('.typing', {
    strings: ['','web Developer','Graphic Designer', 'full Stack Dev', 'Web Designer'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// ======= aside =============
const nav = document.querySelector('.nav'),
navList = nav.querySelectorAll('li')
// totalNavList = navList.length
allSections = document.querySelectorAll('.section')
for (let i = 0; i < navList.length; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function() {
        removeBackSection();
        for (let j = 0; j < navList.length; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                
                addBackSection(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active')
        showSection(this);
        if (window.innerWidth < 1200) {
            asideTogglerBtn();
        }
    })
}

function removeBackSection() {
    for (let x = 0; x < allSections.length; x++) {
        allSections[x].classList.remove('back-section')
    }
}

function addBackSection(num) {
    allSections[num].classList.add('back-section');
}

function showSection(element) {
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove('active')
        
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}

function updateNav(element) {
    for (let i = 0; i < navList.length; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

document.querySelector('.hire-me').addEventListener('click', function() {
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})


const navTogglerBtn = document.querySelector('.nav-toggler'),
aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
    asideTogglerBtn();
})

function asideTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.toggle('open');
        
    }
}
