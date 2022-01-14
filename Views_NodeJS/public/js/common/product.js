$(document).ready(function(){

  $('.img-thumbnail').each(function(){
    $(this).click(function(){
      $('.active img').attr('src', $(this).attr('src'));
    })
  })
    
  });