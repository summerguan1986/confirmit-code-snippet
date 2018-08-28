var form = f("part");
if(!form.toBoolean())
{
  var codes = form.domainValues();
  var randomNumber  = Math.random()*codes.length;
  var randomIndex = Math.floor(randomNumber);
  var code = codes[randomIndex];
  form.set(code);
}
