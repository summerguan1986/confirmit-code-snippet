//分组，顺序随机或循环时，让“其他”组固定在最后
//参考项目	FS ORD-347129-D1X1 Rising Sun Beauty Study (p3938650)

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


//changed this to the number of rotation needed
var order = [0,1,2,3];

var val = shuffle(order);
f('hidShuffleS6').set(val);



//建隐藏题(Open Text) hidShuffle 

//在题目中加入JS代码
//Code99是固定在最后的
$('#S6_99').parent().parent().before('<tr class="cust-other-header"><td colspan="2" class="group-header-label"><b>其他</b></td></tr>');

var $rows = [];
var $header = $(".cust-other-header");
//group to be anchored
$("#S6_971,#S6_972,#S6_973,#S6_974").each(function(){ 
  $rows.push($(this).closest("tr").detach());
});


//changed this to the number of rotation needed
var order1 = "^f('hidShuffleS6').get()^";
var order = order1.split(",");
//alert(order1);
//alert(order);

//var val = shuffle(order);


for(var i in order) {
  $header.after($rows[order[i]]);
}

$('#S6_99').parent().parent().before("<tr><td></td></tr>");
