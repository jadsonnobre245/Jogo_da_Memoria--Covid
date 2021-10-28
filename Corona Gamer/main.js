const cardBoard = document.querySelector("#cardboard");
/*const images = [
    'angular.svg',
    'aurelia.svg',
    'vue.svg',
    'react.svg',
    'backbone.svg',
    'ember.svg'
];*/

var num = 0;
var atual;
const images = [
    'p1.png',
    'p2.png',
    'p4.png',
    'p5.png',
    'p6.png',
    'p9.png',
];

let cardHTML = '';

images.forEach(img => {
    cardHTML += `
    <div class ="memory-card" data-card="${img}">
        <img class = "front-face" src = "img/${img}">
        <img class = "back-face" src =  "img/96a7cac08ad4539e1888d8f5c82b5f48-icone-coronavirus-covid19.png">
    </div>
    `
});

cardBoard.innerHTML = cardHTML + cardHTML;

const cards = document.querySelectorAll(".memory-card");
let fristCard, secondCard;
let lockCard = false;

function flipcard() {
    if (lockCard) return false;
    this.classList.add("flip");

    if (!fristCard) {
        fristCard = this;

        return false;
    }

    secondCard = this;
    checkForMatch();

}

function checkForMatch() {
    let isMatch = fristCard.dataset.card === secondCard.dataset.card;

    if (isMatch) {
        atual = num++;
        setTimeout(() => {
            conta_Msg(num);
        }, 500);
    }

    !isMatch ? disableCards() : resetCards(isMatch);
}

function disableCards() {
    lockCard = true;

    setTimeout(() => {
        fristCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetCards();
    }, 1000);
}
(function shuffle() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand;
    })

})()

function conta_Msg(num) {

    if (num == 1) {
        alert("Medida de prevenção: Lave bem as mãos frequentemente, com água e sabão.")
    }
    if (num == 2) {
        alert("Medida de prevenção:Quando não puder lavar as mãos, utilize álcool em gel 70% para a higienização.")
    }
    if (num == 3) {
        alert("Medida de prevenção:Evite tocar os olhos, nariz e boca quando as mãos não estiverem limpas.")
    }
    if (num == 4) {
        alert("Medida de prevenção:Se estiver doente, evite locais com muitas pessoas e, principalmente, evite contato com idosos, gestantes e doentes crônicos.")
    }
    if (num == 5) {
        alert("Medida de prevenção:Não compartilhe alimentos nem objetos de uso pessoal, como talheres, pratos, copos e garrafas.")
    }
    if (num == 6) {
        alert("Medida de prevenção:Mantenha os ambientes bem ventilados, com portas e janelas abertas.")
    }
    setTimeout(() => {
        if (num == 6) {
            alert("Essas são algumas das pequenas atitudes que podemos realizar para ajudar na prevenção e combate contra o corona virus.")
        }
    }, 250);

}

function resetCards(isMatch = false) {
    if (isMatch) {
        fristCard.removeEventListener("click", flipcard);
        secondCard.removeEventListener("click", flipcard);
    }
    [fristCard, secondCard, lockCard] = [null, null, false, ];
}

cards.forEach(cards => cards.addEventListener("click", flipcard));