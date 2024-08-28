const flipCard = document.querySelector('.flip-card');

const words = [
    {name: 'at', translate: 'в', example: 'at school'},
    {name: 'night', translate: 'ночь', example: 'at night'},
    {name: 'day', translate: 'день', example: 'good day'},
    {name: 'orange', translate: 'апельсин', example: 'orange juice'},
    {name: 'cat', translate: 'кот', example: 'nice cat'}
]

flipCard.addEventListener('click', () => {
    flipCard.classList.add('active');
})

let wordIndex = 0;

function showWord() {
    const cardFront = document.querySelector('#card-front');
    cardFront.textContent = words[wordIndex].name;
    
}

function checkWord() {
    const cardBack = document.querySelector('card-back');
    cardBack.textContent = words.translate;
}

wordIndex++;
if (wordIndex < words.length) {
    showWord();
} 

checkWord();