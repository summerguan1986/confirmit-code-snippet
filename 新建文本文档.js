/*
Global模板Mode:
1.Live
2.Test
3.Client
4.QA
5.SP
6.QuestTest

deviceCategory:
1.PC or equivalent
2.Tablet (>=7 inch)
3.Smartphone or equivalent (<7 inch)
4.Other small devices



Demo Link:
https://online.ssisurveys.com/wix/3/p1019653.aspx

//莱卡2017Wave3：
Copy of FS ORD-277311-Q2L7 2017 Lycra project wave3-IPSOS*Li... (p3175466)

//Global模板: 
INTERNAL - SSI Global Template 2017 v3.3 (p1010478)

//适合国内使用的Global模板
2018 Latest new template (p3264119) 

//测试研究用：
Confirmit_Document_Summer (p2368138)

//2018 麦肯锡 麦当劳项目  使用简化后，适合中国用的Global模板：
FS ORD-329252-W2X6 Western food study麦肯锡*Test* (p3145202)

电脑登录新密码 !@#Yxxgyl130330g


//新系统 Demo Link
INTERNAL - [PRODUCTION] Demo for jQuery tools - v3.3 (p1509406)
//测试链接：
https://online.ssisurveys.com/wix/p1509406.aspx?pw=wevl5IW2


 //IPSOS lOGO
 /isa/PYAMLMFAKKOYIBEYNHKRJRBIMIEALXOH/IPSOS/IPSOSLOGO.jpg


//新系统模板
p1396106  云朵模板
p1399534 精灵红模板

//遍历Code
var form = f('SQ7A');
var precodes = form.domainValues();
for(var i = 0; i < precodes.length; i++) {
  var code = precodes[i];
}

//报错
if() {
  RaiseError();
  ClearErrorMessage();
  SetErrorMessage(CurrentLang(),"");
}

//JDP Copy right
? 2017 J.D. Power Commercial Consulting (Shanghai) Co. Ltd. All Rights Reserved.

//替换图片链接域名
//d2n88fe5uqdqty.cloudfront.net/ssicn/2018/ORD-319183-G6Y3/CAD.mp4

//压缩视频

工具：格式工厂
输出配置：AVC低质量和大小，大小限制 10MB


//提示性语句
//排序题，样式设置
拖动或者上下左右移动按钮完成排序
操作说明：点击选项进行排序，再次点击取消排序！
<style>
.questionarea tr,.questionarea tr:last-child{border:none !important;}
td.answerlabel{width:auto;}
td.input{margin-left:0px !important;display:inline !important;}
</style>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//库文件：

//JQUERY LINK
 //d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/jquery-1.10.1.min.js

 //ionicons图标库
 http://ionicons.com/
 //引用ionicons图标时，需导入ionicons的CSS库文件
 //d2n88fe5uqdqty.cloudfront.net/rnd/plugins/ionicons/ionicons-2.0.1/css/ionicons.min.css

 //加载Bootstrap框架
 <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap /3.3.1/css/bootstrap.min.css"/>

//加载Font Awesome图标库
<link rel =“stylesheet”href =“// maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css”/>

//Animate CSS库
//库文件位置C:\Users\summer_guan\Desktop\Confirmit\animate.css

//sublimeText AppData路径
C:\Users\summer_guan\AppData\Roaming\Sublime Text 3\Packages\User
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
一些基础数学理论知识，编程时可能会用到，想到哪里就写到哪里，没有一定的顺序
素数:
质数（prime number）又称素数，有无限个。
质数定义为在大于1的自然数中，除了1和它本身以外不再有其他因数。

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
数组的常用方法：

delete:删除数组元素

var a = new Array(1, 2, 3, 4);
delete a[2];
console.log(a[2]) // undefined
这样和直接把a[2]赋值为undefined类似，不会改变数组长度，也不会改变其他数据的index和value对应关系
//////////////////////////////////////////////////////////////////////////////////////////////////
栈方法
pop和push能够让我们使用堆栈那样先入后出使用数组
var a=new Array(1,2,3);
            a.push(4);
            console.log(a);//[1, 2, 3, 4] 
            console.log(a.length);//4
            console.log(a.pop(a));//4
            console.log(a); //[1, 2, 3] 
            console.log(a.length);//3

队列方法 先入先出
var a=new Array(1,2,3);
            a.unshift(4);
            console.log(a);//[4, 1, 2, 3] 
            console.log(a.length);//4
            console.log(a.shift(a));//4
            console.log(a); //[1, 2, 3] 
            console.log(a.length);//3
////////////////////////////////////////////////////////////////////////////////////////////////////////
splice()方法
splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。该方法会改变原始数组

splice(index, howmany, item1, ..., itemN)
index： 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
howmany： 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
item1, ..., itemN：  可选。向数组添加的新项目。
////////////////////////////////////////////////////////////////////////////////////////////////////////
join()方法
把数组元素（对象调用其toString()方法）使用参数作为连接符连接成一字符串
var a=new Array(1,2,3,4,5);
       console.log(a.join(',')); //1,2,3,4,5 
       console.log(a.join(' ')); //1 2 3 4 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////
slice(start,end)方法
方法用于返回数组中一个片段或子数组，如果只写一个参数返回参数到数组结束部分，如果参数出现负数，则从数组尾部计数
（-3意思是数组倒第三个，一般人不会这么干，但是在不知道数组长度，想舍弃后n个的时候有些用，不过数组长度很好知道。。。。，好纠结的用法），
如果start大于end返回空数组，值得注意的一点是slice不会改变原数组，而是返回一个新的数组。
var a=new Array(1,2,3,4,5);
            console.log(a); //[1, 2, 3, 4, 5] 
            console.log(a.slice(1,2));//2
            console.log(a.slice(1,-1));//[2, 3, 4] 
            console.log(a.slice(3,2));//[]
            console.log(a); //[1, 2, 3, 4, 5]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
concat(array)
看起来像是剪切，但这个真不是形声字，concat方法用于拼接数组，a.concat(b)返回一个a和b共同组成的新数组，同样不会修改任何一个原始数组，也不会递归连接数组内部数组
var a=new Array(1,2,3,4,5);
            var b=new Array(6,7,8,9);
            console.log(a.concat(b));//[1, 2, 3, 4, 5, 6, 7, 8, 9] 
            console.log(a); //[1, 2, 3, 4, 5] 
            console.log(b); //[6, 7, 8, 9]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
reverse()
方法用于将数组逆序，与之前不同的是它会修改原数组


var a=new Array(1,2,3,4,5);
            a.reverse();
            console.log(a); //[5, 4, 3, 2, 1]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
sort
sort方法用于对数组进行排序，当没有参数的时候会按字母表升序排序，如果含有undefined会被排到最后面，对象元素则会调用其toString方法，
如果想按照自己定义方式排序，可以传一个排序方法进去，很典型的策略模式，同样sort会改变原数组。
var a=new Array(5,4,3,2,1);
       a.sort();
       console.log(a);//[1, 2, 3, 4, 5]
不过······


var a=new Array(7,8,9,10,11);
       a.sort();
       console.log(a);//[10, 11, 7, 8, 9]
因为按照字母表排序，7就比10大了，这时候我们需要传入自定义排序函数
var a=new Array(7,8,9,10,11);
           a.sort(function(v1,v2){
            return v1-v2;
           });
       console.log(a);//[7, 8, 9, 10, 11]
sort内部使用快速排序，每次比较两个元素大小的时候如果没有参数，则直接判断字母表，如果有参数，
则把正在比较的两个参数传入自定义方法并调用（正在比较的两个数会传给自定义方法的v1、v2），
如果返回值大于0表示v1>v2，如果等于0，表示v1=v2，如果小于0，表示v1<v2，
其实我们传入的方法就是告诉sort怎么比较两个元素谁大谁小，至于排序移动元素过程人家写好了。    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
js数组循环遍历数组内所有元素的方法

在js中数组遍历最简单的办法就是使用for然后再利用arr.length长度作为for最大限度值即可解决了，下面我们来看看一些有用的实例。



for(){}遍历数组

<script type="text/javascript">
 <!--
var arr = new Array(13.5,3,4,5,6);
for(var i=0;i<arr.length;i++){
 arr[i] = arr[i]/2.0;
}
alert(arr);
 //-->
 </script>

for in循环遍历数组


<html>
<body>
<script type="text/javascript">
var x
var mycars = new Array()
mycars[0] = "Saab"
mycars[1] = "Volvo"
mycars[2] = "BMW"
for (x in mycars)
{
document.write(mycars[x] + "<br />")
}
</script>
</body>
</html>
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
js数组与字符串的相互转换方法

1、数组转字符串
需要将数组元素用某个字符连接成字符串，示例代码如下：

var a, b;
a = new Array(0,1,2,3,4);
b = a.join("-");

2、字符串转数组

实现方法为将字符串按某个字符切割成若干个字符串，并以数组形式返回，示例代码如下：


var s = "abc,abcd,aaa";
ss = s.split(",");// 在每个逗号(,)处进行分解。   
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//按钮倒计时
<center><div id="fbshow"></div></center>
$(function(){
  var count=15;
  var countdown=setInterval(function(){
    $("#forwardbutton").attr("disabled",true);
    $("#forwardbutton").hide();
    $("#fbshow").html("下一步按钮将于"+count+"秒后出现");
    count--;
    if (count == -1 )
    {
      clearInterval(countdown);
      $("#forwardbutton").attr("disabled",false);
      $("#fbshow").html("");
      $("#forwardbutton").show();
    }
  },1000);

});

//直接在按钮位置上显示倒计时，适用Global Template
countdown(20);
function countdown(val){
$('#forwardbutton').hide();
  $('<div id="count" style="color:red;font-size:20px;display:inline-block;position:relative;bottom:30px;float:right"></div>').appendTo($('.nav'));
$('#count').html(val);
var timer=null;
timer=setInterval(function(){  
   val--;
  $('#count').html(val);
   if(val<1){
     $('#count').remove();
     $('#forwardbutton').show();
     clearInterval(timer);
   }  
},1000);

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放题按顺序填写
function SetItemFun() {
  var theobj;
  var queID;
  for(var i=1;i<row;i++){
    if(document.getElementById(sQidStr+i).value.length > 0){
      document.getElementById(sQidStr+(i+1)).disabled=false;
    }else{
      for(var j=i+1;j<=row;j++){
        document.getElementById(sQidStr+j).value="";
        document.getElementById(sQidStr+j).disabled=true;
      }
    }
  }
  setTimeout(SetItemFun,100);
}
SetItemFun();
var sQidStr = "A1B_";
var row = 10;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放题按顺序填写,jQuery:
//var formID = $("fieldset:eq(0)").attr("id").replace("fieldset_","");
//:gt(index)  匹配所有大于给定索引值的元素
var formID = $("fieldset:eq(0)").attr("id");
var arr = $('#'+ formID +' input');
arr.attr('disabled', true);
arr.eq(0).attr('disabled', false);
arr.keyup(function() {
  var pos = arr.index($(this));
  if ($(this).val()!="") {
    arr.eq(pos+1).("disabled", false);
  } else {
    $('#' + formID +' input:gt('+pos+')').prop("disabled",true).val("");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//随机抽取code
var fromForm = f("");
var toForm = f("");
const numberOfItems : int = 3;

var available = new Set();
available = available.union(fromForm);
var selected = new Set();
if(available.size() <= numberOfItems)
{
  selected = available;
}
else
{
  while(selected.size() < numberOfItems)
   {
    var codes = available.members();
    var randomNumber : float = Math.random()*codes.length;
    var randomIndex : int = Math.floor(randomNumber);
    var selectedCode = codes[randomIndex];
    available.remove(selectedCode);
    selected.add(selectedCode);
   }
}

toForm.set(selected);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//随机为本题赋值
var form = f("part");
if(!form.toBoolean())
{
  var codes = form.domainValues();
  var randomNumber  = Math.random()*codes.length;
  var randomIndex = Math.floor(randomNumber);
  var code = codes[randomIndex];
  form.set(code);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//鼠标悬停显示文本，待添加
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放题与选项框互斥
$(document).ready(function(){
  var str1="A2"
  var str2="A2None_97"

//如果焦点锁定文本框就要清空，则用focus, 如果文本框需要输入，则用keydown
$("#"+str1).focus(function(){

 $("#"+str2).attr("checked",false);
});
$("#"+str2).change(function(){

 $("#"+str1).attr("value","");
});

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//清空答案
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//限制开放题只填写数字 开放题填数字
if(f('Q2x13_3_other').toBoolean())
{
  var re = /^\+?[1-9][0-9]*$/;
  if( !re.test(f('Q3x13_3_other').get()))
  {
    RaiseError();
    SetErrorMessage(CurrentLang(),"请输入数字");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//限制开放题不能填空格
function validateOpen(qid)
{
  var tt=qid.toString();
  var TT=tt.Trim();
  if(TT=="")
  {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), "请注意，本题不允许为空，请在相应题目下填入相应答案。");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//限制开放题只填汉字
var re = /^[\u4e00-\u9fa5]{0,}$/;
if( !re.test(f('Q12x1a').get()))
{
  RaiseError();
  SetErrorMessage(CurrentLang(),"请填写中文品牌");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//限制开放题填汉字，可以带逗号
var re = /^[\u4e00-\u9fa5\,\，]+$/;
for(var i=1;i<=3;i++){
  if(f('Q20a')[i].toBoolean())
  {
    if( !re.test(f('Q20a')[i].get()))
    {
      RaiseError();
      SetErrorMessage(CurrentLang(),"请填写中文");
    }

  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//跳转链接
Radirect("Client link?&r="+f('ID').get()+"&s="+f('SID').get());
//或者
Radirect("Client link?&r="+CurrentID()+"&s="+CurrentSID());
//发给客户的链接
http://confirmit.ssisurveys.com/wix/p62756264.aspx?r=x&s=xxxxxxxx&__qid=C3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//隐藏进度条数字
#progressbarscale td{display:none;visibility:hidden;}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放题与多选框互斥
$(function(){
 $("#Q14None_2").click(function(){
   $("#Q14_1").val("");

 })
})

$(function(){
 $("#Q14_1").focus(function(){
  $("#Q14None_2").attr("checked",false);
})

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//检查3D Grid开放题
//Check 3D Grid Open Text
//QID--3dgrid name
//m--3dgrid other code array
//n--3dgrid internal question count
//demo-check3DOther("q56",[3,4],2)
function check3DOther(QID:String,m:String,n:int)
{
  var arr=new Array();
  var storage1=new Array();
  var storage2=new Array();
  var flag=new Array();
  arr=m.split(",");
  var temp1;
  var temp2;
  for(var t=0;t<arr.length;t++)
  {
    temp1=0;
    temp2=0;
    
    var str=QID+"_"+arr(t)+"_other";

    if(f(str).toBoolean())
    {
      for(var i=0;i<n;i++)
      {
        if(f(QID+"x"+(i+1)).any(arr(t)))
        {
          temp1++;
        }
      }
    }else
    {
      for(var j=0;j<n;j++)
      {
        if(f(QID+"x"+(j+1)).any(arr(t)))
        {
          temp2++;
        }
      }
    }
    if(f(str).toBoolean()|| temp2>0)
    {
      flag(t)=1;
    }
    storage1(t)=temp1;
    storage2(t)=temp2;
  }
  for(var s=0;s<storage1.length;s++)
  {
   if(flag(s)==1)
   {
    if(storage1(s)==0){
      RaiseError();
      SetQuestionErrorMessage(CurrentLang(),"请为其他请注明选择相应的选项。");
    }
    if(storage2(s)>0){
      RaiseError();
      SetQuestionErrorMessage(CurrentLang(),"请在注明框中填写相应的内容。");
    }
  }
}

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//只允许填数字
var re = /^\+?[1-9][0-9]*$/;
if( !re.test(f('Q3x13_3_other').get()))
{
  RaiseError();
  SetErrorMessage(CurrentLang(),"请输入数字");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放题只允许填数字，并且可保留一位小数
var re = /^(\d+\.\d{1,1}|\d+)$/;
if( !re.test(f('Q3x9_5_other').get()))
{
  RaiseError();
  SetErrorMessage(CurrentLang(),"请输入数字，且最多保留一位小数");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//检查Grid打分是否全部一样
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//截取code

ClearForm(f('category3'));

var cat :String = f('random3').get();
var arr = cat.split(",");

for(var i=1;i<=arr.length;i++)
{
  f('category3')[i].set(arr[i-1])
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//获取label  不要直接用categoryLabels()  Label中可能会有逗号

ClearForm(f('BC2Label'));

var cat :String = f('BC2Hidden').get();
var arr = cat.split(",");

for(var i=1;i<=arr.length;i++)
{
  f('BC2Label')[i].set(f('BC2Hidden')[arr[i-1]].label());
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid 半开放 其他请注明，不填写答案不能选中 Grid其他请注明
$(".confirmit-grid").find("input[type=text]").parent().siblings().hide();
$(".confirmit-grid").find("input[type=text]").keyup(function() {
  if($(this).val().trim().length > 0) {
    $(this).parent().siblings().show(); 
  } else {
    $(this).parent().siblings().hide();
  }
  
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//获取随机顺序，A15Order是Open Text题
var cat :String = f('Rorder').domainValues();
var arr = cat.Split(",");

f('A15order_1').set(arr[0]);
f('A15order_2').set(arr[1]);
f('A15order_3').set(arr[2]);

//题目的题干部分：
//<span style="color:red">共3部分，这是第^f('A15order')['1'].get()=='1'?"1":f('A15order')['2'].get()=='1'?"2":f('A15order')['3'].get()=='1'?"3":""^部分</span><br />
//<span style="color:red">共3部分，这是第^f('A15order')['1'].get()=='2'?"1":f('A15order')['2'].get()=='2'?"2":f('A15order')['3'].get()=='2'?"3":""^部分</span><br />
//<span style="color:red">共3部分，这是第^f('A15order')['1'].get()=='3'?"1":f('A15order')['2'].get()=='3'?"2":f('A15order')['3'].get()=='3'?"3":""^部分</span><br />

//假如从多个部分里面 随机出示3部分  并且显示提示信息（提示这个是第几个出示的）

//首先 获取需要出示出来的部分
ClearForm(f('getThree'));
if(f('Qbrand').any('1','6')) {f('getThree')['1'].set('1')}
  if(f('Qbrand').any('2','7')) {f('getThree')['2'].set('1')}
    if(f('Qbrand').any('3','8')) {f('getThree')['3'].set('1')}
      if(f('Qbrand').any('4','9')) {f('getThree')['4'].set('1')}
        if(f('Qbrand').any('5','10')) {f('getThree')['5'].set('1')}

//然后 获取随机顺序
var cat :String = f('getThree').get(); 
var arr = cat.Split(",");

f('mainOrder_1').set(arr[0]);
f('mainOrder_2').set(arr[1]);
f('mainOrder_3').set(arr[2]);

//最后 显示提示信息
//<span style="color:red">^f('mainOrder')['1'].get()=='1'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let’s start with the first product range.":f('mainOrder')['2'].get()=='1'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens.":f('mainOrder')['3'].get()=='1'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We’re almost there!":""^</span>

//<span style="color:red">^f('mainOrder')['1'].get()=='2'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let’s start with the first product range.":f('mainOrder')['2'].get()=='2'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens.":f('mainOrder')['3'].get()=='2'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We’re almost there!":""^</span>

//<span style="color:red">^f('mainOrder')['1'].get()=='3'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let’s start with the first product range.":f('mainOrder')['2'].get()=='3'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens. ":f('mainOrder')['3'].get()=='3'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We’re almost there!":""^</span>

//<span style="color:red">^f('mainOrder')['1'].get()=='4'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let’s start with the first product range.":f('mainOrder')['2'].get()=='4'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens. ":f('mainOrder')['3'].get()=='4'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We’re almost there!":""^</span>

//<span style="color:red">^f('mainOrder')['1'].get()=='5'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let’s start with the first product range.":f('mainOrder')['2'].get()=='5'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens. ":f('mainOrder')['3'].get()=='5'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We’re almost there!":""^</span>


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//为完成量最少的Quota赋值
//单选题
f('Type').set(GetLeastFilledQuotaCodes('Type',1,f('QS6').get()).toString());
//多选题
f("Type").set(new Array(GetLeastFilledQuotaCodes('Type', 5,f("QS6").get())));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//移除单选按钮选中状态
$("#Q3_1_1").removeAttr("checked");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//数值题 其他请注明，当填写答案后，出示数值框
if($('#Q4x12_7_other').val().trim().length>0){
  $('#Q4x12_7').show();
}else{
  $('#Q4x12_7').hide().val('');
}

$('#Q4x12_7_other').on("keyup",function(){
  if($(this).val().trim().length>0){
    $('#Q4x12_7').show();
  }else{
    $('#Q4x12_7').hide().val('');
  }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//点击图片放大
/*
<script type="text/javascript" src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/testTW/highslide.js"></script>
<link rel="stylesheet" type="text/css" href="https://d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/testTW/highslide.css" />
<script type="text/javascript">
hs.graphicsDir = 'https://d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/testTW/highslide/graphics/';
hs.wrapperClassName = 'borderless';
hs.showCredits = false;
</script>
<span><font size="3">点击图片可放大</font></span>

<a href="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style1.jpg"  width="400" class="highslide" onclick="return hs.expand(this)"><img src="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style1.jpg" width="200"  /></a>
<a href="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style2.jpg"  width="400" class="highslide" onclick="return hs.expand(this)"><img src="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style2.jpg" width="200"  /></a>
<a href="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style3.jpg"  width="400" class="highslide" onclick="return hs.expand(this)"><img src="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style3.jpg" width="200"  /></a>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid   里面是Grid+Open Text List  Open在Grid里选到的时候才出示,未测试
$(document).ready(function(){
  function showopen(curclass,col)
  {
    $(curclass).find('input[type="text"]').hide();

    $(curclass).find('tr').each(function(){
      var trthat=$(this);
      trthat.find('td').each(function(j){
        var tdthat=$(this);

        tdthat.find('input[type="radio"]').each(function(){

          if($(this).is(":checked")&&j==col)
          {
            $(this).parent().next().find('input[type="text"]').show();
          }else
          {
            $(this).parent().parent().find('input[type="text"]').hide();
            $(this).parent().next().find('input[type="text"]').val("");
          }

        });

      });

    });
  }
  showopen(".answers",8);
  $('.answers').find('input[type="radio"]').click(function(){
    showopen(".answers",8);
  });
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//定义Array
var a = new Array('2','6','7','8','9','11');

for(var i=0;i<a.length;i++)
{
  var code = a[i];
  for(var j=1;j<=10;j++)
  {
    if(f('Q2x3b_'+j)==code)
    {
      f('QBrand')[code].set('1');
    }
  }
  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid 半开放题 隐藏按钮 填写后出示,未测试
$(document).ready(function(){
  function OpenText(str)
  {
    $(str).parent().parent().find('td').each(function(i){
      if(i>0){
        $(this).find('input').hide();
      }
    });
    
    var that=$(str);
    var len=that.val().length;

    that.parent().next().find('input').each(function(){

      if(len>0){

       $(this).show();
       $(this).parent().next().find('input').show();

     }else
     {
      $(this).val('');
      $(this).hide();
    }
    
  });
  }
  
  
  OpenText(".othertextfield");
  
  $('.othertextfield').bind("keyup","keydown",function(){
    OpenText(".othertextfield");
  });
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放题填写的品牌圈到复选题里
for(var i=1;i<=10;i++){
  if(f('B2_'+i).get().indexOf("博世")!=-1) {f('B3')['1'].set('1')}
  if(f('B2_'+i).get().toUpperCase().indexOf("BOSCH")!=-1) {f('B3')['1'].set('1')}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//未测试
//#inshow{width:800px;margin:10px auto;border:2px solid #ccc;background:#fff;border-radius:4px;box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5),inset 0px 1px 0px 0px rgba(250, 250, 250, 0.5);text-align:center;vertical-align:middle;}
//#soushow{min-width:200px;margin:10px auto;border:2px solid #eb4f38;background:#fff;border-radius:10px;box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5),inset 0px 1px 0px 0px rgba(250, 250, 250, 0.5);text-align:center;}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AnswerOrder
var ordered = AnswerOrder("cars");
for(var i=0;i<ordered.length;i++)
{
  f("rank"+(i+1)).set(ordered[i]);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid题 鼠标悬停变色
td.hover {background:orange;}

$(function(){
  $(".gridcell").mouseover(function(){
    $(this).parent().css("background","orange");
  }).mouseout(function(){
    $(this).parent().removeAttr("style");
  });

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3DGrid 鼠标悬停变色
$(document).ready(function(){
  var hover_index = 0;
  $("#fieldset_switch2ae table td").hover(function (){
    hover_index =  $(this).parent().find('td').index(this);
    $("#fieldset_switch2ae table tr").find("td:eq("+hover_index+")").addClass("hover");
  },function(){
    $("#fieldset_switch2ae table tr").find("td:eq("+hover_index+")").removeClass("hover");
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////优选
/**
 * @param arr 多选题已选中选项对应的code数组
 * @param chooseArr 优先选择的选项对应的code数组
 * @param removeArr 需要排除的选项对应的code数组
 * @param chooseCount 随机选中的选项个数
 */
 function randomChoose(arr, chooseArr, removeArr, chooseCount) {
  var checkObj = {},
  unCheckObj = {},
  chooseCode = function(list, codes, count, remObj) {
    while (codes.length < count) {
      var index = Math.floor(Math.random() * list.length);
      if (!remObj[list[index] + '']) {
        codes.push(list[index]);
      }
      list.splice(index, 1);
    }
  },
  fillObj = function(list, obj) {
    if (list && list.length > 0) {
      for (var i = 0, len = list.length; i < len; i++) {
        obj[list[i] + ''] = 1;
      }
    }
  },
  removeCode = function(list, obj) {
    var result = [];
    if (list && list.length > 0) {
      for (var i = 0, len = list.length; i < len; i++) {
        if (!obj[list[i] + '']) {
          result.push(list[i]);
        }
      }
    }
    return result;
  };

  fillObj(chooseArr, checkObj);
  fillObj(removeArr, unCheckObj);

  if (arr.length > chooseCount) {
    var brr = [],
    crr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (checkObj[arr[i] + '']) {
        brr.push(arr[i]);
      } else {
        crr.push(arr[i]);
      }
    }

    if (brr.length > chooseCount) {
      arr = [];
      chooseCode(brr, arr, chooseCount, unCheckObj);
    } else {
      arr = brr;
      chooseCode(crr, arr, chooseCount, unCheckObj);
    }
  }

  return removeCode(arr, unCheckObj);
}

