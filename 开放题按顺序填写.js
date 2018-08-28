//Method 1
function SetItemFun() {
  var theobj;
  var queID;
  for(var i=1;i<row;i++){
    if(document.getElementById(sQidStr+i).value.length > 0){
      document.getElementById(sQidStr+(i+1)).disabled=false;
    }else{
      for(var j=i+1;j<=row;j++){
        document.getElementById(sQidStr+j).value="";
        document.getElementById(sQidStr+j).disabled=true;
      }
    }
  }
  setTimeout(SetItemFun,100);
}
SetItemFun();
var sQidStr = "A1B_";
var row = 15;



//Method 2,jQuery:
//var formID = $("fieldset:eq(0)").attr("id").replace("fieldset_","");
//:gt(index)  匹配所有大于给定索引值的元素
var formID = $("fieldset:eq(0)").attr("id");
var arr = $('#'+ formID +' input');
arr.attr('disabled', true);
arr.eq(0).attr('disabled', false);
arr.keyup(function() {
  var pos = arr.index($(this));
  if ($(this).val()!="") {
    arr.eq(pos+1).("disabled", false);
  } else {
    $('#' + formID +' input:gt('+pos+')').prop("disabled",true).val("");
  }
});
