//伸缩表格20180907

//为子元素加类 隐藏所有子元素
$('.group-answer-input').each(function(){
$(this).parent().addClass('selItem');
$(this).parent().hide();
})

//为父元素加类和样式
$('<span class="selText">+ <span>').prependTo($('.confirmit-group-header'));
for(var i=0;i<$('.confirmit-group-header').length;i++){
$('.confirmit-group-header').eq(i).parent().addClass('box_'+i);
}
$('.confirmit-group-header').parent().addClass('box');
$('.box').css({'cursor':'pointer','display':'block','border':'1px white solid','border-radius':'3px'});

//为父元素添加事件控制子元素显隐，切换父元素html.应用nextUntil控制兄弟元素从当前对象开始到所有符合要求的的同类兄弟元素
$('.confirmit-group-header').parent().click(function(){
var ind=$('.confirmit-group-header').parent().index(this);
$(this).nextUntil('.box_'+(ind+1)).toggle().toggleClass('seled');
if($(this).next('.selItem').attr('class')=='selItem seled'){
$('.selText').eq(ind).html('- ');
}else{
$('.selText').eq(ind).html('+ ');
}

})
//hover事件控制父元素样式
$('.confirmit-group-header').parent().hover(function(){
$(this).css({'background-color':'#bdcfe3','border':'1px #cfdceb solid'});
},function(){
$(this).css({'background-color':'white','border':'1px white solid'});
})
