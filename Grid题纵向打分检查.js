function checkGrid(fForm){
  var precodes=fForm.domainValues();
  var temp:int=0;

  for(var i:int=0;i<precodes.length;i++){
    var code0=precodes[0];
    var codes=precodes[i];
    if(fForm[codes].get()==fForm[code0].get())
      { temp++; }
  }

  if(temp==precodes.length && precodes.length>1){
    RaiseError();
    ClearErrorMessage();
    SetQuestionErrorMessage(CurrentLang(),"请勿为每个选项选择相同的答案。");
  }
}




//Grid 纵向不能选择相同答案
function checkSpeGrid(fForm){
  var precodes=fForm.domainValues();
  var temp1:int=0;
  var temp2:int=0;

  for(var i:int=0;i<precodes.length;i++){
    var codes=precodes[i];
    if(fForm[codes].any('1'))
    {
      temp1++;
    }
    if(fForm[codes].any('2'))
    {
      temp2++;
    }

  }

  if((temp1==precodes.length ||temp2==precodes.length )&& precodes.length>1){
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(),"请检查您的答案。");
  }
}
