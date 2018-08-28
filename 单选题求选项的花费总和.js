//如果单选题的Label是花费金额，并且需要求多个单选题选到的花费金额的总和，可用parseInt()函数
f('sumCOST').set(parseInt(f('Q1').valueLabel()) + parseInt(f('Q2').valueLabel()));



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
