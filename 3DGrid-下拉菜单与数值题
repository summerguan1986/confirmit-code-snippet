//3D Grid题，第一列是下拉菜单选是否，第二列是填数值，第一列选是，第二列可填，否则不可填
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
