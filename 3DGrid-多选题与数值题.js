//3D Grid 第一列多选题 第二列数值题  多选选中了 数值题可填
//参考项目 FS ORD-320697-Z4V9-Fintech survey【Consumer】 -Bain*Live* (p2656951)
$(document).ready(function(){
  $('.confirmit-grid tbody tr').each(function(){
    //$(this).find('.gridcell').eq(1).find('.numberinput').after("<span class='curency'> %</span>");
    if($(this).find('.gridcell').eq(1).find('.numberinput').val()!=""||$(this).find('.gridcell').eq(0).find('input[type=checkbox]').is(':checked')){
      $(this).find('.gridcell').eq(1).find('.numberinput').attr('disabled',false);          
    }else{       
      $(this).find('.gridcell').eq(1).find('.numberinput').attr('disabled',true);
    }
    var that=$(this);
    $(this).find('.gridcell').eq(0).click(function(){

      if($(this).find('input[type=checkbox]').is(':checked')){
        that.find('.gridcell').eq(1).find('.numberinput').val("").attr('disabled',true);

      }else{
       that.find('.gridcell').eq(1).find('.numberinput').attr('disabled',false);
     }      
   });   
  });

})
