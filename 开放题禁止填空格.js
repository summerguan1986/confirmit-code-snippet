//限制开放题不能填空格
function validateOpen(qid)
{
  var tt=qid.toString();
  var TT=tt.Trim();
  if(TT=="")
  {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), "请注意，本题不允许为空，请在相应题目下填入相应答案。");
  }
}



//开放题禁止为空
function validateOpen(qid) {
  if(qid.toBoolean()){
    var tt=qid.toString();
    var TT=tt.Trim();
    if(TT=="") {
      if(f('l').get()==9){
          RaiseError();
          ClearErrorMessage();
          SetQuestionErrorMessage(CurrentLang(), "The input should not be empty！");
         }else{
          RaiseError();
          ClearErrorMessage();
          SetQuestionErrorMessage(CurrentLang(), "请注意，文本框不允许为空，请在相应题目下填入相应答案。");
         }
    }
  }
}


//Open Text List
function validateOpenList(qid) {
  if(qid.toBoolean()) {
      var precodes=qid.domainValues();
      for(var i=0;i<precodes.length;i++){
      var code=precodes[i];
      if (qid[code].toBoolean()) {
         if(qid[code].toString().Trim().length==0) { 
          if(f('l').get()==9){
           RaiseError();
           ClearErrorMessage();
           SetQuestionErrorMessage(CurrentLang(), "The input should not be empty！");
          } else {
           RaiseError();
           ClearErrorMessage();
           SetQuestionErrorMessage(CurrentLang(), "请注意，文本框不允许为空，请在相应题目下填入相应答案。");
          }
        }
      }
        
     }
  }
}
