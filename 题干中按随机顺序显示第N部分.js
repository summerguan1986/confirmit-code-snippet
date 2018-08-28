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
