$(".confirmit-grid").find("input[type=text]").parent().siblings().hide();
$(".confirmit-grid").find("input[type=text]").keyup(function() {
  if($(this).val().trim().length > 0) {
    $(this).parent().siblings().show(); 
  } else {
    $(this).parent().siblings().hide();
  }
  
})
