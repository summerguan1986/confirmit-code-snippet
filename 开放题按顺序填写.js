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
