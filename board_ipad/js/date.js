function updateDateTime() {
    const now = new Date();

    // 월, 일, 요일 가져오기
    const month = now.getMonth() + 1; // 월 (0부터 시작하므로 +1)
    const date = now.getDate();      // 일
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const day = dayNames[now.getDay()]; // 요일

    // 날짜 문자열 생성
    const dateString = `${month}월 ${date}일 (${day})`;

    // 화면에 표시
    document.getElementById('dateDisplay').textContent = dateString;
}

// 1초마다 업데이트
setInterval(updateDateTime, 1000);

// 초기 실행
updateDateTime();