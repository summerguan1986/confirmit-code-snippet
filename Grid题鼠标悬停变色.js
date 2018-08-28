/*
<style>
td.hover {background:orange;}
</style>
*/


$(function(){
  $(".gridcell").mouseover(function(){
    $(this).parent().css("background","orange");
  }).mouseout(function(){
    $(this).parent().removeAttr("style");
  });

})
