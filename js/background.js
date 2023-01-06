const button = document.querySelector(".changeBtn");
const images = [
    "0.jpg","1.jpg","2.jpg"
];

function changeImg() {
    const chosenImg = images[Math.floor(Math.random() * images.length)];
    document.body.style.background = `url(img/bgImg/${chosenImg})`;
    document.body.style.backgroundRepeat = `no-repeat`;


}

button.addEventListener("click", changeImg);