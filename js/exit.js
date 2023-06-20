const exitBtn = document.querySelector('#exit');
const modal = document.createElement('div');
modal.classList.add('modal');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const closeBtn = document.createElement('span');
closeBtn.classList.add('close');
closeBtn.innerHTML = '&times;';

const message = document.createElement('p');
message.textContent = '로그아웃합니다🖐🏻';
const message2 = document.createElement('p');
message2.textContent = '저장된 아이디, 할일 목록이 삭제됩니다.';

const confirmBtn = document.createElement('button');
confirmBtn.textContent = '확인';

function handleExit() {
	modal.style.display = 'block';
}
function closeModal() {
	modal.style.display = 'none';
}

function handleConfirm() {
	localStorage.clear();
	window.location.reload();
}
exitBtn.addEventListener('click', handleExit);
closeBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', handleConfirm);

modalContent.appendChild(closeBtn);
modalContent.appendChild(message);
modalContent.appendChild(message2);
modalContent.appendChild(confirmBtn);
modal.appendChild(modalContent);
document.body.appendChild(modal);
