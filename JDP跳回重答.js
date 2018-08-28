//客户需要在DPCA IQS/Apeal这两个程序中的欢迎页面过后，增加一道题 ，附件是更新的甄别问卷，就最前面的S0题，但是有个问题，
//客户说如果选择否，不要记录为screen out，而是清空答案，还是变成not start或者incomplete，让后面那个人进来的时候重新回答这题

//Survey Settings：只勾上“Allow respondents to change their orignal answers”,“Limited Survey - Email invitation survey”


//记录最后一道题的代码改为：
function CaptureQuestions() //改成当前程序里的函数名
{
 if(!f(CurrentForm()).toBoolean())
 {
  f('lastquestion').set(CurrentForm());
}
}

//在S0题后面写脚本

if(f('lastquestion').get()!='S0')
{
  Redirect("https://confirmit.ssisurveys.com/wix5/p67906165.aspx?r="+f('currentid').get()+"&s="+f('currentsid').get()+"&__qid="+f('lastquestion').get(), true)
}
