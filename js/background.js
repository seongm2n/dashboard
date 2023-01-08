const button = document.querySelector(".changeBtn");
const images = [
    "0.JPG","1.JPG","2.JPG","3.JPG","4.JPG","5.JPG","6.JPG","7.JPG"
];

function changeImg() {
    const chosenImg = images[Math.floor(Math.random() * images.length)];
    document.body.style.background = `url(img/bgImg/${chosenImg})`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundSize = `cover`;



}

button.addEventListener("click", changeImg);