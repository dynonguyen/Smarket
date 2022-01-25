function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(input).parent().hide();
      $(input).parent().next().children('img').attr('src', e.target.result);
      $(input).parent().next().show();
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload(input) {
  $(input)
    .parents('.file-upload-content')
    .prev()
    .children('.file-upload-input')
    .replaceWith($('.file-upload-input').clone());
  $(input).parents('.file-upload-content').hide();
  $(input).parents('.file-upload-content').prev().show();
}
