document.addEventListener('DOMContentLoaded', function() {
    // 각 회의실에 대한 리소스 정의
    var resources = [
        { id: 'room1', title: '회의실 1' },
        { id: 'room2', title: '회의실 2' },
        { id: 'room3', title: '회의실 3' }
    ];

    // 각 회의실에 대한 달력 생성
    resources.forEach(function(resource, index) {
        var calendarEl = document.getElementById('calendar' + (index + 1));
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'timeGridWeek',
            slotDuration: '00:30:00',
            allDaySlot: false,
            nowIndicator: true,
            selectable: true,
            select: function(selectionInfo) {
                var start = selectionInfo.start;
                var end = selectionInfo.end;

                alert('선택된 시간: ' + start + ' 부터 ' + end + ' 까지\n예약이 확정되었습니다.');

                calendar.addEvent({
                    title: '확정된 예약',
                    start: start,
                    end: end,
                    rendering: 'background',
                    color: '#aaffaa'
                });

                calendar.unselect();
            },
            events: [],
            businessHours: {
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: '08:00',
                endTime: '23:00'
            },
            eventDisplay: 'block',
            hiddenDays: [0, 6],
            slotMinTime: '08:00',
            slotMaxTime: '23:00',
            contentHeight: 'auto',
            resources: [resource]
        });

        calendar.render();
    });
});