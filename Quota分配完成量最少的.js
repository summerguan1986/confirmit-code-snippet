//单选题
f('Type').set(GetLeastFilledQuotaCodes('Type',1,f('QS6').get()).toString());
//多选题
f("Type").set(new Array(GetLeastFilledQuotaCodes('Type', 5,f("QS6").get())));


//Quota圈选最少的
var answers = f("Q3Hidden").get(); //codes of all brands selected
for(var i : int = 0;i<answers.length;i++) //iterate through the codes
{
  var code = answers[i]; //current code
  f("quotaQ3").set(code); //try to preset this code
  if(!qf("Age")) //check if quota is not full for this code
  {
    break; //if quota is not full, keep this brand
  }
}
