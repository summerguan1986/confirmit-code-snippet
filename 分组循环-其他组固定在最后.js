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
