//单选题
f('Type').set(GetLeastFilledQuotaCodes('Type',1,f('QS6').get()).toString());
//多选题
f("Type").set(new Array(GetLeastFilledQuotaCodes('Type', 5,f("QS6").get())));
