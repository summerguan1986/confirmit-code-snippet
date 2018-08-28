//3D Grid 侧列有其他，请注明，将3D Grid题和Open Text List题放在一个Page里，用Open Text List题去替换3D Grid题其他，请注明那一行里的单选或多选按钮
$("#SummerD5A_97").replaceWith($('input#GridOpen_1').css({'width':'80%','height':'20px'}).closest('td'));
$("#SummerD5B_97").replaceWith($('input#GridOpen_2').css({'width':'80%','height':'20px'}).closest('td'));
$("#SummerD5C_97").replaceWith($('input#GridOpen_3').css({'width':'80%','height':'20px'}).closest('td'));
$("#GridOpen_1").siblings().hide();
$("#GridOpen_2").siblings().hide();
$("#GridOpen_3").siblings().hide();
//纵向单选
//Stard
$("#GridOpen_1").focus(function () {
  $(this).parent().parent().parent().siblings().each(function () {
    $(this).find("a").eq(0).find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/radiored1.png");  
    $(this).find("input[type=radio]").eq(0).attr("checked",false);
  })
})
$("#GridOpen_2").focus(function () {
  $(this).parent().parent().parent().siblings().each(function () {
    $(this).find("a").eq(1).find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/radiored1.png");  
    $(this).find("input[type=radio]").eq(1).attr("checked",false);
  })
})
$("#GridOpen_3").focus(function () {
  $(this).parent().parent().parent().siblings().each(function () {
    $(this).find("a").eq(2).find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/radiored1.png");  
    $(this).find("input[type=radio]").eq(2).attr("checked",false);
  })
})

$(".confirmit-grid tbody tr").each(function() {
  $(this).find(".gridcell").eq(0).click(function () {
    $("#GridOpen_1").val("");
  })
  $(this).find(".gridcell").eq(1).click(function () {
    $("#GridOpen_2").val("");
  })
  $(this).find(".gridcell").eq(2).click(function () {
    $("#GridOpen_3").val("");
  })
})
//End
