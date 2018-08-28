#textadd{border:1px solid #333; border-radius:4px;width:100%;margin-top:10px;font-size:16px;}
.confirmit-grid tr:first-child{border:0px;}
.gha{border:1px solid #ccc; text-align:center;}


$("#A19_header0").parent().before("<tr><td></td><td></td><td colspan=6 class=gha><b>购买渠道</b></td><td></td></tr>");

var arr = [];
var arr2 = [];
var x = 0;
var y = 0;

$("#fieldset_Q2x2 input").each(function() {
  if($.inArray($(this).prop('id').split('_')[0],arr)==-1)
  {
    arr[x]=$(this).prop('id').split('_')[0];
    x++;
  }
  if($.inArray($(this).prop('id').split('_')[1],arr2)==-1)
  {
    arr2[y]=$(this).prop('id').split('_')[1];
    y++;
  }
});

//只读模式
/*$("[id*="+arr[arr.length-1]+"]").each(function() {
$(this).prop('disabled', true);
});
*/

//改变背景颜色
$("[id*="+arr[arr.length-1]+"]").each(function() {
  $(this).css('background', "#cccccc");
});


$('#fieldset_Q2x2 input').keyup(function() {
  sum=0;
  for(x=1;x<arr.length-1;x++)
  {
    if(parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val())>0) sum+=parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val());
  }
  $('#'+arr[arr.length-1]+'_'+$(this).prop('id').split('_')[1]).val(sum);
});

for(y=0;y<arr2.length;y++)
{
  sum=0;
  z=0;
  for(x=1;x<arr.length-1;x++)
  {
    if(parseInt($('#'+arr[x]+'_'+arr2[y]).val())>0)
    {
      sum+=parseInt($('#'+arr[x]+'_'+arr2[y]).val());
      z++;
    }
  }
  if(z>0) $('#'+arr[arr.length-1]+'_'+arr2[y]).val(sum);
}
