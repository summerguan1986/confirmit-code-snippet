//页面多题，顺序随机，题干始终出现在第一顺位的题目上
//其他题目的题干记得设置 &nbsp;否则DOM中不会出现题干
$(".text").first().html('Your additional text here');
//或者
$(".text").first().html('Your additional text here<br /><br />'+$(".text").first().html());