//优选2
/*
@param codes 多选题已选到的选项Code数组
@param listOne 第一个需要优选的数组
@param listTwo 第二个需要优选的数组
@param preOne 第一个优选数组中必选的Code数组
@param preTwo 第二个优选数组中必选的Code数组
@param oneCount 第一个优选数组随机选中的个数
@param TwoCount 第二个优选数组随机选中的个数
*/
function randomChooseTwo(codes, listOne, listTwo, preOne, preTwo, oneCount, twoCount) 
{
  var checkObjOne = {},
  checkObjTwo = {},
  preObjeOne = {},
  preObjTwo = {},
  fillObj = function(list, obj) {
    if (list && list.length > 0) {
      for (var i = 0, len = list.length; i < len; i++) {
        obj[list[i] + ''] = 1;
      }
    }
  },
  choosePreObj = function(list, arr, obj, brr) {
    for (var i = 0, len = list.length; i < len; i++) {
      if (obj[list[i] + '']) {
        arr.push(list[i]);
      }
    }
    for(var i=0, len=brr.length; i<len; i++){
     removeCode(list, brr[i]);
   }
 },
 chooseObj = function(list, arr, count, obj) {
  while (arr.length < count) {
    var index = Math.floor(Math.random() * list.length);
    if (!obj[list[index] + '']) {
      arr.push(list[index]);
    }
    list.splice(index, 1);
  }
},
chooseObj2 = function (list, arr, count) {
 while (arr.length < count) {
  var index = Math.floor(Math.random() * list.length);
  if (!isContain(arr, list[index])) {
    arr.push(list[index]);
  }
  list.splice(index, 1);
}
},
isContain = function (arr, code){
 var flag = false;
 for(var i=0, len=arr.length; i<len; i++){
  if(parseInt(code, 10) === parseInt(arr[i], 10)){
   flag = true;
   break;
 }
}
return flag;
},
removeCode = function(arr, code) {
  for(var i=0, len=arr.length; i<len; i++){
    if(parseInt(code, 10) === parseInt(arr[i], 10)){
     arr.splice(i, 1);
     break;
   }
 }
},
codeOne = [],
codeTwo = [];

fillObj(listOne, checkObjOne);
fillObj(listTwo, checkObjTwo);
fillObj(preOne, preObjeOne);
fillObj(preTwo, preObjTwo);

var arr1 = [],
arr2 = [];
for (var i = 0, len = codes.length; i < len; i++) {
  if (checkObjOne[codes[i] + '']) {
    codeOne.push(codes[i]);
  } else if (checkObjTwo[codes[i] + '']) {
    codeTwo.push(codes[i]);
  }
}

if (codeOne.length > oneCount) {
        // codeOne随机
        choosePreObj(codeOne, arr1, preObjeOne, preOne);
        chooseObj(codeOne, arr1, oneCount, preObjeOne);
        if (codeTwo.length > twoCount) {
            // condeTwo各随机选
            choosePreObj(codeTwo, arr2, preObjTwo, preTwo);
            chooseObj(codeTwo, arr2, twoCount, preObjTwo);
          } else {
            // codeOne填补codeTwo
            if((codeOne.length + codeTwo.length) > twoCount){
             chooseObj(codeOne, codeTwo, twoCount, {});
           }else{
             for(var i=0, len=codeOne.length; i<len; i++){
              codeTwo.push(codeOne[i]);
            }
            chooseObj2(listTwo, codeTwo, twoCount);
          }
          arr2 = codeTwo;
        }
      } else {
        if (codeTwo.length > twoCount) {
            // codeTwo随机，codeTwo填补codeOne
            choosePreObj(codeTwo, arr2, preObjTwo, preTwo);
            chooseObj(codeTwo, arr2, twoCount, preObjTwo);
            if((codeOne.length + codeTwo.length) > oneCount){
             chooseObj(codeTwo, codeOne, oneCount, {});
           }else{
             for(var i=0, len=codeTwo.length; i<len; i++){
              codeOne.push(codeTwo[i]);
            }
            chooseObj2(listOne, codeOne, oneCount);
          }
          arr1 = codeOne;
        } else {
            // codeOne、codeTwo剩余随机
            chooseObj2(listOne, codeOne, codeOne.length);
            chooseObj2(listTwo, codeTwo, codeTwo.length);
            arr1 = codeOne;
            arr2 = codeTwo;
          }
        }
        for (var i = 0, len = arr2.length; i < len; i++) {
          arr1.push(arr2[i]);
        }
        return arr1;
      }

