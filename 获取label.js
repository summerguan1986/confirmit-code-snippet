//获取label  不要直接用categoryLabels()  Label中可能会有逗号

ClearForm(f('BC2Label'));

var cat :String = f('BC2Hidden').categories();
var arr = cat.split(",");

for(var i=1;i<=arr.length;i++)
{
  f('BC2Label')[i].set(f('BC2Hidden')[arr[i-1]].label());
}
