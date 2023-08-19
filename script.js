let gameBtn = document.getElementById("game-btn");
let gameImage = document.getElementById("game-image");

let games = [
  {
    image: "/images/GOT.jpg",
    bgColor: "#",
  },
  "/images/GOWR.jpg",
  "/images/IF2.jpg",
  "/images/PTR.jpg",
  "/images/RDR2.jpg",
  "/images/Y0.jpg",
];

function displayGameImage() {
  let randomIndex = Math.floor(Math.random() * games.length);
  let currentImage = games[randomIndex];

  gameBtn.style.background = "none"
  gameBtn.style.border = "none"
  gameImage.src = currentImage;
}
