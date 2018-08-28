//3D Grid题 第一列单选，第二列填百分比，第三列选填开放题，第一列单选选中时，第二列，第三列可填写，否则不可填写
//参考项目  FS ORD-322518-B3J3 2017 China Bain (p2752852)
$('#C16NABBx2_1').after(" <span style='margin-left:5px;'>%</span>");
$('#C16NABBx2_2').after(" <span style='margin-left:5px;'>%</span>");


$(".confirmit-grid tbody tr").each(function () {
  if($(this).find(".gridcell").find("input[type=radio]").is(":checked")) {
    $(this).find("input[type=text]").attr("disabled",false);  
  } else {
    $(this).find("input[type=text]").attr("disabled",true); 
  }
  
  $(this).find(".gridcell").click(function () {
    $(this).parent().find("input[type=text]").attr("disabled",false);
    $(this).parent().siblings().find("input[type=text]").attr("disabled",true); 
  })
})
