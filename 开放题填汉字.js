//限制开放题只填汉字
var re = /^[\u4e00-\u9fa5]{0,}$/;
if( !re.test(f('Q12x1a').get()))
{
  RaiseError();
  SetErrorMessage(CurrentLang(),"请填写中文品牌");
}


//限制开放题填汉字，可以带逗号
var re = /^[\u4e00-\u9fa5\,\，]+$/;
for(var i=1;i<=3;i++){
  if(f('Q20a')[i].toBoolean())
  {
    if( !re.test(f('Q20a')[i].get()))
    {
      RaiseError();
      SetErrorMessage(CurrentLang(),"请填写中文");
    }

  }

}
