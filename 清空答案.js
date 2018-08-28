function ClearForm(form)
{
  if(form.COMPOUND) //form with multiple items
  {
    var fcodes = form.domainValues(); //all precodes in form
    for(var i : int = 0;i<fcodes.length;i++) //iterate through precode
    {
       form[fcodes[i]].set(null); //clear item
     }
   }
  else //form with one item
  {
    form.set(null);
  }
}
