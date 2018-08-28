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
