
ClearForm(f('category3'));

var cat = f('random3').categories();
var arr = cat.split(",");

for(var i=1;i<=arr.length;i++)
{
  f('category3')[i].set(arr[i-1])
}
