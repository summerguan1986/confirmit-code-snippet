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
