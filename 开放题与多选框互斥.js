//Global模板，开放题与多选框互斥，只有一个多选框
$(':text').attr("maxlength","2");

$('.abtn').click(function(){
  $(':text').val('');
});

$(':text').keyup(function(){
  $('.abtn').find('input').prop('checked',false);
  $('.abtn').removeClass('selectedcolor abtn-selected multi-selected').addClass('unselectedcolor multi');  
});
$('.answersection :last').css({'width':'30%', 'text-align':'left', 'margin-top':'-10px', 'margin-left':'10px'});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Global模板，开放题与多选框互斥，有多个多选框
$(':text').attr("maxlength","2");

$('.abtn').click(function(){
  $(':text').val('');
  $('.abtn').not($(this)).removeClass('selectedcolor abtn-selected multi-selected').addClass('unselectedcolor multi');  
  $('.abtn').not($(this)).find('input').prop('checked',false);
});

$(':text').keyup(function(){
  $('.abtn').find('input').prop('checked',false);
  $('.abtn').removeClass('selectedcolor abtn-selected multi-selected').addClass('unselectedcolor multi');  
});

$('.answersection :last').css({'width':'30%', 'text-align':'left', 'margin-top':'-10px', 'margin-left':'10px'});
