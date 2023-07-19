const clock = document.querySelector(".clock");

function setClock() {
    const date = new Date();
    // 목표 length가 2 -> ex) 09, 11 
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}h : ${minutes}m : ${seconds}s`;
    
}

setClock();
setInterval(setClock, 1000);

