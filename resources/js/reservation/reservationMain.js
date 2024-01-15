$(document).ready(function() {
  // FullCalendar 및 TimeGrid 설정
  $('#calendar').fullCalendar({
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      defaultView: 'agendaWeek', // TimeGrid 표시 설정
      editable: true,
      selectable: true,
      selectHelper: true,
      slotDuration: '00:30:00', // 시간 간격 설정
      minTime: '08:00:00', // 최소 시간 설정
      maxTime: '20:00:00', // 최대 시간 설정
      slotLabelFormat: 'h:mm A', // 시간 레이블 포맷 설정
      events: [
          // 여기에 이벤트 데이터를 추가할 수 있습니다.
      ],
      // 추가적인 FullCalendar 및 TimeGrid 설정을 추가할 수 있습니다.
  });
});