function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
    });
}


function handleScroll() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            el.classList.add('slide-in');
        }
    });
}


function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(handleScroll));


function scrollProjects(direction) {
    const container = document.querySelector('.project-cards');
    const scrollAmount = direction === 'right' ? 200 : -450;
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
    });
}


function updateCards() {
    const cards = document.querySelectorAll('.project-cards .card');
    const cardsToShow = 2;
    let currentCardIndex = 0;

    cards.forEach((card, index) => {
        if (
            index >= currentCardIndex &&
            index < currentCardIndex + cardsToShow
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex -= cardsToShow;
            updateCards();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentCardIndex + cardsToShow < cards.length) {
            currentCardIndex += cardsToShow;
            updateCards();
        }
    });
}

updateCards();


function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}


function toggleTheme() {
    const root = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    if (root.classList.toggle('light-theme')) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
}
