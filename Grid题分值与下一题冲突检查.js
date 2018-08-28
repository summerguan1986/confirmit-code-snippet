var minv=Min(f('Q8').values());
var maxv=Max(f('Q8').values());
var v1=f('Q9x1').toNumber();
var v2=f('Q9x2').toNumber();

if(f('Q9x1').toBoolean() && f('Q9x2').toBoolean())
{
  if(minv!=maxv)
  {
    if(f('Q8')[v1].toNumber()!=maxv ||f('Q8')[v2].toNumber()!=minv)
    {
      RaiseError();
      SetQuestionErrorMessage(CurrentLang(), "Please check your answers");
    }
  }
}
