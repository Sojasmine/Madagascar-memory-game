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
    src: "assets/images/make.jpg",
    alt: "Make",
}],



hard = [{
    src: "assets/images/pinguin.jpg",
    alt: "Pinguin"
},{
    src: "assets/images/pinguin.jpg",
    alt: "Pinguin",
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest"
},{
    src: "assets/images/floodhest.jpg",
    alt: "Floodhest",
}];


function startGame() {
    setTimeout(function(){ alert("Please select a level!"); }, 100);
    level = getSelectedLevel();

    switch (level) {
        case "easy":
            BuildGrid(8, easy);
            break;

        case "medium":
            BuildGrid(12, medium);
            break;

        case"hard":
            BuildGrid(16, hard);

        default:
            break;
    }
}

