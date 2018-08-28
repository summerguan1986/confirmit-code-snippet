//开放题不允许填写全数字，全空格或者长度小于2
//Error trap if all numeric response in OE question, all whitespace or less than 2 characters, function below...
function etrap() {
 var st = f(CurrentForm());
 st = st.replace(/ /g,'');

 if(!isNaN(st)||st.toString().length<2) {
  RaiseError();
  ClearErrorMessage();
  SetErrorMessage(CurrentLang(),"");
}  
};
