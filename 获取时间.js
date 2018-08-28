var date = new Date();
var year = date.getYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();


var date = new Date();
var year = date.getYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var Tday :int = 0;
var Thour :int =0;
var Tmin :String;
var Shour :String;
if(hour <10)
{
  Tday = day;
  Thour = hour + 15;
}
else 
{
  Tday = day + 1;
  Thour = 15 - (24 - hour);
};

if(min<10)
{
  Tmin = "0" + min;
}
else
{
  Tmin = min;
}

if(Thour<10)
{
  Shour = "0" + Thour;
}
else
{
  Shour = Thour;
}

//f('RtimeA').set(year + "年" + month + "月" + Tday + "日" + Thour + "时" + min + "分" + sec + "秒");
f('Q12HM').set(Shour.toString()+Tmin.toString());
