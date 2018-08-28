$(document).ready(function(){
  var hover_index = 0;
  $("#fieldset_switch2ae table td").hover(function (){
    hover_index =  $(this).parent().find('td').index(this);
    $("#fieldset_switch2ae table tr").find("td:eq("+hover_index+")").addClass("hover");
  },function(){
    $("#fieldset_switch2ae table tr").find("td:eq("+hover_index+")").removeClass("hover");
  });
});
