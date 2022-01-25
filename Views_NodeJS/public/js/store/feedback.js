$(document).ready(function(){
  $('#submit').click(function(e){
    if($('#feedback').val() === '') {
      alert('Vui lòng nhập nội dung của phản hồi');
      e.preventDefault();
      return;
    }
    $.ajax({
      type: "POST",
      url: "/store/feedback",
      data: {
        content: $('#feedback').val(),
      },
      dataType: "application/json",
      success: function (response) {
      },
      error: function (error) {
        if(error.responseText === 'Success') {
          alert('Gửi phản hồi thành công')
        } else {
          alert('Gửi phản hồi không thành công');
        }
        window.location.href = '/store/feedback'
      }
    });
  })
})