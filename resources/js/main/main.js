function recordTime(type) {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    
    if (type === 'start') {
        document.getElementById('start-time-info').innerHTML = "출근 시각: " + timeString;
    } else if (type === 'end') {
        document.getElementById('end-time-info').innerHTML = "퇴근 시각: " + timeString;
    }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// 페이지 로드 시 현재 날짜와 시각 표시
window.onload = function() {
    var today = new Date();
    var date = today.getFullYear() + '년 ' + (today.getMonth() + 1) + '월 ' + today.getDate() + '일';
    var time = addZero(today.getHours()) + ':' + addZero(today.getMinutes()) + ':' + addZero(today.getSeconds());
    
    document.getElementById('date-info').innerHTML =date;
    document.getElementById('time-info').innerHTML =time;
};