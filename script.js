let gameBtn = document.getElementById("game-btn");
let gameImage = document.getElementById("game-image");
let bottomText = document.getElementById("bottom-text");
let bgColor = document.body;

let games = [
  "/images/GOT.jpg",
  "/images/GOWR.jpg",
  "/images/IF2.jpg",
  "/images/PTR.jpg",
  "/images/RDR2.jpg",
  "/images/Y0.jpg",
  "/images/GitHub.png",
];

function displayGameImage() {
  let randomIndex = Math.floor(Math.random() * games.length);
  let currentImage = games[randomIndex];

  bgColor.style.transition = "1s";
  gameBtn.style.background = "none";
  gameBtn.style.border = "none";

  gameImage.src = currentImage;

  if (currentImage === games[0]) {
    bottomText.innerHTML = `<div>One of the few games that made me emotional because of the way the finished the story. To add to that, its beautiful world is truly something to behold.</div>`;
    bgColor.style.backgroundColor = "#141414";
  } else if (currentImage === games[1]) {
    bottomText.innerHTML = `<div>Such an unforgettable gaming experience that I will forever love due to its amazing conclusion to one of my favorite characters in gaming.</div>`;
    bgColor.style.backgroundColor = "#5B83A4";
  } else if (currentImage === games[2]) {
    bottomText.innerHTML = `<div>My very first PlayStation game, which basically got me into gaming and still one of my favorite games to this day.</div>`;
    bgColor.style.backgroundColor = "#CC9952";
  } else if (currentImage === games[3]) {
    bottomText.innerHTML = `<div>One of the more beautiful games I've played in recent memory that gives you a story that finishes in a way that's so unfair, yet so beautiful.</div>`;
    bgColor.style.backgroundColor = "#4F4639";
  } else if (currentImage === games[4]) {
    bottomText.innerHTML = `<div>A game that has never left my mind and appreciate it so much since it made me fall back in love with games again.</div>`;
    bgColor.style.backgroundColor = "#AD6500";
  } else if (currentImage === games[5]) {
    bottomText.innerHTML = `<div>The perfect introduction to one of my favorite game series that is still going strong.</div>`;
    bgColor.style.backgroundColor = "#3C0000";
  } else {
    bottomText.innerHTML = `<a id="link" href="https://github.com/Edmund-Frio" target="_blank"
    >Click here to see more of my projects on GitHub!</a
  >
  <div>Keep clicking if you haven't seen all of my favorites games yet! There are about 6 in total :)</div>`;
    bgColor.style.backgroundColor = "#777777"
  }
}
