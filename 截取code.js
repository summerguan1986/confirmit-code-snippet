
ClearForm(f('category3'));

var cat :String = f('random3').get();
var arr = cat.split(",");

for(var i=1;i<=arr.length;i++)
{
  f('category3')[i].set(arr[i-1])
}
