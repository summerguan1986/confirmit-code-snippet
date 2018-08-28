//开放题不允许填写相同的答案
function uniqueResponse() {
  var cf = f(CurrentForm());
  var s = new Set();
  var arr = cf.get();
  var i;
  
  for(i=0;i<arr.length;i++) 
  {
    s.add(cf[arr[i]])
  }

  if(s.size()!=arr.length) {
    RaiseError();
    ClearErrorMessage();
    SetErrorMessage(CurrentLang(),"请检查您的答案");
    

  }
}
