//选取数值题中填写最大的前三项
function sortArray(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var array = [];

for (var i = 1; i <= 11; i++) {
    if (f('Q2x3')[i].toBoolean()) {
        array.push(f('Q2x3')[i].toNumber());
    }
}


sortArray(array);

ClearForm(f('Q2x7Hidden'));

var form = f('Q2x3');
var form2 = f('Q2x7Hidden');
var precodes = form.domainValues();
for (var i = 0; i < precodes.length; i++) {
    var code = precodes[i];
    if (form[code].toNumber() == array[0]) { form2[code].set('1') }
    else if (form[code].toNumber() == array[1]) { form2[code].set('1') }
    else if (form[code].toNumber() == array[2]) { form2[code].set('1') }
}
