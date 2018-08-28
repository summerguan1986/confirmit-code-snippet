function totalGrid(qID,lastCode){
  var tempTop:int=0;
  var tempLow:int=90;
  var precodes=f(qID).domainValues();
  for(var i:int=0;i<precodes.length-1;i++){
    var code=precodes[i];
    if(f(qID)[code].toNumber()>tempTop){
      tempTop=f(qID)[code].toNumber();
    }
    if(f(qID)[code].toNumber()<tempLow){
      tempLow=f(qID)[code].toNumber();
    }
  }
  if(f(qID)[lastCode].toNumber()>tempTop || f(qID)[lastCode].toNumber()<tempLow){
    RaiseError();
    SetErrorMessage(CurrentLang(),"“整体评价”是对该部分每个单项评价的综合性评分，理论上分值应介于您之前给出的各单项评分的最小值与最大值之间，请您再次确认您给出的“整体评价”分值。");
  }
}
