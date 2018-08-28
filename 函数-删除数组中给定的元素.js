//删除数组中给定的元素
function remove(arr, item) {
  return arr.filter(function(x) { return x !== item; });
}
