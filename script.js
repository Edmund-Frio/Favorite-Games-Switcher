let gameBtn = document.getElementById("game-btn");
let gameImage = document.getElementById("game-image");
let bottomText = document.getElementById("bottom-text");

let games = [
  {
    image: "/images/GOT.jpg",
    bodyColor: "#141414",
    caption: "1",
  },
  {
    image: "/images/GOWR.jpg",
    bodyColor: "#5B83A4",
    caption: "2",
  },
  {
    image: "/images/IF2.jpg",
    bodyColor: "#CC9952",
    caption: "3",
  },
  {
    image: "/images/PTR.jpg",
    bodyColor: "#4F4639",
    caption: "4",
  },
  {
    image: "/images/RDR2.jpg",
    bodyColor: "#AD6500",
    caption: "5",
  },
  {
    image: "/images/Y0.jpg",
    bodyColor: "#3C0000",
    caption: "6"
  },
];

gameBtn.addEventListener("click", () => {
  displayGameImage();
  gameText();
});

function displayGameImage() {
  let randomIndex = Math.floor(Math.random() * games.length);
  let currentImage = games[randomIndex];
  let bgColor = document.body;

  bgColor.style.transition = "1s";
  gameBtn.style.background = "none";
  gameBtn.style.border = "none";

  gameImage.src = currentImage;

  for (let i = 0; i < games.length; i++) {
    if (games[i] === 0) {
      
    } 
  } 

  // if (currentImage === games[0]) {
  //   bgColor.style.backgroundColor = "#141414"
  // } else if (currentImage === games[1]) {
  //   bgColor.style.backgroundColor = "#5B83A4"
  // } else if (currentImage === games[2]) {
  //   bgColor.style.backgroundColor = "#CC9952"
  // } else if (currentImage === games[3]) {
  //   bgColor.style.backgroundColor = "#4F4639"
  // } else if (currentImage === games[4]) {
  //   bgColor.style.backgroundColor = "#AD6500"
  // } else if (currentImage === games[5]) {
  //   bgColor.style.backgroundColor = "#3C0000"
  // }
}

function gameCaption() {}
