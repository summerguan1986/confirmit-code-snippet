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
