function CopyMulti(from,to)
{  var precodes = f(from).domainValues();
  for(var i : int = 0;i<precodes.length;i++)
  {
    var code = precodes[i];
    f(to)[code].set(f(from)[code].get());
  }
}
