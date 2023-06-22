const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden'; //string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
	event.preventDefault(); //브라우저의 기본 동작을 막고, 그 동작 : 페이지 새로고침
	loginForm.remove();
	// loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	// show the greetings
	paintGreetings(savedUsername);
}
