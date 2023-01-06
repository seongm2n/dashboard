const exitBtn = document.querySelector("#exit");

function handleExit(){
    if(confirm("로그아웃합니다🖐🏻 저장된 아이디, 할일 목록이 삭제됩니다.")){
        localStorage.clear();
        window.location.reload();
    }else{
        return;
    }
}
exitBtn.addEventListener("click", handleExit);