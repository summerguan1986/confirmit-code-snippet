function checkNull(arr,index)
{
  var error=false;
  var Qp=new Set();

  for(var i=0;i<arr.length;i++)
    { Qp=Qp.union(f(arr[i])); }
  if(Qp.size()==0 && !f('Cnl')[index].toBoolean())
    { error=true; }
  if(error)
  {
RaiseError();
ClearErrorMessage();
SetErrorMessage(CurrentLang(), "如果您的车未出现此面中所描述的问题，请勾选“以上问题均无”，并按“下一步&nbsp;[>>]”继续答题");
}
}
