var form = f('BB');
var arr = form.domainValues();
var temp = 0;
var scale = 10; //分值
var num = 6;//不能连续相同的个数
for(var i=1;i<=scale;i++) {
  for(var j=0;j<=arr.length-num;j++) {
    if(form[arr[j]]==i&&form[arr[j+1]]==i&&form[arr[j+2]]==i&&form[arr[j+3]]==i&&form[arr[j+4]]==i&&form[arr[j+5]]==i){
        temp = temp + 1;
    } 
  }
}

if( temp > 0 ) {
  RaiseError();
  ClearErrorMessage();
  SetErrorMessage(CurrentLang(),"请确认您的答案");
}
