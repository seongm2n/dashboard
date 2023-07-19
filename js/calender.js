const date = new Date();

// 달력 생성 및 업데이트
const renderCalendar = () => {
	date.setDate(1); // 날짜를 1일로 설정

	const monthDays = document.querySelector('.days'); // 달력의 날짜 표시하는 부분

	// 현재 달의 마지막 날짜 가져옴
	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate();
	// 이전 달의 마지막 날짜 가져옴
	const prevLastDay = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDate();
	// 현재 달의 1일이 무슨 요일인지 가져옴
	const firstDayIndex = date.getDay();

	// 현재 달의 마지막 날짜가 무슨 요일인지 가져옴
	const lastDayIndex = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDay();

	// 다음 달의 1일까지 몇일이 남았는지 계산
	const nextDays = 7 - lastDayIndex - 1;

	// 월의 이름을 담는 배열
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	// date 요소 안 p 태그 선택, 해당 요소에 현재 연도 표시
	document.querySelector('.date p').innerHTML = new Date().getFullYear();

	// date 요소 안 h1 태그 선택, 해당 요소에 현재 월 표시
	document.querySelector('.date h1').innerHTML = months[date.getMonth()];

	// 날짜 담을 문자열
	let days = '';

	// for 반목문 사용하여 이전 달의 날짜, 현재 달의 날짜, 다음 달의 날짜를 순서대로 문자열에 추가
	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class='prev-date'>${prevLastDay - x + 1}</div>`;
	}

	// 현재 날짜와 달이 일치하는 경우 today 클래스 추가하여 해당 날짜를 강조해서 표시
	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth()
		) {
			days += `<div class="today">${i}</div>`;
		} else {
			days += `<div>${i}</div>`;
		}
	}

	for (let j = 1; j <= nextDays; j++) {
		days += `<div class ='next-date'>${j}</div>`;
	}
	monthDays.innerHTML = days; //days 변수에 저장된 문자열을 HTML요소에 삽입하여 달력 표시
};

// 버튼을 클릭하면 date객체의 월을 조정

// 이전 달로
document.querySelector('.prev').addEventListener('click', () => {
	date.setMonth(date.getMonth() - 1);
	//renderCalender함수 호출하여 달력 업데이트
	renderCalendar();
});

// 다음 달로
document.querySelector('.next').addEventListener('click', () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

renderCalendar();
