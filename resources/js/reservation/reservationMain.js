document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      slotDuration: '00:30:00',
      allDaySlot: false,
      nowIndicator: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      },
      selectable: true, // 선택 활성화
      select: function(selectionInfo) {
        // 이 함수는 선택이 발생했을 때 호출됩니다.
        // `selectionInfo`를 사용하여 선택한 범위에 대한 정보를 얻을 수 있습니다.
        var start = selectionInfo.start;
        var end = selectionInfo.end;

        // Alert 창에 메시지 표시
        alert('선택된 시간: ' + start + ' 부터 ' + end + ' 까지\n예약이 확정되었습니다.');

        // 선택한 범위에 강조 표시 추가
        calendar.addEvent({
          title: '확정된 예약', // 이벤트 제목
          start: start, // 시작 시간
          end: end, // 종료 시간
          rendering: 'background', // 배경에 표시
          color: '#aaffaa' // 강조 색상
        });

        // 현재 선택 해제
        calendar.unselect();
      },
      events: [
        // 필요한 경우 기존 이벤트 추가
      ],
      businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5], // 월요일부터 금요일까지
        startTime: '08:00', // 시작 시간
        endTime: '23:00' // 종료 시간
      },
      eventDisplay: 'block', // 이벤트 표시 방법 (block: 보이게 함, none: 숨김)
          hiddenDays: [0, 6], // 일요일(0)과 토요일(6)은 숨김
          slotMinTime: '08:00', // 표시되는 첫 번째 슬롯의 시작 시간
          slotMaxTime: '23:00', // 표시되는 마지막 슬롯의 종료 시간 (10 PM)
          contentHeight: 'auto' // 달력의 높이 자동 조절
        });

    // 달력 렌더링
    calendar.render();
  });