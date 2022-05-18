/* function Popup(popupButtonSelector, headerMenuSelector, popupSelector) {
    let popupButton = document.querySelector(popupButtonSelector);
    let headerMenu = document.querySelector(headerMenuSelector).cloneNode(true);
    let popup = document.querySelector(popupSelector);
    popupButton.addEventListener("click", renderPopup);
    let popupButtonLines = [...popupButton.childNodes[1].childNodes].filter((node) => node.nodeName != "SPAN");


    function renderPopup(e) {
        popup.appendChild(headerMenu);
        popup.classList.toggle("--popup-active");
        popupButton.classList.toggle("--popup-button-active");
        popupButtonLines.map((node) => node.classList.toggle("--popup-button-active"));
    }

}


menuPopup = new Popup(".header__popup-button", ".header__list", ".header__popup"); 

 */


function Card(text) {
    this.text = text;
    this.state = "show";
    this.isCreated = false;

    this.changeState = function changeState() {
        this.state === "show" ? this.state = "hide" : this.state = "show";
    }


    this.createElement = function createElement () {
        let cardElement_1 = document.createElement("div");
        let cardElement_2 = document.createElement("div");

        cardElement_1.setAttribute("class", "cards__card");
        cardElement_1.setAttribute("id", `${this.text}_1`);
        
        cardElement_2.setAttribute("class", "cards__card");
        cardElement_2.setAttribute("id", `${this.text}_2`);
        cardElement_1.innerHTML = this.text;         cardElement_2.innerHTML = this.text; 

        return [cardElement_1, cardElement_2]; 
    }

}


function Level(cards, levelDuration) {
    this.cards = cards;
    this.levelDuration = levelDuration;

    this.getCards = function getCards() {
        return this.cards;
    }


    this.render = function render() {
        for (let card of this.cards) {
            cardElement.setAttribute("data-state", card.state); 
            }
        }

    }

    this.start = function start() {
        this.cardsElement = document.querySelector(".cards__inner");
        this.durationElement = document.querySelector(".level-duration__value");
        for (let card of this.cards) {
            
        }
        
    }
}

function Game(levels) {
    this.levels = levels;
    this.init = function init() {

    }

    this.startLevel = function startLevel(level) {
        this.levelCards = level.getCards();
        for (let card of this.levelCards) {
        }
    }


    this.levelHandler = function levelHandler() {
        console.log(this.levels)
        for (let level of this.levels) {
            console.log(level);
            this.startLevel(level);
        }
    }
}


let levels = [new Level([new Card("некоторый текст")])];
console.log(levels)
let game = new Game(levels);
game.levelHandler(); 