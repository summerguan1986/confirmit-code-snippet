//判断邮箱格式是否正确
if(!IsEmail(f(CurrentForm())))
{
  RaiseError();
  CLearErrorMessage();
  SetQuestionErrorMessage(CurrentLang(),"Please provide a valid email address.");
}
