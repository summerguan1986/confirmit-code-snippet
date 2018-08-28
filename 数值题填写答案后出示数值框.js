//数值题 其他请注明，当填写答案后，出示数值框
if($('#Q4x12_7_other').val().trim().length>0){
  $('#Q4x12_7').show();
}else{
  $('#Q4x12_7').hide().val('');
}

$('#Q4x12_7_other').on("keyup",function(){
  if($(this).val().trim().length>0){
    $('#Q4x12_7').show();
  }else{
    $('#Q4x12_7').hide().val('');
  }
})
