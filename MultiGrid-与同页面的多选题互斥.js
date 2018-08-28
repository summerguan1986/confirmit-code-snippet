//Multi Grid题目 与在同一页面的多选题互斥 参考项目FS ORD-326076-G9B6-Bain*Test* (p2944100)
$(".confirmit-table tbody").find("tr").click(function() {
  $(".confirmit-grid tbody").find("tr").each(function() {
    $(this).find(".gridcell").find("a").find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/checkboxred1.png");
    $(this).find(".gridcell").find("input[type=checkbox]").attr("checked",false);
    
  })
})

$(".confirmit-grid tbody").find("tr").each(function () {
  $(this).find(".gridcell").click(function() {
    $(".confirmit-table tbody").find("a").find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/checkboxred1.png");
    $(".confirmit-table tbody").find("input[type=checkbox]").attr("checked",false);
  })
})
