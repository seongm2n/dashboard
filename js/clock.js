const clock = document.querySelector(".clock");

function setClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}h : ${minutes}m : ${seconds}s`;
    
}

setClock();
setInterval(setClock, 1000);

