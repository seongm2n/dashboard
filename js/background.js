const button = document.querySelector(".changeBtn");
const bg = document.querySelector(".my__chrome");
const images = [
    "0.JPG","1.JPG","2.JPG","3.JPG","4.JPG","5.JPG","6.JPG","7.JPG"
];

function changeImg() {
    const chosenImg = images[Math.floor(Math.random() * images.length)];
    bg.style.background = `url(img/bgImg/${chosenImg})`;
    bg.style.backgroundRepeat = `no-repeat`;
    bg.style.backgroundSize = `cover`;
}

button.addEventListener("click", changeImg);