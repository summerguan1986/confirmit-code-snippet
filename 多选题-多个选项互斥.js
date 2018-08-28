//多选题多个选项互斥 Global模板
$(".confirmit-table tbody").find("tr").eq(0).find("td").click(function() {
  $(".confirmit-table tbody").find("tr").eq(1).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
  $(".confirmit-table tbody").find("tr").eq(2).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
})

$(".confirmit-table tbody").find("tr").eq(1).find("td").click(function() {
  $(".confirmit-table tbody").find("tr").eq(0).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
  $(".confirmit-table tbody").find("tr").eq(2).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
})

$(".confirmit-table tbody").find("tr").eq(2).find("td").click(function() {
  $(".confirmit-table tbody").find("tr").eq(1).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
  $(".confirmit-table tbody").find("tr").eq(0).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
})
