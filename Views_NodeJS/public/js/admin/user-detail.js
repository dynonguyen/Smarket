$('#accept').click(function(){
  myFetch(
  `${constant.JAVA_API_BASE_URL}/admin/management/account/detail?accountId=${id}`,
  )
  .then(async (response) => {
      const user = await response.json();
      myFetch(
      `${constant.JAVA_API_BASE_URL}/admin/management/account/accept/accepted?status=1&id=${type === 2 ? user.shipperId : user.storeId}&type=${type}`,
      )
      .then(async (response) => {
          const res = await response.json();
          if(res === 0) {
              alert('Duyệt không thành công!');
              return;
          } else {
              $(this).remove();
              $('#status').text('Đã duyệt');
              return;
          }
          
      })
      .catch((e) => {
          alert('Duyệt không thành công!');
          return;
      })
      .finally(() => {
      });
  })
  .catch((e) => {
      alert('Duyệt không thành công!');
      return;
  })
  .finally(() => {
      
  });
});
$(document).ready(function(){
  $('#back').click(function(){
    window.location.href = document.referrer;
  })
})