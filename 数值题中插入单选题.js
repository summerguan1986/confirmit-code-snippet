//把单选题插入到Numeric题中去  FS ORD-311237-J1T7-Gym study-Bain*test* (p2249675)
$('#Q14b_102_label').parent().parent().after("<tr><td id=\"txt1\"></td><td id=\"btn1\"></td><td id=\"btn2\"></td></tr>");
$('.showTitle').remove();
$("#txt1").html($('#Q14c_text').html());
$('#btn1').append($('input#Q14c_1').css({'width':'100%','height':'30px'}).closest('tr'));
$('#btn2').append($('input#Q14c_2').css({'width':'100%','height':'30px'}).closest('tr'));
