function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            el.classList.add('slide-in');
        }
    });
});

function scrollProjects(direction) {
    const container = document.querySelector('.project-cards');
    const scrollAmount = direction === 'right' ? 200 : -450;
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

const cards = document.querySelectorAll('.project-cards .card');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentCardIndex = 0;
const cardsToShow = 2;

function updateCards() {
    cards.forEach((card, index) => {
        if (index >= currentCardIndex && index < currentCardIndex + cardsToShow) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

updateCards();

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
