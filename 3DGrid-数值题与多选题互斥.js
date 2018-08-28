//3D Grid 数值题与多选题互斥，checkbox是原始状态
//参考项目 FS ORD-320697-Z4V9-Fintech survey【Consumer】 -Bain*Live* (p2656951)
$(document).ready(function(){
  $('.confirmit-grid tbody tr').each(function(){
   if($(this).find('.gridcell').find('.numberinput').val().trim().length > 0){
    $(this).find('.gridcell').find('input[type=checkbox]').attr('checked',false);          
  }
  var that=$(this);
  $(this).find('.gridcell').find('.numberinput').on("keyup",function(){

   if($(this).val() != ""){
    that.find('.gridcell').find('input[type=checkbox]').attr('checked',false);
    
  }      
});
  $(this).find('.gridcell').find('input[type=checkbox]').on("click",function(){

   that.find('.gridcell').find('.numberinput').val('');      
 });   
});

})
