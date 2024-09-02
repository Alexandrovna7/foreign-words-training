const cards = [
    { name: 'at', translate: 'в', example: 'at school' },
    { name: 'night', translate: 'ночь', example: 'at night' },
    { name: 'day', translate: 'день', example: 'good day' },
    { name: 'orange', translate: 'апельсин', example: 'orange juice' },
    { name: 'cat', translate: 'кот', example: 'nice cat' }
]

let wordIndex = 0;

prepareCard(cards[wordIndex]);

function prepareCard(word) {
    renderCard(word)
    const flipCard = document.querySelector('.flip-card');
    flipCard.addEventListener('click', () => {
        flipCard.classList.add('active');
    })
} 

function renderCard(word) {
    const headFront = document.querySelector('#card-front h1');
    if (headFront) {
        headFront.textContent += cards[wordIndex].name;
    }

    const headBack = document.querySelector('#card-back h1');
    if (headBack) {
        headBack.textcontent += cards[wordIndex].translate;
    }


    const headExample = document.querySelector('#card-back p span');
    if (headExample) {
        headExample.textContent += cards[wordIndex].example;
    }

}

const sliderControls = document.querySelector(".slider-controls");

sliderControls.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "back":
            if (cards[wordIndex - 1] >= 0) {
                handleControls(cards[wordIndex - 1]);
            }
            break;
        case "next":
            if (cards[wordIndex + 1] < cards.length) {
                handleControls(cards[wordIndex + 1]);
            }
            break;
        case "exam":
            startExamMode();
            break;
    }
});

function handleControls(idx) {
    const nextControl = document.querySelector('#next');
    const prevControl = document.querySelector('#back');

    if (idx === cards[wordIndex - 1]) {
        nextControl.disabled = true;
    } else if (idx === 0) {
        prevControl.disabled = true;
    }
}
