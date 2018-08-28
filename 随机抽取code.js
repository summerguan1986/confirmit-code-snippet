var fromForm = f("");
var toForm = f("");
const numberOfItems = 3;

var available = new Set();
available = available.union(fromForm);
var selected = new Set();
if(available.size() <= numberOfItems)
{
  selected = available;
}
else
{
  while(selected.size() < numberOfItems)
   {
    var codes = available.members();
    var randomNumber = Math.random()*codes.length;
    var randomIndex = Math.floor(randomNumber);
    var selectedCode = codes[randomIndex];
    available.remove(selectedCode);
    selected.add(selectedCode);
   }
}

toForm.set(selected);
