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
