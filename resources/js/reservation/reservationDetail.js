$(document).ready(function () {
    // 예약 수정 버튼 클릭 시
    $('#editReservationButton').click(function () {
      // 라디오 버튼이 선택되었는지 확인
      var isRadioChecked = $('input[name="resRadio"]:checked').length > 0;
  
      if (isRadioChecked) {
        // 상단 내 예약내역 텍스트를 자원예약수정으로 변경
        $('.subject strong').html('자원예약수정');
  
        // 수정 화면 보이기 및 테이블, 버튼, select, 라벨 숨기기
        $('#reservationEditContainer').show();
        $('.content table, .content .action-buttons, .content select, .page_number_choice_text').hide();
      }
    });
  
    // 자원예약수정 텍스트 클릭 시
    $('body').on('click', '#resourceReservationEdit', function () {
      // 수정 화면 보이기 및 테이블, 버튼, select, 라벨 숨기기
      $('#reservationEditContainer').show();
      $('.content table, .content .action-buttons, .content select, .page_number_choice_text').hide();
    });
  
    // 라디오 버튼 변경 시
    $('input[name="resRadio"]').change(function () {
      var actionButtons = $('#contentBox .action-buttons');
      var statusTitle = $('#contentBox .statustitle');
  
      if ($(this).is(':checked')) {
        var selectedRow = $(this).closest('tr');
        var status = selectedRow.find('td:last').text().trim();
  
        if (status === '대기') {
          // 대기 상태일 때, 버튼 및 상태 안내 표시
          actionButtons.show();
          statusTitle.html('');
        } else {
          // 대기 상태가 아닐 때, 버튼 숨기고 상태 안내 표시
          actionButtons.hide();
          statusTitle.html('<strong>예약수정과 취소는 대기 상태에서만 가능합니다.</strong>');
          statusTitle.css({
            'margin-top': '0',
            'padding-top': '10px',
          });
        }
      } else {
        // 라디오 버튼이 해제될 때, 버튼 및 상태 안내 초기화
        actionButtons.hide();
        statusTitle.html('');
      }
    });
  
    // 예약 취소 버튼 클릭 시
    $('#cancelReservationButton').click(function () {
      var isConfirmed = confirm('예약을 취소하시겠습니까?');
  
      if (isConfirmed) {
        alert('예약이 취소되었습니다.');
      }
    });
  
    // 예약 수정 화면에서 저장 버튼 클릭 시
    $('#saveReservationButton').click(function () {
      // 예약 수정 로직 추가
      alert('예약이 수정되었습니다.');
  
      // 수정 화면 숨기고 테이블, 버튼, select, 라벨 보이기
      $('#reservationEditContainer').hide();
      $('.content table, .content .action-buttons, .content select, .page_number_choice_text').show();
    });
  
    // 예약 수정 화면에서 취소 버튼 클릭 시
    $('#cancelEditButton').click(function () {
      // 상단 내 예약내역 텍스트를 원래대로 돌리기
      $('.subject strong').html('내 예약내역');
  
      // 수정 화면 숨기고 테이블, 버튼, select, 라벨 보이기
      $('#reservationEditContainer').hide();
      $('.content table, .content .action-buttons, .content select, .page_number_choice_text').show();
    });
  });
  