//3D Grid 下拉菜单选中某一值，文本框可填写，否则文本框不可填写
$(".confirmit-grid tbody").find("tr").each(function() {
  if($(this).find("select").val() === "1")  {
    $(this).find("input.numberinput").attr("disabled",false);
  } else {
    $(this).find("input.numberinput").attr("disabled",true);  
  }
  
  var that = $(this);
  $(this).find("select").change(function() {
    if($(this).val() === "1") {
      that.find("input.numberinput").attr("disabled",false);
    }
    else {
      that.find("input.numberinput").attr("disabled",true);     
    }
  });
});
