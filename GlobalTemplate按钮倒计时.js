countdown(20);
function countdown(val){
$('#forwardbutton').hide();
  $('<div id="count" style="color:red;font-size:20px;display:inline-block;position:relative;bottom:30px;float:right"></div>').appendTo($('.nav'));
$('#count').html(val);
var timer=null;
timer=setInterval(function(){  
   val--;
  $('#count').html(val);
   if(val<1){
     $('#count').remove();
     $('#forwardbutton').show();
     clearInterval(timer);
   }  
},1000);

}
