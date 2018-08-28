//按钮倒计时
//<center><div id="fbshow"></div></center>
$(function(){
  var count=15;
  var countdown=setInterval(function(){
    $("#forwardbutton").attr("disabled",true);
    $("#forwardbutton").hide();
    $("#fbshow").html("下一步按钮将于"+count+"秒后出现");
    count--;
    if (count == -1 )
    {
      clearInterval(countdown);
      $("#forwardbutton").attr("disabled",false);
      $("#fbshow").html("");
      $("#forwardbutton").show();
    }
  },1000);

});
