//Loop题，当循环到最后一项时，Loop里面的题的某一个选项不出示，参考项目  FS ORD-330356-F0T2 Bain*Live* (p3155960)

//做一道隐藏题，记录循环的最后一项的code
var arr = f('Q9Hidden').get();
f('lastCode').set(arr[arr.length - 1]);
//在题目的Masking：
f('l3').get() == f('lastCode').toNumber() ? a('Q16') : a('Q16').diff(set('98'))
