//如果单选题的Label是花费金额，并且需要求多个单选题选到的花费金额的总和，可用parseInt()函数
f('sumCOST').set(parseInt(f('Q1').valueLabel()) + parseInt(f('Q2').valueLabel()));
