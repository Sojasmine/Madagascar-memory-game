/*jshint esversion: 6 */
// define function
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMcontentLoaded', ready());
// } else {
//     ready();
// }


let defaultAlt = "Lemur",
    defaultImg = "assets/images/lemur7.jpg",
easy = [{
    src: "assets/images/cameleon.jpg",
    alt: "Cameleon"
},
{
    src: "assets/images/cameleon.jpg",
    alt: "Cameleon"
},{
    src: "assets/images/baobab.jpg",
    alt: "Baobab"
},{
    src: "assets/images/baobab.jpg",
    alt: "Baobab"
},{
    src: "assets/images/fosa.jpg",
    alt: "Fosa"
},{
    src: "assets/images/fosa.jpg",
    alt: "Fosa"
},{
    src: "assets/images/maki.jpg",
    alt: "Maki"
},{
    src: "assets/images/maki.jpg",
    alt: "Maki"
}],


medium = [{
    src: "assets/images/makoa.jpg",
    alt: "Makoa"
},{
    src: "assets/images/makoa.jpg",
    alt: "Makoa",
},{
    src: "assets/images/lion.jpg",
    alt: "Lion"
},{
    src: "assets/images/lion.jpg",
    alt: "Lion",
},{
    src: "assets/images/make.jpg",
    alt: "Make"
},{
    src: "assets/images/make.jpg",
    alt: "Make"
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest",
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest"
},{
    src: "assets/images/papegoja.jpg",
    alt: "Papegoja",
},{   
    src: "assets/images/papegoja.jpg",
    alt: "Papegoja"
},{
    src: "assets/images/fosa.jpg",
    alt: "Fosa"
},{
    src: "assets/images/fosa.jpg",
    alt: "Fosa"
}],



hard = [{
    src: "assets/images/pinguin.jpg",
    alt: "Pinguin"
},{
    src: "assets/images/pinguin.jpg",
    alt: "Pinguin",
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest"
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest",
},{
    src: "assets/images/baobab.jpg",
    alt: "Baobab"
},{
    src: "assets/images/baobab.jpg",
    alt: "Baobab",
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest"
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest",
},{
    src: "assets/images/pinguin.jpg",
    alt: "Pinguin"
},{
    src: "assets/images/pinguin.jpg",
    alt: "Pinguin",
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest"
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest",
},{
    src: "assets/images/pinguin.jpg",
    alt: "Pinguin"
},{
    src: "assets/images/pinguin.jpg",
    alt: "Pinguin",
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest"
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest",
}];


//Define variable and get the DOM

let row = document.querySelector(".row");
let btnPrimary = document.querySelector(".btn.primary");
let imagesGrid = document.querySelector("ImagesGrid");
let timer = document.querySelector("time-remaining");
let moves = 0;
let matched = []
let defaultAltId = [];
let defaultAltSelected = [];


// Code snippet from  PortExe https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=585s
class MemoryCard {
    constructor (totalTime, cards) {
      this.cardsArray = cards;
      this.totalTime = totalTime;
      this.timeRemaining = totalTime;
      this.timer = document.getElementById("time-remaining");
      this.ticker = document.getElementById("flips");
     
    }
    startGame() {
      this.cardToCheck = null;
      this.totalClicks = 0;
      this.timeRemaining = this.totalTime;
      this.matchedCards = [];
      this.busy = true;
      setTimeout(() => {
        this.shuffleCards();
        this.countDown = this.startCountDown();
        this.busy = false;
      }, 500);
  this.hideCards();
  this.timer.innerText = this.timeRemaining;
  this.ticker.innerText = this.totalClicks;
   } 
    hideCards() {
      this.cardsArray.forEach(card => {
        card.classList.remove("visible");
        card.classList.remove("matched");
      });
    }
    flipCard(card) {
      if (this.canFlipCard(card)) {
       
        this.totalClicks ++;
        this.ticker.innerText = this.totalClicks;
        card.classList.add("visible");
        if (this.cardToCheck) 
        this.checkForCardMatch(card);
          else
          this.cardToCheck = card;
      }
      }
      checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
        this.cardMatch(card, this.cardToCheck);
        else 
        this.cardMisMatch(card, this.cardToCheck);
        this.cardToCheck = null;
       }
       cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
      
        if(this.matchedCards.length === this.cardsArray.length);
        this.victory();
    }
      cardMisMatch(card1, card2) {
        this.busy = true; 
        setTimeout(() => {
          card1.classList.remove("visible");
          card2.classList.remove("visible");
          this.busy = false;
        }, 1000);
      }
      getCardType(card) {
        return card.getElementsByClassName("card-value")[0].src;
      }
      startCountDown() {
        return setInterval(() => {
          this.timeRemaining--;
          this.timer.innerText = this.timeRemaining;
          if(this.timeRemaining === 0)
            this.gameOver();
      }, 1000);
    }
  

// Game levels 
}

// Start game function

function startGame() {
  // Check and get the value of the radiobutton selected
  alert('1234');
  document.getElementsByClassName('.row').checked = true;

    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.matchedCards = [];
    this.busy = true;
    
    level = GetSelectedLevel();
    switch (level) {
        case "easy":
            BuildGrid(8, easy);
            break;
        case "medium":
            BuildGrid(12, medium);
            break;
        case "hard":
            BuildGrid(16, hard);
            break;
        default:
            break;
    }

    if (level === "easy") {
        totalTime = 120;
    } else if (level === "medium") {
        totalTime = 90;
    } else if (level === "hard") {
        totalTime = 60;
    }

}
function GetSelectedLevel() {
    let selectedLevel = null,
        ele = document.getElementsByName('level');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            selectedLevel= ele[i].value;
    }
    return selectedLevel;
}


// Function time


function BuildGrid(totalBoxes, imgArray) {
    gridContent = "";
    // Loop through the Images Array passed in
    imgArray.forEach((img) => {
        // Generate the HTML needed
        
        gridContent += `<div class="memory-card" data-framework="${img.alt}">
                <img class="front-face" src="${img.src}" alt="${img.alt}" />
                <img class="back-face" src="${defaultImg}" alt="${defaultAlt}" />
            </div>`;
    });
    // Append the generated HTML to the body of the container.
    document.getElementById("ImagesGrid").innerHTML = gridContent;
}