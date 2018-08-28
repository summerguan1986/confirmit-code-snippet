//3D Grid  Numeric题 横向求和
var arr = [];
var x = 0;


$("#fieldset_Q2x2 input").each(function() {
  if($.inArray($(this).prop('id').split('_')[0],arr)==-1)
  {
    arr[x]=$(this).prop('id').split('_')[0];
    x++;
  }
});

$('#fieldset_Q2x2 input').keyup(function() {
  sum=0;
  for(x=0;x<arr.length-1;x++)
  {
    if(parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val())>0) sum+=parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val());
  }
  $('#'+arr[arr.length-1]+'_'+$(this).prop('id').split('_')[1]).val(sum);
});
