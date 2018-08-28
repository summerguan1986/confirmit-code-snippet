.confirmit-table{
  border-collapse:unset !important;
}
.confirmit-table td{display:inline !important;}
td.answerlabel{display: none !important;}
.questionarea table {
  width: auto !important;
}

^f('Device').get()!='1'?"<style>.numberinput{width:80px}</style>":""^

$('#Q16_2').after(" <span style=\"margin-left:5px;\">万元</span>");
$('#Q16_1').after(" <font size=\"2px\">.</font>");
$('.confirmit-table').parent().css('width','0%');
$('.confirmit-table').eq(1).css({'position':'relative','left':'-8px'});