/////项目中调用
ClearForm(f('HidA2x1'));

var codes=f('A2x1').get();

f('HidA2x1').set(randomChooseTwo(codes, [1,2,3,4,5,6,7,8], [13,14,15,16,17,18], [6], [13], 4, 4));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JDP 整体评价评分不得高于或低于所有评分
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Copy Multi
function CopyMulti(from,to)
{  var precodes = f(from).domainValues();
  for(var i : int = 0;i<precodes.length;i++)
  {
    var code = precodes[i];
    f(to)[code].set(f(from)[code].get());
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//checkNull 
function checkNull(arr:String[],index:int)
{
  var error:Boolean=false;
  var Qp=new Set();

  for(var i:int=0;i<arr.length;i++)
    { Qp=Qp.union(f(arr[i])); }
  if(Qp.size()==0 && !f('Cnl')[index].toBoolean())
    { error=true; }
  if(error)
  {
//    f('cnl')[index].set('1');
RaiseError();
//    SetErrorMessage(CurrentLang(), "请确认您的车从未出现过此页中所描述的问题, 请按“下一页[>>]”按钮确认，并进入下一页。");
SetErrorMessage(CurrentLang(), "如果您的车未出现此面中所描述的问题，请勾选“以上问题均无”，并按“下一步&nbsp;[>>]”继续答题");
}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//图片自适应
//在html里面插入图片，如果想让图片自适应屏幕的小而不是宽高固定不变可以在css代码里加入
img { height: auto; width: auto\9; width:100%; } 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid题选项随机出示，连续5个不能选择相同的分数
var form = f('BB');
var arr = form.domainValues();
var temp :int =0;
var scale :int =10 //分值
var num :int = 6;//不能连续相同的个数
for(var i=1;i<=scale;i++)
{
  for(var j=0;j<=arr.length-num;j++)
  {
    if(form[arr[j]]==i&&form[arr[j+1]]==i&&form[arr[j+2]]==i&&form[arr[j+3]]==i&&form[arr[j+4]]==i&&form[arr[j+5]]==i){temp = temp + 1} 
  }
}

if( temp > 0 ) 
{
  RaiseError();
  ClearErrorMessage();
  SetErrorMessage(CurrentLang(),"请确认您的答案");
}

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  //排序题 序号显示文字
  
  $(function(){
   $("font").eq(0).text("最想购买的");
   $("font").eq(1).text("第二想购买的");
   $("font").eq(2).text("第三想购买的");
   $("font").eq(3).text("第四想购买的");
   $("font").eq(4).text("第五想购买的");
   $("font").eq(5).text("最不想购买的");
   
 })

  $(function(){
   $("font").eq(0).text("最信任的品牌");
   $("font").eq(1).text("第二信任");
   $("font").eq(2).text("第三信任");
   $("font").eq(3).text("第四信任");
   $("font").eq(4).text("第五信任");

 })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
//Numeric填写百分比，自动计算
<script type="text/javascript">
$(document).ready(function(){
  var str1="Q10_1";
  var str2="Q10_2";

  $("#"+str1).keydown(function(){
   var v1=$("#"+str1).val();
   $("#"+str2).val(100-v1);
 });
  $("#"+str1).keyup(function(){
    var v1=$("#"+str1).val();
    $("#"+str2).val(100-v1);
  });

  $("#"+str2).keydown(function(){
   var v2=$("#"+str2).val();
   $("#"+str1).val(100-v2);
 });
  $("#"+str2).keyup(function(){
    var v2=$("#"+str2).val();
    $("#"+str1).val(100-v2);
  });

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//判断设备类型  参考项目号FS ORD-270775-T8D9-Express study study-Bain*test* (p67024370)
//Script:

for(var i=1;i<9;i++)
{
  f('HidDevice')[i].set(null);
}

f('HidDevice')['1'].set(GetDeviceInfo().IsDesktop);
f('HidDevice')['2'].set(GetDeviceInfo().IsTouch);
f('HidDevice')['3'].set(GetDeviceInfo().IsTablet);
f('HidDevice')['4'].set(GetDeviceInfo().IsGeneric);
f('HidDevice')['5'].set(GetDeviceInfo().IsMobile);
f('HidDevice')['6'].set(GetDeviceInfo().ScreenResolution);
f('HidDevice')['7'].set(GetDeviceInfo().DeviceType);
f('HidDevice')['8'].set(GetDeviceInfo().DeviceType.toString());

//隐藏题
IsDesktop:  1
IsTouch:  2
IsTablet: 3
IsGeneric:  4
IsMobile: 5
ScreenResolution: 6
DeviceType: 7
DeviceType.toString():  8

//Script
if(f('HidDevice')['1'].toString()=='True'){f('Device').set('1');}
if(f('HidDevice')['3'].toString()=='True'){f('Device').set('2');}
if(f('HidDevice')['4'].toString()=='True'){f('Device').set('3');}
if(f('HidDevice')['5'].toString()=='True'){f('Device').set('4');}

//隐藏题
PC/Desktop  1
Tablet  2
Generic 3
Mobile  4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//JDP 进度条
$(document).ready(function(){
  function chunk(array, chunkSize) {
   var i, j, temparray = [], chunk = chunkSize;
   for (i = 0, j = array.length; i < j; i += chunk) {
    temparray.push(array.slice(i, i + chunk));
  }
  return temparray;
}

function getData(current, toSwitch) {
 var qidsIndex = _.indexOf(qids, current);
 var diffIndex = _.indexOf(diff, current);
 var wQidIdx = (qidsIndex + 1) * weight;
 var wDiffIdx = (diffIndex + 1) * weight;
 var wDiffAdd = wDiffIdx + ((diffIndex + 1) * diffWeight);

     //console.log([qidsIndex, current, wQidIdx.toFixed(2), wDiffAdd.toFixed(2)]);
     toSwitch = toSwitch || false;
     return !toSwitch ? wQidIdx.toFixed(2) : wDiffAdd.toFixed(2);
   }

   try{
     //var qids = ['Intro1', 'Intro2', 'S1', 'infoScreener2', 'S2', 'S3', 'S4a', 'S4b', 'S4c', 'InfoQ3', 'Q3', 'Q4', 'IntroQ5', 'Q5A', 'Q5B', 'Q5C', 'Q5D', 'Q5E', 'Q5F', 'Q5G', 'Q5H', 'Q5I', 'Q6', 'Q6a', 'infoQ6', 'i205', 'i126', 'i295', 'i213', 'i127', 'i296', 'Q6ax3', 'i128', 'i297', 'i229', 'i129', 'i298', 'i237', 'i118', 'i299', 'i245', 'i119', 'i300', 'i253', 'i120', 'i301', 'i261', 'i121', 'i302', 'i173', 'i122', 'i303', 'i181', 'i123', 'i304', 'i189', 'i124', 'i305', 'i197', 'i125', 'i306', 'i157', 'i114', 'i307', 'i165', 'i115', 'i308', 'i149', 'i116', 'i309', 'i269', 'i117', 'i310', 'i277', 'i112', 'i311', 'i285', 'i113', 'i312', 'i293', 'i111', 'i313', 'Q6ax20', 'i110', 'i314', 'i1122', 'i1124', 'i1126', 'i1105', 'i1107', 'i1115', 'i1093', 'i1095', 'i1098', 'i1081', 'i1083', 'i1086', 'i1066', 'i1068', 'i1153', 'i1074', 'i1053', 'i1055', 'i1059', 'i1040', 'i1042', 'i1046', 'i1025', 'i1027', 'i1033', 'Q6ax29', 'i1157', 'i1160', 'iQ6ax30', 'i30', 'i1176', 'iQ6ax31', 'i1186', 'i1188', 'iQ6ax32', 'i1208', 'i1210', 'iQ6ax33', 'i1197', 'i1199', 'iQ6ax34', 'i1230', 'i1232', 'iQ6ax35', 'i1219', 'i1221', 'Q7', 'Q8', 'Q9A', 'Q9B', 'Q10', 'Q11A', 'Q11B', 'Q11C', 'Q12', 'Q13A', 'Q13B', 'Q14A', 'Q14B', 'Q15', 'Q16', 'Q17A', 'Q17B', 'Q17C', 'Q17D', 'Q17E', 'Q17F', 'Q17G', 'Q17H', 'Q18', 'background', 'Q20', 'Q22', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29', 'infoAppend', 'D26f', 'F22Af', 'A18Af', 'H22f', 'T16f1', 'T16f2', 'infoEdu', 'D38f','F20f', 'T10T13f', 'Q636f','i1154'];
     var qids = ['Intro1', 'Intro2', 'S1', 'infoScreener2', 'S2', 'S3', 'S4a', 'S4b', 'S4c', 'InfoQ3', 'Q3', 'Q4', 'IntroQ5', ^f('qrotate').domainLabels()^ , 'Q6', 'infombp','Q6a', 'infoQ6', ^f('qrandom').domainLabels()^ , 'Q7', 'Q8', 'Q9A', 'Q9B', 'Q10', 'Q11A', 'Q11B', 'Q11ca','Q11cb' ,'Q12', 'Q13A', 'Q13Ba','Q13Bb', 'Q14A', 'Q14B', 'Q15', 'Q16', 'Q17A', 'Q17B', 'Q17C', 'Q17D', 'Q17E', 'Q17F', 'Q17G', 'Q17H', 'Q18', 'background', 'Q20', 'Q22', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29', 'infoAppend', 'D26f', 'F22Af', 'A18Af', 'H22f', 'T16f1', 'T16f2', 'infoEdu', 'D38f','F20f', 'T10T13f', 'Q636f'];    
     //var Q6Rc = _.range(1, 36, 1);
     var Q6Rc = [^f('qrandom').domainValues()^];
     Q6Rc = _.difference(Q6Rc, [^f('Q6Rc').get()^]);

     var Q6RcQids = {
      1 : ["i205", "i126", "i295"],
      2 : ["i213", "i127", "i296"],
      3 : ["Q6ax3", "i128", "i297"],
      4 : ["i229", "i129", "i298"],
      5 : ["i237", "i118", "i299"],
      6 : ["i245", "i119", "i300"],
      7 : ["i253", "i120", "i301"],
      8 : ["i261", "i121", "i302"],
      9 : ["i173", "i122", "i303"],
      10 : ["i181", "i123", "i304"],
      11 : ["i189", "i124", "i305"],
      12 : ["i197", "i125", "i306"],
      13 : ["i157", "i114", "i307"],
      14 : ["i165", "i115", "i308"],
      15 : ["i149", "i116", "i309"],
      16 : ["i269", "i117", "i310"],
      17 : ["i277", "i112", "i311"],
      18 : ["i285", "i113", "i312"],
      19 : ["i293", "i111", "i313"],
      20 : ["Q6ax20", "i110", "i314"],
      21 : ["i1122", "i1124", "i1126"],
      22 : ["i1105", "i1107", "i1115"],
      23 : ["i1093", "i1095", "i1098"],
      24 : ["i1081", "i1083", "i1086"],
      25 : ['i1066', 'i1068', 'i1153', 'i1074'],
      26 : ["i1053", "i1055", "i1059"],
      27 : ["i1040", "i1042", "i1046"],
      28 : ["i1025", "i1027", "i1033"],
      29 : ["Q6ax29", "i1157", "i1160"],
      30 : ["iQ6ax30", "i30", "i1176"],
      31 : ["iQ6ax31", "i1186", "i1188"],
      32 : ["iQ6ax32", "i1208", "i1210"],
      33 : ["iQ6ax33", "i1197", "i1199"],
      34 : ["iQ6ax34", "i1230", "i1232"],
      35 : ["iQ6ax35", "i1219", "i1221"],
      36 : ["iQ6ax36", "i36", "i1245"]
    };
    if (Q6Rc.length > 0) {
      var skip = [];
      for (i in Q6Rc) {
       for (x in Q6RcQids[Q6Rc[i]]) {
        skip.push(Q6RcQids[Q6Rc[i]][x]);
      }
    }
  }

  var qAppend = "^f('Append').domainValues()^".split(",");
    //console.log(["qAppend before ", qAppend]);
    qAppend = _.difference(qAppend, "^f('Append').get()^".split(","));
    //console.log(["qAppend after ", qAppend]);   
    if(qAppend.length>0){
      skip = _.union(skip,qAppend);
    }     
          //console.log([Q6Rc, Q6Rc.length, skip, skip.length]);
          var totalQuestions = qids.length;
          var weight = 100 / totalQuestions;
          var diff = _.difference(qids, skip);
     //var diffWeight = (skip.length * weight) / diff.length;
     var diffWeight = ((106+8) * weight) / diff.length; // 106 = Q6RcQids , 8 = qAppend
     
     var toSwitch = false;

    //console.log("diffWeight: "+diffWeight);

    var percent = null;
    try {
      percent = getData("^CurrentForm()^", true);
    } catch (e) {
      // console.log("catch percent");
      // console.log(e);
      percent = null;
    }

    $('#progressbar').css('visibility', 'visible');
    if (percent != null) {
      if($('#progressbar colgroup col').length==1){
       $('#progressbar colgroup').append('<col>')
       .css({ "border-top": "1px solid #ffffff", "border-right": "1px solid #414099", "border-bottom": "1px solid #414099", "border-left": "1px solid #414099"});
     }
     $('#progressbar colgroup col:eq(1)').css('width', (100 - percent) + '%');
     $('#progressbar colgroup col:eq(0)').css('width', percent + "%");
   }

 }catch(e){
       //console.log("catch");
       //console.log(e);
     }
   });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid题目隐藏以上皆无类的
$('#Q19_R1_99').parent().hide();
$('#Q19_R2_99').parent().hide();
//或者
$('#Q3_R9_3').parent().replaceWith('<td></td>');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PC与手机设置不同的CSS  放在模板的layout里
^f('Device').get()!=='1'?".confirmit-abtn-grid{width:20px;}":".confirmit-abtn-grid{width:50px;}"^
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放框只能填数字
$("input").keypress(function (e){
  var charCode = (e.which) ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
});

//Key code
/*
A 65 J 74 S 83 1 49 
B 66 K 75 T 84 2 50 
C 67 L 76 U 85 3 51 
D 68 M 77 V 86 4 52 
E 69 N 78 W 87 5 53 
F 70 O 79 X 88 6 54 
G 71 P 80 Y 89 7 55 
H 72 Q 81 Z 90 8 56 
I 73 R 82 0 48 9 57 
0 96 8 104 F1 112 F7 118 
1 97 9 105 F2 113 F8 119 
2 98 * 106 F3 114 F9 120 
3 99 + 107 F4 115 F10 121 
4 100 Enter 108 F5 116 F11 122 
5 101 - 109 F6 117 F12 123 
6 102 . 110         
7 103 / 111    
BackSpace 8 Esc 27 Right Arrow 39 -_ 189 
Tab 9 Spacebar 32 Dw Arrow 40 .> 190 
Clear 12 Page Up 33 Insert 45 /? 191 
Enter 13 Page Down 34 Delete 46 `~ 192 
Shift 16 End 35 Num Lock 144 [{ 219 
Control 17 Home 36 ;: 186 | 220 
Alt 18 Left Arrow 37 =+ 187 ]} 221 
Cape Lock 20 Up Arrow 38 ,< 188 '" 222 
加 175             
音量减 174             
停止 179             
静音 173             
浏览器 172             
邮件 180             
搜索 170             
收藏 171 
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 鼠标悬停 显示图片
/*
<script src="/isa/PYAMLMFAKKOYIBEYNHKRJRBIMIEALXOH/PeterGe/hovermain.js" type="text/javascript"></script>
<style>
a{
 text-decoration:none;
color:black;
}
a:hover {color:#ff0000;text-decoration : underline; position : relative;} 
#screenshot{
width:50%;
 position:absolute;
 border:1px solid #e9d315;
 background:#f9f2ba;
 padding:5px;
 display:none;
 -moz-border-radius:4px;
-webkit-border-radius:4px;
border-radius:4px;
 }
#screenshot img{width:100%;}
</style>

<a href="#" class="screenshot" title="/isa/PYAMLMFAKKOYIBEYNHKRJRBIMIEALXOH/273269/P9x1.jpg" target="_black">前列腺护理最强版</a>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//获取时间
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//判断Grid题打分最高或最低与下一题选择的答案是否存在冲突

var minv=Min(f('Q17').values());
var maxv=Max(f('Q17').values());
var v1=f('Q18x1').toNumber();
var v2=f('Q18x2').toNumber();

if(minv!=maxv)
{
  if(f('Q17')[v1].get()<=minv ||f('Q17')[v2].get()>=maxv)
  {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), "请检查答案。");
  }
}

//Method 2
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//插入视频
/*
Please watch this video. 
<script>
$(document).ready(function(){
$('#forwardbutton').hide();
var vid = document.getElementById("myvideo"); 
vid.onended = function() 
{
 $('#forwardbutton').show();
};
})
</script>
<video controls="true" id="myvideo" width="620" height="440"> 
  <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-278219-Y9T0/A30S.mp4" type="video/mp4">
  <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-278219-Y9T0/A30S.ogv" type="video/ogv">
  <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-278219-Y9T0/A30S.webm" type="video/webm">
  <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-278219-Y9T0/A30S.flv" type="video/flv">
</video>


//插入视频
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/reset.css"/>
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/bootstrap.css">
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.css"/>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/jquery-1.10.1.min.js" type="text/javascript" charset="utf-8"></script>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.js" type="text/javascript" charset="utf-8"></script>
<style>
html,body{background:#F5F5DC !important;}
.page{width:100%;}
.container{width:95%; text-align:center;border:0px solid #ccc;}
#willesPlay{margin:0px auto;}
@media screen and (max-width:768px){
.container{width:100% !important; text-align:center;border:0px !important;}
}
@media screen and (max-width:480px){
.container{width:100% !important; text-align:center;border:0px !important;}
}
</style>
<script>
$(document).ready(function(){
var vid = document.getElementById("playVideo"); 
$('#progress').hide();
$('#forwardbutton').hide();
vid.onended = function() 
{
$('#progress').show();
$('#forwardbutton').show();
};

})
</script>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div id="willesPlay">
  <!--<div class="playHeader">
    <div class="videoName">我们的视频</div>
  </div>-->
  <div class="playContent">
    <div class="turnoff">
      <ul>
        <!--<li><a href="javascript:;" title="喜欢" class="glyphicon glyphicon-heart-empty"></a></li>-->
        <li><a href="javascript:;" title="关灯" class="btnLight on glyphicon glyphicon-sunglasses"></a></li>
        <!--<li><a href="javascript:;" title="分享" class="glyphicon glyphicon-share"></a></li>-->
      </ul>
    </div>
    <video width="100%" height="100%" id="playVideo">
      <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-296294-Q8H4/XDMY.mp4 " type="video/mp4">

      </source>
      当前浏览器不支持 video直接播放，点击这里下载视频： <a href="/">下载视频</a>
    </video>
    <div class="playTip glyphicon glyphicon-play"></div>
  </div>
  <div class="playControll">
    <div class="playPause playIcon"></div>
    <div class="timebar">
      <span class="currentTime">0:00:00</span>
      <div class="progress" id="progress">
        <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        </div>
      <span class="duration">0:00:00</span>
    </div>
    <div class="otherControl">
      <span class="volume glyphicon glyphicon-volume-down"></span>
      <span class="fullScreen glyphicon glyphicon-fullscreen"></span>
      <div class="volumeBar">
          <div class="volumewrap">
            <div class="progress">
            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 8px;height: 40%;"></div>
          </div>
            </div>
        </div>
    </div>
  </div>
</div>
      
    </div>
  </div>
</div>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//移动端自适应
@media screen and (max-width:768px){
  .footer {width:90%;}
  .page {width:90%;}
  .content{width:90%;}
  th.gh img{width:90% !important;}
}
@media screen and (max-width:480px){
  .footer {width:100%;}
  .page {width:100%;}
  .content{width:100%;}
  th.gh img{width:100% !important;}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Redirect Link
Redirect("http://www.jdpa.cc/mLottery/BQD/index.html?r="+f('currentid').get()+"&s="+f('currentsid').get()+"&c=0"+"&code="+f('userid').get(),true);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid题 scale显示方块

.page{color:#000;}
.confirmit-gb-l{
  text-align:center;
}
.confirmit-gb-star-container{
  width:10%;
}


//$("#Q4x1_header0").hide();
$(".ga").hide();


$('.confirmit-gb-c').css("margin-left","0px");
$('.confirmit-gb-c').css("width","100%");
$('.confirmit-gb-c').find('table').css("width","100%");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid  numeric list题 open text list题  在开放框后添加文字
$('.numberinput').after("<span style='margin-left:5px;'>%</span>");
$('.numberinput').after("<span style='margin-left:5px;'>岁</span>");
$('.numberinput').after("<span style='margin-left:5px;'>元</span>");
$('.numberinput').after("<span style='margin-left:5px;'>年</span>");
$('.numberinput').after("<span style='margin-left:5px;'>月</span>");
$('.numberinput').after("<span style='margin-left:5px;'>万</span>");
$('.numberinput').after("<span style='margin-left:5px;'>万元</span>");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grdi 数值题，横向 纵向求和

#textadd{border:1px solid #333; border-radius:4px;width:100%;margin-top:10px;font-size:16px;}
.confirmit-grid tr:first-child{border:0px;}
.gha{border:1px solid #ccc; text-align:center;}


$("#A19_header0").parent().before("<tr><td></td><td></td><td colspan=6 class=gha><b>购买渠道</b></td><td></td></tr>");

var arr = [];
var arr2 = [];
var x = 0;
var y = 0;

$("#fieldset_Q2x2 input").each(function() {
  if($.inArray($(this).prop('id').split('_')[0],arr)==-1)
  {
    arr[x]=$(this).prop('id').split('_')[0];
    x++;
  }
  if($.inArray($(this).prop('id').split('_')[1],arr2)==-1)
  {
    arr2[y]=$(this).prop('id').split('_')[1];
    y++;
  }
});

//只读模式
/*$("[id*="+arr[arr.length-1]+"]").each(function() {
$(this).prop('disabled', true);
});
*/

//改变背景颜色
$("[id*="+arr[arr.length-1]+"]").each(function() {
  $(this).css('background', "#cccccc");
});


$('#fieldset_Q2x2 input').keyup(function() {
  sum=0;
  for(x=1;x<arr.length-1;x++)
  {
    if(parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val())>0) sum+=parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val());
  }
  $('#'+arr[arr.length-1]+'_'+$(this).prop('id').split('_')[1]).val(sum);
});

for(y=0;y<arr2.length;y++)
{
  sum=0;
  z=0;
  for(x=1;x<arr.length-1;x++)
  {
    if(parseInt($('#'+arr[x]+'_'+arr2[y]).val())>0)
    {
      sum+=parseInt($('#'+arr[x]+'_'+arr2[y]).val());
      z++;
    }
  }
  if(z>0) $('#'+arr[arr.length-1]+'_'+arr2[y]).val(sum);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//对于open text list题型 你可以在text里加上
td.answerlabel{width:auto;}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//改变鼠标悬停时的颜色
$('.answerlabel').each(function(){
  $(this).parent().hover(function(){
   $(this).addClass('hoverColor');
 },function(){
   $(this).removeClass('hoverColor');
 });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Open Text List 题目 选择排他选项后，清空开放题，并且无法填写答案
$('#S9DK_99').click(function(){
  if($(this).is(":checked"))
  {
    $('#S9_1,#S9_2,#S9_3,#S9_4,#S9_5,#S9_6,#S9_7,#S9_8,#S9_9,#S9_10').val("");
    $('#S9_1,#S9_2,#S9_3,#S9_4,#S9_5,#S9_6,#S9_7,#S9_8,#S9_9,#S9_10').attr("disabled",true);
  }else
  {
   $('#S9_1,#S9_2,#S9_3,#S9_4,#S9_5,#S9_6,#S9_7,#S9_8,#S9_9,#S9_10').attr("disabled",false);
 }

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//新模板 取消悬停颜色 选项不可选


.mainContent{
  width:100%;
}

#__Q14_R1_image,#__Q14_R2_image,#__Q14_R3_image,#__Q14_R4_image,#__Q14_R5_image,#__Q14_R6_image{
  display:none !important;
  visibility:hidden;
}
#Q14_R1,#Q14_R2,#Q14_R3,#Q14_R4,#Q14_R5,#Q14_R6{
  display:none !important;
  visibility:hidden !important;
}


for(var i=1;i<=6;i++)
{
  $("#Q14_R"+i+"_label").parent().parent().hover(function(){
    $(this).addClass("ShoverColor");
  }),function(){
    $(this).removeClass("ShoverColor");
  }
  
  $("#Q14_R"+i).attr("disabled",true);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//禁用鼠标右键
//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/imageprotection/imageProtection.min.js

//禁用鼠标右键
$(document).ready(function(){  
  $(document).bind("contextmenu",function(e){   
    return false;   
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//取两位小数
parseFloat(XXX).toFixed(2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//概念测试 划线题 只回答喜欢的
/*
<style> fieldset { display:none } .nav { display: none1} #target { text-align:justify; line-height: 130%;} .text { padding: 0 10px; }</style>
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/css/text_highlight_v1.5.css"/>
^jQueryToolColor("text_highlighting")^
<style>div.questionarea {position: static;}</style>
<script src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/_root/ssi_ALLInOne_Confirmit_1.5.js"></script>
<script src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/js/text_highlight_v1.5.2.min.js"></script>

<div id="target">
<span class='word' id='1'>人性化设计，让育儿更轻松</span><br>
<span class='word' id='2'>可优比懂得养育孩子是一个非常艰巨、劳累的任务</span>，
<span class='word' id='3'>因此我们致力于成为你的育儿好帮手</span>。
<span class='word' id='4'>我们为你提供丰富多样人性化的产品服务以及一站式的育儿解决方案</span>，
<span class='word' id='5'>减轻你的负担，让你轻松陪伴孩子成长</span>。

</div>

  <div class="chooseApealing">
    <ul><li><a id="likeButton"></a></li><li><a id="dislikeButton"></a></li><li><a id="removeButton"></a></li></ul><div class="close"></div>
  </div>
  <div class="dk_container">
    <div id="likeDK" class="dk_button">None of these L</div><div id="dislikeDK" class="dk_button">None of these D</div>
  </div>
  <div id="openends">
    <div class="likedBox"><div class="boxlabel"><span class="boxLikeLabel">Words you find appealing</span></div><div class="likedBoxcontents"></div></div>
    <div class="dislikedBox"><div class="boxlabel"><span class="boxDislikeLabel">Words you find unappealing</span></div><div class="dislikedBoxcontents"></div></div>    
  </div>

   <script>
      $(document).ready(function() {
        var theForms = new Array();
        theForms[1] = getFormName(1);
        theForms[2] = getFormName(2);

        $('#target').TextHighlighter({
          typeOfQuestions: "L", // Possible values: "LD" - stores data into GRID question  #### "L" or "D"  - stores data into MR question
          typeOfTool: 1, // Possible values: "1" - Like and Dislike on single page #### "2" - Like and Dislike on separate pages, after pressing Next btn
          isTest: false,
          gridForm: theForms[1],
          openendForm: theForms[2],
          removeButtonText: "Remove",
          AutoWrapWords: false,
          minNrAnswersTotal:1,
          minNrAnswersLike:1,
          minNrAnswersDislike:0,
          isDK: true,
          txtDKLike: "以上皆无",
          txtDKDislike: "",                 
          likeDKcode: 997,
          dislikeDKcode: 998,
          showSelectedWords: false,
          nextBtn: "//d2n88fe5uqdqty.cloudfront.net/rnd/template/next_SSIglobal.png",
          ExportListToConsole: false,
          aPreloadImages : [
    '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/images/dk_like_h.png',
    '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/images/dk_dislike_h.png',
    '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/images/green_ball.png',
    '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/images/red_ball.png'
]
        });
countIt({             
  "tool-id":"jTH001", 
  "project-id" : "^CurrentPID()^",
  "order-id" : "^getOrderID()^"
});
      });    
   </script>
   <br/>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid 题 选项缩进
$('.gridcell').parent().find('.gridlabel').css("text-indent","40px");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//数轴
/*
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/jquery-ui/themes/smoothness/jquery-ui.min.css" />
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/sliders/app/css/basicSlider_1.5.css" />
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/sliders/app/css/basicSlider_grey_0.8.css" />
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/rnd/template/GSL_2016/tool_css/quickthought/basicSlider.css" /> <!-- update this custom css-->

<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/jquery-ui/jquery.ui.touch-punch.min.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/allinonejs/ssi_ALLInOne_Confirmit_2.2.min.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/sliders/app/js/basicSlider_mod_1.1.9.js"></script>
<center><div id="toolContainer"></div></center>

<style>
div.txtBox-wrapper {border-bottom: none;padding-top: 15px;}
@media only screen and (min-width : 1400px) {
div.txtBox-wrapper {padding-top: 50px;}
}
</style>

<script type="text/javascript">
$(function () {
  $("#toolContainer").basicSlider({
    cAll      : true,
    navigation    : '#forwardbutton',
    length      : 500,
    enableNumPad  : false,
    min       : 15,
    max       : 50,
    shwTick     : true,
    shwMidTick    : true,
    shwTitle    : true,
    initValue   : 5,
    hover     : true,
    stickyHover   : true,
    shwHandleOnDK : false,
    step      : 1,
    showFixedDecimal  : 0,
    shwTxtBox     : true,
    orientation   : 'horizontal',
    isRTL       : false, 
    sLeft       : '下限（15元/个）', 
    sMid      : '', 
    sRight      : '上限（50元/个）',

    
    
    onReady: function() {}
  });
});
</script>

<style>
#txtBox_toolContainer1,#txtBox_toolContainer2{
display:none;
}
.txtBox-wrapper .sTitle {
    height: auto;
    line-height: 20px;
    margin-bottom: 15px;
    padding-bottom: 0 !important;
}
</style>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CSS3 实现鼠标悬停 放大图片
.text img{  
  cursor: pointer;  
  transition: all 0.6s;   /*放大动作在0.6s内完成*/ 
}  
.text img:hover{  
  transform: scale(2); /*放大倍数*/  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            }  
//禁用X轴滚动条
body{
  overflow-x:hidden;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Multi Grdi 每行选到的选项如果都相同 甄别
((f('S12_1').get().toString()==f('S12_2').get().toString())&&
 (f('S12_1').get().toString()==f('S12_3').get().toString())&&
 (f('S12_1').get().toString()==f('S12_4').get().toString())&&
 (f('S12_1').get().toString()==f('S12_5').get().toString())&&
 (f('S12_1').get().toString()==f('S12_6').get().toString())&&
 (f('S12_1').get().toString()==f('S12_7').get().toString())&&
 (f('S12_1').get().toString()==f('S12_8').get().toString())&&
 (f('S12_1').get().toString()==f('S12_9').get().toString())&&
 (f('S12_1').get().toString()==f('S12_10').get().toString())&&
 (f('S12_1').get().toString()==f('S12_11').get().toString())&&
 (f('S12_1').get().toString()==f('S12_12').get().toString())&&
 (f('S12_1').get().toString()==f('S12_13').get().toString())&&
 (f('S12_1').get().toString()==f('S12_14').get().toString())&&
 (f('S12_1').get().toString()==f('S12_15').get().toString())&&
 (f('S12_1').get().toString()==f('S12_16').get().toString())&&
 (f('S12_1').get().toString()==f('S12_17').get().toString())&&
 (f('S12_1').get().toString()==f('S12_18').get().toString())&&
 (f('S12_1').get().toString()==f('S12_19').get().toString())&&
 (f('S12_1').get().toString()==f('S12_20').get().toString()))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//记录回答的最后一道题,在模板中加入^drop()^
function drop()  { 
  if(!f(CurrentForm()).toBoolean())
  {
    f('LastQuestion').set(CurrentForm());
  }
  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Global模板，开放题与多选框互斥，只有一个多选框
$(':text').attr("maxlength","2");

$('.abtn').click(function(){
  $(':text').val('');
});

$(':text').keyup(function(){
  $('.abtn').find('input').prop('checked',false);
  $('.abtn').removeClass('selectedcolor abtn-selected multi-selected').addClass('unselectedcolor multi');  
});
$('.answersection :last').css({'width':'30%', 'text-align':'left', 'margin-top':'-10px', 'margin-left':'10px'});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Global模板，开放题与多选框互斥，有多个多选框
$(':text').attr("maxlength","2");

$('.abtn').click(function(){
  $(':text').val('');
  $('.abtn').not($(this)).removeClass('selectedcolor abtn-selected multi-selected').addClass('unselectedcolor multi');  
  $('.abtn').not($(this)).find('input').prop('checked',false);
});

$(':text').keyup(function(){
  $('.abtn').find('input').prop('checked',false);
  $('.abtn').removeClass('selectedcolor abtn-selected multi-selected').addClass('unselectedcolor multi');  
});

$('.answersection :last').css({'width':'30%', 'text-align':'left', 'margin-top':'-10px', 'margin-left':'10px'});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//分组，顺序随机或循环时，让“其他”组固定在最后

//changed this to the number of rotation needed
var order = [0,1,2,3,4,5];

var val = shuffle(order);
f('hidShuffle').set(val);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//建隐藏题hidShuffle

//在题目中加入JS代码
$(':text').attr("maxlength","200");
//var text = "^f('l').any('9')^" == "true" ? "Other benefits" : "其他優惠";
var text = "^f('l').any('9') ? 'Other benefits' : '其他優惠'^";
$('#BEN1_61').parent().parent().before('<tr class="cust-other-header"><td colspan="2" class="group-header-label"><b>'+text+'</b></td></tr>');

var $rows = [];
var $header = $(".cust-other-header");
//group to be anchored
$("#BEN1_61,#BEN1_62,#BEN1_63,#BEN1_64,#BEN1_65,#BEN1_69").each(function(){ 
  $rows.push($(this).closest("tr").detach());
});


//changed this to the number of rotation needed
var order1 = "^f('hidShuffle').get()^";
var order = order1.split(",");
//alert(order1);
//alert(order);

//var val = shuffle(order);


for(var i in order) {
  $header.after($rows[order[i]]);
}

$('#BEN1_97').parent().parent().before("<tr><td></td></tr>");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Numeric题 文本框在一行
.confirmit-table{
  border-collapse:unset !important;
}
.confirmit-table td{display:inline !important;}
td.answerlabel{display: none !important;}
.questionarea table {
  width: auto !important;
}

^f('Device').get()!='1'?"<style>.numberinput{width:80px}</style>":""^

$('#Q16_2').after(" <span style=\"margin-left:5px;\">万元</span>");
$('#Q16_1').after(" <font size=\"2px\">.</font>");
$('.confirmit-table').parent().css('width','0%');
$('.confirmit-table').eq(1).css({'position':'relative','left':'-8px'});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//实时计算Numeric list题，各分组的和  FS ORD-311237-J1T7-Gym study-Bain*test* (p2249675)


.groupanswerinput{width:1%;}
#Q14b_103,#Q14b_203,#Q14b_303{background-color:gray;}



$("#Q14b_103").attr("readonly",true);
$("#Q14b_203").attr("readonly",true);
$("#Q14b_303").attr("readonly",true);

$(function(){
  var first = $("#Q14b_101");
  var second = $("#Q14b_102");
  var sumSP = $("#Q14b_103");
  first.change(function(){
    var num1 = first.val();
    var num2 = second.val();
    var sum = num1 * num2;
    sumSP.val(sum);
  });
  second.change(function(){
    var num1 = first.val();
    var num2 = second.val();
    var sum = num1 * num2;
    sumSP.val(sum);
  });
  
  var first1 = $("#Q14b_201");
  var second1 = $("#Q14b_202");
  var sumSP1 = $("#Q14b_203");
  first1.change(function(){
    var num1 = first1.val();
    var num2 = second1.val();
    var sum = num1 * num2;
    sumSP1.val(sum);
  });
  second1.change(function(){
    var num1 = first1.val();
    var num2 = second1.val();
    var sum = num1 * num2;
    sumSP1.val(sum);
  });
  
  var first2 = $("#Q14b_301");
  var second2 = $("#Q14b_302");
  var sumSP2 = $("#Q14b_303");
  first2.change(function(){
    var num1 = first2.val();
    var num2 = second2.val();
    var sum = num1 * num2;
    sumSP2.val(sum);
  });
  second2.change(function(){
    var num1 = first2.val();
    var num2 = second2.val();
    var sum = num1 * num2;
    sumSP2.val(sum);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//实时计算Numeric 题 总和  FS ORD-311237-J1T7-Gym study-Bain*test* (p2249675)
$("#Q14b_5").attr("readonly",true);

$(function(){
  $("#Q14b_101").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val()) || 0) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val()) || 0) +
      (($("#Q14b_301").val() * $("#Q14b_302").val()) || 0) +
      (($("#Q14b_401").val() * 1) || 0));

  });
  $("#Q14b_102").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));

  });
  
  $("#Q14b_201").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));
  });
  $("#Q14b_202").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));

  });

  $("#Q14b_301").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));
  });
  $("#Q14b_302").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));

  });
  
  $("#Q14b_401").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));

  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//把单选题插入到Numeric题中去  FS ORD-311237-J1T7-Gym study-Bain*test* (p2249675)
