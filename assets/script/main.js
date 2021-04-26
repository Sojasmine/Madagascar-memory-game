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
let clicks = 0;
let totalTime = 0;


//Shuffle function

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, radomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.radom() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
// Flip function, code snipped from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(
    () => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
    },

    1500
  );
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

// Start game function

function startGame() {
  // Check and get the value of the radiobutton selected
  alert('1234');
  document.getElementsByClassName('.row').checked = true;

  const shuffleDefaultImg = document
  
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