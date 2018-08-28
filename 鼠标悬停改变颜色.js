$('.answerlabel').each(function(){
  $(this).parent().hover(function(){
   $(this).addClass('hoverColor');
 },function(){
   $(this).removeClass('hoverColor');
 });
});
