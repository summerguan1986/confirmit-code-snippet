//限制开放题只填写数字
if(f('Q2x13_3_other').toBoolean())
{
  var re = /^\+?[1-9][0-9]*$/;
  if( !re.test(f('Q3x13_3_other').get()))
  {
    RaiseError();
    SetErrorMessage(CurrentLang(),"请输入数字");
  }
}
