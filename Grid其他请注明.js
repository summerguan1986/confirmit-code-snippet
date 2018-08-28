//Grid 半开放 其他请注明，不填写答案不能选中
$(".confirmit-grid").find("input[type=text]").parent().siblings().hide();
$(".confirmit-grid").find("input[type=text]").keyup(function() {
  if($(this).val().trim().length > 0) {
    $(this).parent().siblings().show(); 
  } else {
    $(this).parent().siblings().hide();
  }
  
})
