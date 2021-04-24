/*jshint esversion: 6 */

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


function startGame() {
    // Check and get the value of the radiobutton selected
    level = GetSelectedLevel();
    switch (level) {
        case "easy":
            BuildGrid(8, easy);
            break;
        case "medium":
            BuildGrid(12), medium;
            break;
        case "hard":
            BuildGrid(16, hard);
            break;
        default:
            break;
    }

}

function startGame() {
    // Check and get the value of the radiobutton selected
    level = GetSelectedLevel();
    switch (level) {
        case "easy":
            BuildGrid(8, easy);
            break;
        case "medium":
            BuildGrid(12), medium;
            break;
        case "hard":
            BuildGrid(16, hard);
            break;
        default:
            break;
    }

    if (levelCase === "easy") {
        totalTime = 120;
    } else if (levelCase === "medium") {
        totalTime = 90;
    } else if (levelCase === "hard") {
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