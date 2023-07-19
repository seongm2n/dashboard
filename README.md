# Project

> 나만의 dash보드이며 음악(음악 플레이리스트 추가할 예정)을 들으면서 실시간 날짜와 날씨를 확인할 수 있고, Todolist에 할일을 적어서 메모를 간단하게 할 수 있다.

![mydashboard](https://github.com/seongm2n/dashboard/assets/62044613/3b9210ed-60f7-4226-9989-a5cea677a762)

---

### Stacks

<p>
<img src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E">
<img src="https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26">
<img src="https://img.shields.io/badge/Style-CSS3-informational?style=flat&logo=CSS3&color=1572B6">
</p>
<br>
<img src="https://img.shields.io/badge/Tool-Visual Studio Code-informational?style=flat&logo=visualstudiocode&color=007ACC">

<br>

### Planning

- 컨셉 - 집(House)
- 배경 - changeImg 버튼 누를 시 랜덤으로 배경화면이 바뀜
- what is your name?에 이름을 적고 Enter하면 로그인되고  
  로그인 정보는 로컬스토리지에 저장
- 로그아웃 버튼을 누르면 to-do-list에 적힌 내용과 로그인 정보 삭제  
  → 모달창으로 alert 띄움
- 북마크 설정 (크롬, 네이버, 깃허브, 노션, 노마드코더사이트, 유튜브)
- 실시간 캘린더 설정
- 실시간 시계 설정
- 실시간 날씨 설정 → Weather api 사용
- 음악 플레이어 설정  
  (사운드클라우드 api 사용할 예정이었으나 사운드클라우드에서 서비스 중단) → 유튜브 api 사용해서 플레이리스트 생성할 예정

### Trouble Shooting

- 집을 포토샵으로 그려서 이미지로 가져왔던 거라 위치 세팅이 어려웠음  
  → 일일이 위치를 확인해서 설정해줬음
- 실시간 시계 설정할 때 0으로 시작하지 않는 것 수정  
  → 해결 : padStart를 0으로 지정
  ```
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
  ```

### To improve

- 반응형으로 만들어서 모바일 버전으로 볼 수 있게 수정하기
- 배경이미지 렌더링 속도 개선하기
- 음악 플레이어 추가하기

### Deploy

[My dashboard](https://tyommin-dashboard.netlify.app/)