$('#Q14b_102_label').parent().parent().after("<tr><td id=\"txt1\"></td><td id=\"btn1\"></td><td id=\"btn2\"></td></tr>");
$('.showTitle').remove();
$("#txt1").html($('#Q14c_text').html());
$('#btn1').append($('input#Q14c_1').css({'width':'100%','height':'30px'}).closest('tr'));
$('#btn2').append($('input#Q14c_2').css({'width':'100%','height':'30px'}).closest('tr'));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//冒泡排序
function sortArray(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
      if(arr[j]>arr[j+1]){
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid  Numeric题 横向求和
var arr = [];
var x = 0;


$("#fieldset_Q2x2 input").each(function() {
  if($.inArray($(this).prop('id').split('_')[0],arr)==-1)
  {
    arr[x]=$(this).prop('id').split('_')[0];
    x++;
  }
});

$('#fieldset_Q2x2 input').keyup(function() {
  sum=0;
  for(x=0;x<arr.length-1;x++)
  {
    if(parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val())>0) sum+=parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val());
  }
  $('#'+arr[arr.length-1]+'_'+$(this).prop('id').split('_')[1]).val(sum);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid 题 如果侧列没有Label  去掉边框，去掉空白
.confirmit-grid thead tr th:first-child{display:none !important;}
.gridlabel{display:none !important;}
.scale{width:20% !important;}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//如果单选题的Label是花费金额，并且需要求多个单选题选到的花费金额的总和，可用parseInt()函数
f('sumCOST').set(parseInt(f('Q1').valueLabel()) + parseInt(f('Q2').valueLabel()));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var date = new Date(); //获取当前日期
var time = date.getTime();//返回距 1970 年 1 月 1 日之间的毫秒数
f('testTime')['2'].set(time/1000);//秒数
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Global模板 Grid特殊效果题调整页面整体宽度
div.pagearea.showcode-containter {
  max-width: 80% !important;
}
.scale img{
  width:60% !important;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid 数值题与多选题互斥，checkbox是原始状态
//参考项目 FS ORD-320697-Z4V9-Fintech survey【Consumer】 -Bain*Live* (p2656951)
$(document).ready(function(){
  $('.confirmit-grid tbody tr').each(function(){
   if($(this).find('.gridcell').find('.numberinput').val().trim().length > 0){
    $(this).find('.gridcell').find('input[type=checkbox]').attr('checked',false);          
  }
  var that=$(this);
  $(this).find('.gridcell').find('.numberinput').on("keyup",function(){

   if($(this).val() != ""){
    that.find('.gridcell').find('input[type=checkbox]').attr('checked',false);
    
  }      
});
  $(this).find('.gridcell').find('input[type=checkbox]').on("click",function(){

   that.find('.gridcell').find('.numberinput').val('');      
 });   
});

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid 第一列多选题 第二列数值题  多选选中了 数值题可填
//参考项目 FS ORD-320697-Z4V9-Fintech survey【Consumer】 -Bain*Live* (p2656951)
$(document).ready(function(){
  $('.confirmit-grid tbody tr').each(function(){
    //$(this).find('.gridcell').eq(1).find('.numberinput').after("<span class='curency'> %</span>");
    if($(this).find('.gridcell').eq(1).find('.numberinput').val()!=""||$(this).find('.gridcell').eq(0).find('input[type=checkbox]').is(':checked')){
      $(this).find('.gridcell').eq(1).find('.numberinput').attr('disabled',false);          
    }else{       
      $(this).find('.gridcell').eq(1).find('.numberinput').attr('disabled',true);
    }
    var that=$(this);
    $(this).find('.gridcell').eq(0).click(function(){

      if($(this).find('input[type=checkbox]').is(':checked')){
        that.find('.gridcell').eq(1).find('.numberinput').val("").attr('disabled',true);

      }else{
       that.find('.gridcell').eq(1).find('.numberinput').attr('disabled',false);
     }      
   });   
  });

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//选取数值题中填写最大的前三项
function sortArray(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
      if(arr[j]<arr[j+1]){
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}

var array= [];

for(var i = 1; i <= 11; i++)
{
  if(f('Q2x3')[i].toBoolean())
  {
    array.push(f('Q2x3')[i].toNumber());
  }
}


sortArray(array);

ClearForm(f('Q2x7Hidden'));

var form = f('Q2x3');
var form2 = f('Q2x7Hidden');
var precodes = form.domainValues();
for(var i = 0; i < precodes.length; i++) {
  var code = precodes[i];
  if(form[code].toNumber() == array[0]) {form2[code].set('1')}
    else if(form[code].toNumber() == array[1]) {form2[code].set('1')}
      else if(form[code].toNumber() == array[2]) {form2[code].set('1')}
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ranking题 当相关题目只选到1个的时候，Ranking题自动赋值
f('rank').set(f('c1').get());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid题 第一列单选，第二列填百分比，第三列选填开放题，第一列单选选中时，第二列，第三列可填写，否则不可填写
//参考项目  FS ORD-322518-B3J3 2017 China Bain (p2752852)
$('#C16NABBx2_1').after(" <span style='margin-left:5px;'>%</span>");
$('#C16NABBx2_2').after(" <span style='margin-left:5px;'>%</span>");


$(".confirmit-grid tbody tr").each(function () {
  if($(this).find(".gridcell").find("input[type=radio]").is(":checked")) {
    $(this).find("input[type=text]").attr("disabled",false);  
  } else {
    $(this).find("input[type=text]").attr("disabled",true); 
  }
  
  $(this).find(".gridcell").click(function () {
    $(this).parent().find("input[type=text]").attr("disabled",false);
    $(this).parent().siblings().find("input[type=text]").attr("disabled",true); 
  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//文本框只读
$("#Q17NAAA_1").attr("readonly",true);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//计算消费总额，其中消费选项为消费段，并且包含其他字符
//parseInt返回字符串中的第一个数字，直至非数字字符为止
if(f('Q1') != '99') {
  if(f('Q1').any('1','7','8','14','15','21','22','28','29','35','36',
   '42','43','49','50','56','57','63','64','70')) {
    sum1 = sum1 + (parseInt(f('Q1').valueLabel()) *12)
} else {
  var code1 = f('Q1').valueLabel();
  var array1 = code1.split("-");
  sum1 = sum1 + ( ( (parseInt(array1[0]) + parseInt(array1[1]) ) / 2 ) * 12 )
}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//模板针对Grid题的设置
$(document).ready(function(){
//other input set start;
function showBtn(str){
  var obj=(str==$(this))?str:$(str);

  var len=obj.val().trim().length;
  $('.confirmit-grid tr').css('border-right','1px silver solid')
  obj.parent().nextAll().each(function(){ 
    if(len>0){
      $(this).show();   
      $(this).find('input[type="radio"]').attr('disabled',false);
    }else{
     $(this).hide();   
     $(this).find('input[type="radio"]').attr('disabled',true); 
   }        
 });           
}
if($('.other_input').length>0){
 showBtn('.other_input');
 $('.other_input').each(function(){
   $(this).bind("keyup",function(){
    showBtn($(this));                     
  });
 });
}
//other input set end;  

//设置grid表头固定；  
changeWidth();  
window.onresize=function(){ 
 changeWidth(); 
}   

window.onscroll=function(){ 
  if($('.confirmit-grid thead').length!=0){
    headFix();   
  } 
}
function headFix(){
  var oTop=parseInt($('.confirmit-grid tbody').offset().top);
  var scrollT=parseInt(document.body.scrollTop)||parseInt(document.documentElement.scrollTop);  

  if(parseInt($(window).width())<751){
   if(scrollT>oTop){           
    $(".confirmit-grid thead").addClass("theadFix"); 
    $('.confirmit-grid thead').css('width',$('.confirmit-grid').outerWidth());
    var scaleLen=parseInt($(".confirmit-grid thead .scale").length);
    $('.confirmit-grid thead .scale').css('width',100/scaleLen+'%');

    var scaleLen1=parseInt($(".confirmit-grid thead .scalegroupheader").length);          
    var scaleLen2=parseInt($(".confirmit-grid thead .scalegroupanswer").length);
    if(scaleLen1==scaleLen2){
     $('.confirmit-grid thead .scalegroupheader').css('width',100/scaleLen1+'%');           
     $('.confirmit-grid thead .scalegroupanswer').css('width',100/scaleLen2+'%');           }

   }else{
    $('.confirmit-grid thead').removeClass('theadFix');
    changeWidth(); 
  }

       //$('.theadFix tr th:first').css('width',$('.gridlabel').width());
     }
   }

//改变表头的宽度函数；
function changeWidth(){
 if($(window).width()<=751){
  $('.confirmit-grid thead').css('width',$('.confirmit-grid').outerWidth());

  if($('.confirmit-grid tr').length<=2&&$('.confirmit-grid tbody tr th:first-child').html()==''){
    delFirstallth();
  }else if($('.confirmit-grid tr').length<=2&&$('.confirmit-grid tbody tr th:first-child').html()!=''){
    delFirstth();         
  }else{
    delFirstth(); 
  }
  var scaleLen=parseInt($(".confirmit-grid thead .scale").length);
  $('.confirmit-grid thead .scale').css('width',100/scaleLen+'%');  

  var scaleLen1=parseInt($(".confirmit-grid thead .scalegroupheader").length);          
  var scaleLen2=parseInt($(".confirmit-grid thead .scalegroupanswer").length);
  if(scaleLen1==scaleLen2){
   $('.confirmit-grid thead .scalegroupheader').css('width',100/scaleLen1+'%');           
   $('.confirmit-grid thead .scalegroupanswer').css('width',100/scaleLen2+'%');
 }
}else{

         if($('.confirmit-grid tr').length>2){//如果tr长度大于2时需要对多题横向多选时执行；
          addFirstth();    
          $('.confirmit-grid thead .scale').css('width','auto');
        }else if($('.confirmit-grid tr').length<=2&&$('.confirmit-grid tbody tr th:first-child').html()==''){
          delFirstallth();
        }else if($('.confirmit-grid tr').length<=2&&$('.confirmit-grid tbody tr th:first-child').html()!=''){
          addFirstth();          
        }  
        $('.confirmit-grid thead').removeClass('theadFix');
      }           
    }
//去掉grid thead tr 第一个th； 
function delFirstth(){    
  $('.confirmit-grid thead tr:first-child th:first-child').css({'display':'none'});
}
//当grid tr<=2时去掉第一个th；
function delFirstallth(){
  $('.confirmit-grid tr th:first-child').css({'display':'none'});    

}
//加上 grid thead tr 第一个th；
function addFirstth(){    
 $('.confirmit-grid thead tr th:first-child').css({'visibility':'visible','display':'block'});
}
 //针对groupheader设置
 $('<th class="addTh">').insertBefore($('.scalegroupanswer:first'));

})//$(document).ready(function(){ end;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//引用loop题中的Label
^f('Q11')[f('l1').toNumber()].any('0','1','2','3','4','5','6')?"您为什么不愿意推荐<b>" + f('l1') + "</b>？":
f('Q11')[f('l1').toNumber()].any('7','8')?"您为什么对<b>" + f('l1') + "</b>比较中立？":
"您为什么愿意推荐<b>" + f('l1')+"</b>？"^
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
f(qID)
/*
Values returned 
 
Single:
 The code of the answer.
 
Open, Numeric and Date:
 A string with the answer.
 
Multi:
 A set with the codes of the answers selected.
 
Ranking, OpenText List or Numeric List:
 A set with the codes of the elements in the answer list that are answered.
 
Grid:
 A set with the codes of the elements in the answer list that are answered.
 
"Other" from answer lists:
 A string with the text answered.
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
f(qID).domainValues() 
/*
这个方法返回的是出示给被访者的list，如果在访问时，某个code被隐藏了，那么这个方法是不会返回这个code的，在使用时要注意
This will return an array with all codes from the answer list of a single, multi, ranking, open text list, numeric list or grid 
question, headers excluded.

This method is subject to masking, so if a code mask is used to filter the answer list then this will only return the codes of the 
answers that are displayed to the respondent.

The method is also subject to randomization. That is, if the answer list is randomized, then the array will be returned randomized.

For hierarchy and table lookup questions, only the first 500 (server setting: WIMaxExternalLookupEntries) hits are returned. 
If the limit is exceeded, an error is returned.
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid 侧列有其他，请注明，将3D Grid题和Open Text List题放在一个Page里，用Open Text List题去替换3D Grid题其他，请注明那一行里的单选或多选按钮
$("#SummerD5A_97").replaceWith($('input#GridOpen_1').css({'width':'80%','height':'20px'}).closest('td'));
$("#SummerD5B_97").replaceWith($('input#GridOpen_2').css({'width':'80%','height':'20px'}).closest('td'));
$("#SummerD5C_97").replaceWith($('input#GridOpen_3').css({'width':'80%','height':'20px'}).closest('td'));
$("#GridOpen_1").siblings().hide();
$("#GridOpen_2").siblings().hide();
$("#GridOpen_3").siblings().hide();
//纵向单选
//Stard
$("#GridOpen_1").focus(function () {
  $(this).parent().parent().parent().siblings().each(function () {
    $(this).find("a").eq(0).find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/radiored1.png");  
    $(this).find("input[type=radio]").eq(0).attr("checked",false);
  })
})
$("#GridOpen_2").focus(function () {
  $(this).parent().parent().parent().siblings().each(function () {
    $(this).find("a").eq(1).find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/radiored1.png");  
    $(this).find("input[type=radio]").eq(1).attr("checked",false);
  })
})
$("#GridOpen_3").focus(function () {
  $(this).parent().parent().parent().siblings().each(function () {
    $(this).find("a").eq(2).find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/radiored1.png");  
    $(this).find("input[type=radio]").eq(2).attr("checked",false);
  })
})

$(".confirmit-grid tbody tr").each(function() {
  $(this).find(".gridcell").eq(0).click(function () {
    $("#GridOpen_1").val("");
  })
  $(this).find(".gridcell").eq(1).click(function () {
    $("#GridOpen_2").val("");
  })
  $(this).find(".gridcell").eq(2).click(function () {
    $("#GridOpen_3").val("");
  })
})
//End
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//测试被访者是否可以观看视频
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/reset.css"/>
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/bootstrap.css">
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.css"/>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/jquery-1.10.1.min.js" type="text/javascript" charset="utf-8"></script>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.js" type="text/javascript" charset="utf-8"></script>
<style>
html,body{background:#F5F5DC !important;}
.page{width:100%;}
.container{width:95%; text-align:center;border:0px solid #ccc;}
#willesPlay{margin:0px auto;}
@media screen and (max-width:768px){
  .container{width:100% !important; text-align:center;border:0px !important;}
}
@media screen and (max-width:480px){
  .container{width:100% !important; text-align:center;border:0px !important;}
}
</style>
<script>
$(document).ready(function(){
  var vid = document.getElementById("playVideo"); 
  $('#progress').hide();
  $('#forwardbutton').hide();
  vid.onended = function() 
  {
    $('#progress').show();
    $('#forwardbutton').show();
  };

})
</script>
</head>
<body>
<div class="container">
<div class="row">
<div class="col-md-12">
<div id="willesPlay">
<!--<div class="playHeader">
<div class="videoName">我们的视频</div>
</div>-->
<div class="playContent">
<div class="turnoff">
<ul>
<!--<li><a href="javascript:;" title="喜欢" class="glyphicon glyphicon-heart-empty"></a></li>-->
<li><a href="javascript:;" title="关灯" class="btnLight on glyphicon glyphicon-sunglasses"></a></li>
<!--<li><a href="javascript:;" title="分享" class="glyphicon glyphicon-share"></a></li>-->
</ul>
</div>
<video width="100%" height="100%" id="playVideo">
<source src="//d2n88fe5uqdqty.cloudfront.net/ssicn/2018/ORD-319183-G6Y3/XM.mp4" type="video/mp4">

</source>
当前浏览器不支持 video直接播放，点击这里下载视频： <a href="/">下载视频</a>
</video>
<div class="playTip glyphicon glyphicon-play"></div>
</div>
<div class="playControll">
<div class="playPause playIcon"></div>
<div class="timebar">
<span class="currentTime">0:00:00</span>
<div class="progress" id="progress">
<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
</div>
<span class="duration">0:00:00</span>
</div>
<div class="otherControl">
<span class="volume glyphicon glyphicon-volume-down"></span>
<span class="fullScreen glyphicon glyphicon-fullscreen"></span>
<div class="volumeBar">
<div class="volumewrap">
<div class="progress">
<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 8px;height: 40%;"></div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
<br>
/*
请问视频中的动物是什么

老虎  1
大象  2
大熊猫 3
海豚  4
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//控制选项随机顺序  参考项目 FS ORD-319183-G6Y3- AirChina study 2018【China】-Wave2
//此代码有个问题：模板中的按钮图片会显示不出来，有待优化

var $rows = [];
$("#E9_1_1,#E9_2_1,#E9_3_1,#E9_4_1,#E9_5_1,#E9_6_1,#E9_7_1").each(function(){ 
  $rows.push($(this).closest("tr").detach());
});

var order1 = "^f('hidShuffle').get()^";
var order = order1.split(",");

for(var i in order) {
  $(".confirmit-grid").append($rows[order[i]]);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Multi Grid题目 与在同一页面的多选题互斥 参考项目FS ORD-326076-G9B6-Bain*Test* (p2944100)
$(".confirmit-table tbody").find("tr").click(function() {
  $(".confirmit-grid tbody").find("tr").each(function() {
    $(this).find(".gridcell").find("a").find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/checkboxred1.png");
    $(this).find(".gridcell").find("input[type=checkbox]").attr("checked",false);
    
  })
})

$(".confirmit-grid tbody").find("tr").each(function () {
  $(this).find(".gridcell").click(function() {
    $(".confirmit-table tbody").find("a").find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/checkboxred1.png");
    $(".confirmit-table tbody").find("input[type=checkbox]").attr("checked",false);
  })
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//删除下拉菜单中的最后一个选项
$("#Q2x6x1_7 option:last").remove();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DataBase Desiner:
/*
如果Answer List非常的长，并且需要根据选项做逻辑，可以使用DataBase Desiner
例如：
有一个非常长的car list，对应不同的price：
id  __l2052 __l2052Car  __l2052Price
1 Car 1 Car 1 $8394
2 Car 2 Car 2 $1617
3 Car 3 Car 3 $8982
4 Car 4 Car 4 $2160
5 Car 5 Car 5 $9809
6 Car 6 Car 6 $5851
7 Car 7 Car 7 $2086
8 Car 8 Car 8 $8087
9 Car 9 Car 9 $1043
10  Car 10  Car 10  $925
11  Car 11  Car 11  $811
12  Car 12  Car 12  $811
13  Car 13  Car 13  $4737
14  Car 14  Car 14  $4092
15  Car 15  Car 15  $989
16  Car 16  Car 16  $9990
17  Car 17  Car 17  $2305
18  Car 18  Car 18  $6065
19  Car 19  Car 19  $8313
20  Car 20  Car 20  $3798
21  Car 21  Car 21  $4287
22  Car 22  Car 22  $4583
23  Car 23  Car 23  $7312
24  Car 24  Car 24  $8106
25  Car 25  Car 25  $1861
26  Car 26  Car 26  $5848
27  Car 27  Car 27  $1826
28  Car 28  Car 28  $358
29  Car 29  Car 29  $2305
30  Car 30  Car 30  $2032
31  Car 31  Car 31  $6483
32  Car 32  Car 32  $9021
33  Car 33  Car 33  $57
34  Car 34  Car 34  $3036
35  Car 35  Car 35  $9859
36  Car 36  Car 36  $1501
37  Car 37  Car 37  $6547
38  Car 38  Car 38  $1161
39  Car 39  Car 39  $9489
40  Car 40  Car 40  $908
......

点击HOME选项卡，在右上角点击New Schema,取一个名字，并保存
点击Tables选项卡，点击Add Table建立一个新的表格，保存后，点击Generate
然后点击Table ID，在下方的Additional Columns，添加需要的列，在这个例子里，需要添加Car 和Price两列，点击保存
点击Contents选项卡，点击Export,导出table所有的变量名：
id  __l2052 __l2052Car  __l2052Price
按照这个变量格式，在Excel中将数据做好，保存为Text（Tab delimited）
点击Upload from file，将文件导入系统
在Desiner中，将题目（比如这个例子中，题目为DD）General中的的Answers设置为Table lookup，然后在Answers选项卡中，填好Schema name和Table
如想要在下一题中获取DD选择的车型的Price，在Script中加入代码：
f('testprice').set(GetDBColumnValue(266,         984,  f('DD').toNumber(), 'Price'));
                   GetDBColumnValue(schema ID, Table ID, ID in database, 'Field you want to return')
即可返回车型对应的Price，这样做可以节省很多时间，而且不容易出现错误 
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set:
/*
Sets look like arrays, but a few of differences, 3 important ones below, 
the methods you can apply to them will be explained next...
1 Sets cannot contain duplicate entries
2 You cannot access elements in a set using index
3 You cannot sort elements in a set
If you require any of these things or want to convert your set into an array this can easily 
be done by var array = s.members();
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//计算访问时长：
function startTime(section) {
 f("startTime")[section].set(new Date());
};

function endTime(section) {
 f("endTime")[section].set(new Date());
 f("totalTime")[section].set((new Date(f("endTime")[section]).valueOf()-new Date(f("startTime")[section]).valueOf())/1000);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放题不允许填写全数字，全空格或者长度小于2
//Error trap if all numeric response in OE question, all whitespace or less than 2 characters, function below...
function etrap() {
 var st : String = f(CurrentForm());
 st = st.replace(/ /g,'');

 if(!isNaN(st)||st.toString().length<2) {
  RaiseError();
  ClearErrorMessage();
  SetErrorMessage(CurrentLang(),"");
}  
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放题不允许填写相同的答案
function uniqueResponse() {
  var cf = f(CurrentForm());
  var s = new Set();
  var arr = cf.get();
  var i : int;
  
  for(i=0;i<arr.length;i++) 
  {
    s.add(cf[arr[i]])
  }

  if(s.size()!=arr.length) {
    RaiseError();
    ClearErrorMessage();
    SetErrorMessage(CurrentLang(),"请检查您的答案");
    

  };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//判断邮箱格式是否正确
if(!IsEmail(f(CurrentForm())))
{
  RaiseError();
  CLearErrorMessage();
  SetQuestionErrorMessage(CurrentLang(),"Please provide a valid email address.");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//页面多题，顺序随机，题干始终出现在第一顺位的题目上
//其他题目的题干记得设置 &nbsp;否则DOM中不会出现题干
$(".text").first().html('Your additional text here');
//或者
$(".text").first().html('Your additional text here<br /><br />'+$(".text").first().html());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//同页面有多个Grid题，并且Scale不一致，那么在移动端会有问题，向下滚动的时候，固定的Scale显示不正常
//解决办法参考FS ORD-326780-S2V5 Bain*Closed* (p2974311)  Question Skins  B8  注释掉控制Scale固定的代码
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid题的Scale如果分组的话，在移动端显示不正常，所以屏幕尺寸480以下的去掉分组
//<style>
@media screen and (max-width:480px){

  #Q11_header0 {
    display:none;
    visibility: hidden;
  }

  .scalegroupheader {
    display: none;
    visibility: hidden;
  }
}
//</style>
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//使用random()在一个范围内生成随机数，包括边界值
function ourFunction(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourFunction(1, 9);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//删除数组中给定的元素
function remove(arr, item) {
  return arr.filter(function(x) { return x !== item; });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid 下拉菜单选中某一值，文本框可填写，否则文本框不可填写
$(".confirmit-grid tbody").find("tr").each(function() {
  if($(this).find("select").val() === "1")  {
    $(this).find("input.numberinput").attr("disabled",false);
  } else {
    $(this).find("input.numberinput").attr("disabled",true);  
  }
  
  var that = $(this);
  $(this).find("select").change(function() {
    if($(this).val() === "1") {
      that.find("input.numberinput").attr("disabled",false);
    }
    else {
      that.find("input.numberinput").attr("disabled",true);     
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//去掉报错背景色
/*
<style>
td.confirmit-cellerror {
    background-color: #fff !important;
}
</style>
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid题，第一列是下拉菜单选是否，第二列是填数值，第一列选是，第二列可填，否则不可填
$(".confirmit-grid tbody").find("tr").each(function() {
  if($(this).find("select").val() === "1")  {
    $(this).find("input.numberinput").attr("disabled",false);
  } else {
    $(this).find("input.numberinput").attr("disabled",true);  
  }
  
  var that = $(this);
  $(this).find("select").change(function() {
    if($(this).val() === "1") {
      that.find("input.numberinput").attr("disabled",false);
    }
    else {
      that.find("input.numberinput").attr("disabled",true);     
    }
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//将相同list的两道题的答案按条件合并到一个题里，1对应1， 2和3对应2,4对应3,5和6对应4......
ClearForm(f('quotaOC'));
if(f('mainOC1') == '1' || f('mainOC2') == '1') {
  f('quotaOC')['1'].set('1');
}

var arr = [['1'], ['2', '3'], ['4'],['5', '6'], ['7'], ['8', '9'], ['13'], ['14', '15'], ['16'], ['17', '18'],
       ['19'], ['20', '21'], ['22'], ['23', '24'], ['26', '27'], ['37'], ['40'], ['58'], ['31'], ['35', '36'], ['47', '48'], ['53', '54']];

for(var i = 0; i < arr.length; i++) {
  for(var j = 0; j < arr[i].length; j++) {
    if(f('mainOC1') == arr[i][j] || f('mainOC2') == arr[i][j]) {
      f('quotaOC')[i+1].set('1');
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Loop题，当循环到最后一项时，Loop里面的题的某一个选项不出示，参考项目  FS ORD-330356-F0T2 Bain*Live* (p3155960)

//做一道隐藏题，记录循环的最后一项的code
var arr = f('Q9Hidden').get();
f('lastCode').set(arr[arr.length - 1]);
//在题目的Masking：
f('l3').get() == f('lastCode').toNumber() ? a('Q16') : a('Q16').diff(set('98'))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//多选题多个选项互斥 Global模板
$(".confirmit-table tbody").find("tr").eq(0).find("td").click(function() {
  $(".confirmit-table tbody").find("tr").eq(1).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
  $(".confirmit-table tbody").find("tr").eq(2).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
})

$(".confirmit-table tbody").find("tr").eq(1).find("td").click(function() {
  $(".confirmit-table tbody").find("tr").eq(0).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
  $(".confirmit-table tbody").find("tr").eq(2).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
})

$(".confirmit-table tbody").find("tr").eq(2).find("td").click(function() {
  $(".confirmit-table tbody").find("tr").eq(1).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
  $(".confirmit-table tbody").find("tr").eq(0).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//匹配开放题和多选题的list 参考项目FS ORD-337220-Z9T8 Decathlon*Test* (p3478487)
//测试过程中发现匹配结果不是很理想，待优化
ClearForm(f('A3'));

var arr = f('A3').domainValues();
var precodes = f('A1').domainValues();
for (var i = 0; i < arr.length; i++) {
  if(arr[i] != 99) {
    var labels = f('checkLabel')[arr[i]].label();
    var subtext = labels.split(" ");
    var precodes = f('A1').domainValues();
    for(var j = 0; j < precodes.length; j++) {
      var code = precodes[j];
      if (f('A1')[code].toBoolean()) {
        if (subtext.length ==2) {
          if(f('A1')[code].get().indexOf(subtext[0]) != -1) {
            f('A3')[arr[i]].set('1');
          }
          if(f('A1')[code].get().toUpperCase().indexOf(subtext[1].toUpperCase()) != -1) {
            f('A3')[arr[i]].set('1');
          }
        } else {
          if(f('A1')[code].get().indexOf(subtext[0]) != -1) {
            f('A3')[arr[i]].set('1');
          }
        } 
      }
      
      
      if (f('A2')[code].toBoolean()) {
        if (subtext.length ==2) {
          if(f('A2')[code].get().indexOf(subtext[0]) != -1) {
            f('A3')[arr[i]].set('1');
          }
          if(f('A2')[code].get().toUpperCase().indexOf(subtext[1].toUpperCase()) != -1) {
            f('A3')[arr[i]].set('1');
          }
        } else {
          if(f('A2')[code].get().indexOf(subtext[0]) != -1) {
            f('A3')[arr[i]].set('1');
          }
        } 
      }
       
    }
    
  }
  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//Global Grid Grid Global
/*
<div class="gridclick"><img class="img-responsive loading-container" style="margin: 40px auto;" src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/images/loading.gif" /><div class="gridclick-container" style="opacity: 0;"></div></div>

<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/gridclick/gridClick_v2.9.1.min.css">
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/fancybox/3.x.x/3.1.20/jquery.fancybox.css">
^jQueryToolColor("grid_click_new")^
<!-- add custom css here-->
<style>
div.pagearea.showcode-containter {
  max-width: 80% !important;
}
</style>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/gridclick/ssi_ALLInOne_Confirmit_3.3.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/gridclick/gridClick_v2.9.2.min.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/fancybox/3.x.x/3.1.20/jquery.fancybox.js"></script>

<script type="text/javascript">
$(function() {
var config = {
  sForm : getFormName(1), // form name of the grid
  sSplitter : '$', // splitter for images
  sOrientation : 'horizontal', // 'horizontal', 'vertical'
  sProgressSepText : ' / ', // separator text between item progress
  sTxtProgress : '', // text after progress text
  sForwardButton : '#forwardbutton',  // forward button jQuery selector - used for toggling the next button
  sOeDefaultHolder: '&#xf2bf;........', // default input placeholder when OEs are present
  sHideScaleType : 'keepAlignment', // method to hide the scales - 'keepAlignment', 'newAlignment'
        sDkScaleBgColor : '#E9ECEF', // background color for the DK scale
  iMinItemsRequired : null, // minimum answered items required to toggle the next button - default is null - all required
  iAnimationTime : 400, // animation time in ms
  iMaxContainerWidth : 1200, // maximum tool container width - can be used to enlarge/shrink the tool
  iVertItemContainPerc : 45, // vertical item container percentage width
        iVertItemContainMarginPerc : 5, // vertical item container percentage margin
  iFontSize : null, // font size for the tool container
  aDkScale : [99], // dk codes for scale - for example: [99,999]
  aOtherNotRequired : [], // other not required item codes - for example: [99,999]
  aOtherPlaceHolder : [], // other input custom placeholder - for example [{'98': 'Please specify'}, {'998': 'Specify'}] 
  aOtherOpenOptional: [], // other OE input not required - next button will be toggled without the need of OE input - scale can still be chosen - for example: [98, 998]
        aHideScaleCodes: [], // hide scales for specific codes [{98: [1,3]}, {1: [2,4]}]
  oElementConfig : { // element/item config object
    bImages : false, // images as options - using the splitter
    bShowLabel : true, // show labels for the options
    bShowOeImage : false, // if OE - should it show an image for the other option
    bZoomEnabled : false, // is zoom enabled
    sZoomImage : '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/images/zoom_icon2.png', // zoom icon image path
    sZoomPosition : 'br', // position for the zoom icon - 'br', 'bl', 'tl'
    sImagePath : '', // path for the images to be used with the splitter
    sSmallImageExtension : '_S.jpg', // extension for the small image (default shown)
    sLargeImageExtension : '_L.jpg', // extension for the zoomed image
    iMaxImageWidth: 100, // maximum image width - needs to be lower than iWidth
    iMaxImageHeight: 100, // maximum image height - needs to be lower than iHeight
    iWidth : 130, // overall item container width
    iHeight : 100, // overall item container height
    iHorizontalSpacing : 15, // horizontal spacing between items
    iVerticalSpacing : 5, // vertical spacing between items
    iFontSize: null // font size for the item container
  },
  oScaleConfig : { // scale config object
    bImages : false, // images as options - using the splitter
    bShowLabel : true, // show labels for the options
    bZoomEnabled : false, // is zoom enabled
    sZoomImage : '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/images/zoom_icon2.png', // zoom icon image path
    sZoomPosition : 'br', // position for the zoom icon - 'br', 'bl', 'tl'
    sImagePath : '', // path for the images to be used with the splitter
    sSmallImageExtension : '.png', // extension for the small image (default shown)
    sLargeImageExtension : '.png', // extension for the zoomed image
    iMaxImageWidth: 62, // maximum image width - needs to be lower than iWidth
    iMaxImageHeight: 62, // maximum image height - needs to be lower than iHeight
    iWidth : 80, // scale button width
    iHeight : 20, // scale button height
    iHorizontalSpacing : 10, // horizontal scale spacing
    iVerticalSpacing : 10, // vertical scale spacing
    iFontSize: null // font size for the scale container
  },
  oFancyBoxConfig : {}, // config for adding custom fancybox parameters - //fancyapps.com/fancybox/#docs
  bInvertItemScale : false, // invert the item/scale containers - top/bottom for horizontal, left/right for vertical 
  bHeightAuto : false, // make the items/scales have auto height for horizontal view - should not be used for vertical 
  bScaleNewLine: true, // make the scale in horizontal mode render vertically (one below the other) when not enough horizontal space for all scales
  bReverse : false, // reverse the direction of the items/navigation arrows
  bShowProgressText : false, // show the progress text progress
  bShowProgressIndicator :  true, // show the progress indicator
  bDisableNavigation : false, // disable navigation arrows - will only be allowed for multi or when no AutoNext item is false
  bAutoNextItem : true, // automatically go to next item when selected - working on multi only when DK scale is selected
  bAutoSubmit : false, // auto submit page when all items are answered
  bInitialNavigation : false, // initial navigation toggle
        bEnableNavAnswered : false, // Enable navigation for already answered items only. Not applicable when bDisableNavigation or bInitialNavigation is enabled. 
  bMultiple : false, // is the grid multiple
        bAutoSizeScales : false, //Automatically re-render scales to fit the width. Not applicable when bScaleNewLine is enabled or when oScaleConfig.iFirstLastWidth is set.
  bIsTest : true, // will make the tool warning appear as JavaScript alerts to make sure they are handled
  onStart : function() {
          if ($('.grid-group-header-label').length) $('.grid-group-header-label').parent().remove();
          if ($('.scale-group-header').length) $('.scale-group-header').parent().remove();
        }, // function called before the tool starts generating
  onAnswer : function(e) {}, // function called when an answer is given (click on scale)
  onInput : function(e) {}, // function called on OE input (item)
  onCompleted : function() {}, // function called when all items are answered (unless OE not required codes are defined) before next button is toggled
  onReady : function() {}, // function called after tool is fully loaded
}

$('body').gridClick(config);

var toolId;toolId=config.bMultiple?config.oElementConfig.bImages?"jMGTI001":"jMGTT001":config.oElementConfig.bImages?"jGTI001":"jGTT001";

countIt({
  "tool-id" : toolId, 
  "project-id"  :  "^CurrentPID()^",
  "order-id"  :  "^getOrderID()^"
});
});
</script>
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//开放题禁止为空
function validateOpen(qid) {
  if(qid.toBoolean()){
    var tt=qid.toString();
    var TT=tt.Trim();
    if(TT=="") {
      if(f('l').get()==9){
          RaiseError();
          ClearErrorMessage();
          SetQuestionErrorMessage(CurrentLang(), "The input should not be empty！");
         }else{
          RaiseError();
          ClearErrorMessage();
          SetQuestionErrorMessage(CurrentLang(), "请注意，文本框不允许为空，请在相应题目下填入相应答案。");
         }
    }
  }
}


function validateOpenList(qid) {
  if(qid.toBoolean()) {
      var precodes=qid.domainValues();
      for(var i=0;i<precodes.length;i++){
      var code=precodes[i];
      if (qid[code].toBoolean()) {
         if(qid[code].toString().Trim().length==0) { 
          if(f('l').get()==9){
           RaiseError();
           ClearErrorMessage();
           SetQuestionErrorMessage(CurrentLang(), "The input should not be empty！");
          } else {
           RaiseError();
           ClearErrorMessage();
           SetQuestionErrorMessage(CurrentLang(), "请注意，文本框不允许为空，请在相应题目下填入相应答案。");
          }
        }
      }
        
     }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//查询数据库中某一题是否有相同的数据，比如电话号码，返回值是布尔值，true或者false
isFieldValueTaken('V3B_1', f('V3B_1').get())
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//隐藏题不要使用Global模板里的特殊效果，会圈不上值，后面引用会出问题
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//texthighlighting 概念测试题 改变“以上皆无”按钮样式
// 控制按钮样式在 ^jQueryToolColor("text_highlighting")^里
// 将其替换成<link rel="stylesheet" type="text/css" href="/isa/PYAMLMFAKKOYIBEYNHKRJRBIMIEALXOH/339612/typeCSS.css"/>
// 参考项目
//FS ORD-339612-Y4K1-For Client*Test* (p3590458)
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//texthighlighting 概念测试题 同页面有开放题，并且有报错提示，当报错，刷新页面后，已选择的项会重置，以下代码防止次问题发生

$(".confirmit-grid tbody").find("tr").each(function(index) {
  if($(this).find("input").is(":checked")) {
      $("span#" + (index + 1)).css({"background-color":"#006838","color":"#fff"});
      $("#forwardbutton2").css("visibility", "visible");
  } else {
      $("span#" + (index + 1)).css({"background-color":"#fff","color":"#000"});
      
  }
})

$("#target").find("span").each(function() {
  $(this).click(function() {
      $(".confirmit-grid tbody").find("tr").each(function(index) {
          if($(this).find("input").is(":checked")) {
              $("span#" + (index + 1)).css({"background-color":"#006838","color":"#fff"});
              $("#forwardbutton2").css("visibility", "visible");
          } else {
              $("span#" + (index + 1)).css({"background-color":"#fff","color":"#000"});
              
          }
      })
  })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid 根据之前题目的答案，出示对应的文本框
$('input[type="text"]').hide();

var arr1="^f('Q17HID_1').get()^";
//console.log("arr1", arr1);
arr1=arr1.split(",");
var arr2="^f('Q17HID_2').get()^";
//console.log("arr2", arr2);
arr2=arr2.split(",");
var arr3="^f('Q17HID_3').get()^";
//console.log("arr3", arr3);
arr3=arr3.split(",");

//console.log(arr1, arr2, arr3)

$.each(arr1,function(index,value){
	//console.log("index", index, "value", value);
  $("#Q19x1_"+arr1[index]).show();
  $("#Q19x1_"+arr1[index]).after("分钟");
});

$.each(arr2,function(index,value){
	//console.log("index", index, "value", value);
  $("#Q19x2_"+arr2[index]).show();
  $("#Q19x2_"+arr2[index]).after("分钟");
});

$.each(arr3,function(index,value){
//	console.log("index", index, "value", value);
  $("#Q19x3_"+arr3[index]).show();
  $("#Q19x3_"+arr3[index]).after("分钟");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

