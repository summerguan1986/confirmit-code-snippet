$(document).ready(function(){
window.onscroll=function(){ 
    fixHead();   
} 
function fixHead(){
    $('.questiontext_wrapper').css({'width':$('.questionarea').width()-2});
    var oTop=parseInt($('.answersection').offset().top);
    var scrollT=parseInt(document.body.scrollTop)||parseInt(document.documentElement.scrollTop);  
    if(scrollT>=(oTop+50)){
      $('.questiontext_wrapper').addClass('fixHead');
      $('.answersection').css({'padding-top':$('.questiontext_wrapper').height()});
    }else{
      $('.answersection').css({'padding-top':0});
      $('.questiontext_wrapper').removeClass('fixHead');
    }
}
})



