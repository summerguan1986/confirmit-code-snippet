$("th.grid-group-header-label").removeAttr("colspan");
for(var i = 1; i <= $('th.scale').length; i++) {
    for(j = 1; j <= 5; j++) {
        $("th.grid-group-header-label").eq(j).parent().append('<td>' + $("#Q2A1_header" + i).text() + '</td>');            
    }

}
