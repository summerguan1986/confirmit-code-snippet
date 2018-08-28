/**
 * @param arr 多选题已选中选项对应的code数组
 * @param chooseArr 优先选择的选项对应的code数组
 * @param removeArr 需要排除的选项对应的code数组
 * @param chooseCount 随机选中的选项个数
 */
 function randomChoose(arr, chooseArr, removeArr, chooseCount) {
  var checkObj = {},
  unCheckObj = {},
  chooseCode = function(list, codes, count, remObj) {
    while (codes.length < count) {
      var index = Math.floor(Math.random() * list.length);
      if (!remObj[list[index] + '']) {
        codes.push(list[index]);
      }
      list.splice(index, 1);
    }
  },
  fillObj = function(list, obj) {
    if (list && list.length > 0) {
      for (var i = 0, len = list.length; i < len; i++) {
        obj[list[i] + ''] = 1;
      }
    }
  },
  removeCode = function(list, obj) {
    var result = [];
    if (list && list.length > 0) {
      for (var i = 0, len = list.length; i < len; i++) {
        if (!obj[list[i] + '']) {
          result.push(list[i]);
        }
      }
    }
    return result;
  };

  fillObj(chooseArr, checkObj);
  fillObj(removeArr, unCheckObj);

  if (arr.length > chooseCount) {
    var brr = [],
    crr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (checkObj[arr[i] + '']) {
        brr.push(arr[i]);
      } else {
        crr.push(arr[i]);
      }
    }

    if (brr.length > chooseCount) {
      arr = [];
      chooseCode(brr, arr, chooseCount, unCheckObj);
    } else {
      arr = brr;
      chooseCode(crr, arr, chooseCount, unCheckObj);
    }
  }

  return removeCode(arr, unCheckObj);
}

//优选2
/*
@param codes 多选题已选到的选项Code数组
@param listOne 第一个需要优选的数组
@param listTwo 第二个需要优选的数组
@param preOne 第一个优选数组中必选的Code数组
@param preTwo 第二个优选数组中必选的Code数组
@param oneCount 第一个优选数组随机选中的个数
@param TwoCount 第二个优选数组随机选中的个数
*/
function randomChooseTwo(codes, listOne, listTwo, preOne, preTwo, oneCount, twoCount) 
{
  var checkObjOne = {},
  checkObjTwo = {},
  preObjeOne = {},
  preObjTwo = {},
  fillObj = function(list, obj) {
    if (list && list.length > 0) {
      for (var i = 0, len = list.length; i < len; i++) {
        obj[list[i] + ''] = 1;
      }
    }
  },
  choosePreObj = function(list, arr, obj, brr) {
    for (var i = 0, len = list.length; i < len; i++) {
      if (obj[list[i] + '']) {
        arr.push(list[i]);
      }
    }
    for(var i=0, len=brr.length; i<len; i++){
     removeCode(list, brr[i]);
   }
 },
 chooseObj = function(list, arr, count, obj) {
  while (arr.length < count) {
    var index = Math.floor(Math.random() * list.length);
    if (!obj[list[index] + '']) {
      arr.push(list[index]);
    }
    list.splice(index, 1);
  }
},
chooseObj2 = function (list, arr, count) {
 while (arr.length < count) {
  var index = Math.floor(Math.random() * list.length);
  if (!isContain(arr, list[index])) {
    arr.push(list[index]);
  }
  list.splice(index, 1);
}
},
isContain = function (arr, code){
 var flag = false;
 for(var i=0, len=arr.length; i<len; i++){
  if(parseInt(code, 10) === parseInt(arr[i], 10)){
   flag = true;
   break;
 }
}
return flag;
},
removeCode = function(arr, code) {
  for(var i=0, len=arr.length; i<len; i++){
    if(parseInt(code, 10) === parseInt(arr[i], 10)){
     arr.splice(i, 1);
     break;
   }
 }
},
codeOne = [],
codeTwo = [];

fillObj(listOne, checkObjOne);
fillObj(listTwo, checkObjTwo);
fillObj(preOne, preObjeOne);
fillObj(preTwo, preObjTwo);

var arr1 = [],
arr2 = [];
for (var i = 0, len = codes.length; i < len; i++) {
  if (checkObjOne[codes[i] + '']) {
    codeOne.push(codes[i]);
  } else if (checkObjTwo[codes[i] + '']) {
    codeTwo.push(codes[i]);
  }
}

if (codeOne.length > oneCount) {
        // codeOne随机
        choosePreObj(codeOne, arr1, preObjeOne, preOne);
        chooseObj(codeOne, arr1, oneCount, preObjeOne);
        if (codeTwo.length > twoCount) {
            // condeTwo各随机选
            choosePreObj(codeTwo, arr2, preObjTwo, preTwo);
            chooseObj(codeTwo, arr2, twoCount, preObjTwo);
          } else {
            // codeOne填补codeTwo
            if((codeOne.length + codeTwo.length) > twoCount){
             chooseObj(codeOne, codeTwo, twoCount, {});
           }else{
             for(var i=0, len=codeOne.length; i<len; i++){
              codeTwo.push(codeOne[i]);
            }
            chooseObj2(listTwo, codeTwo, twoCount);
          }
          arr2 = codeTwo;
        }
      } else {
        if (codeTwo.length > twoCount) {
            // codeTwo随机，codeTwo填补codeOne
            choosePreObj(codeTwo, arr2, preObjTwo, preTwo);
            chooseObj(codeTwo, arr2, twoCount, preObjTwo);
            if((codeOne.length + codeTwo.length) > oneCount){
             chooseObj(codeTwo, codeOne, oneCount, {});
           }else{
             for(var i=0, len=codeTwo.length; i<len; i++){
              codeOne.push(codeTwo[i]);
            }
            chooseObj2(listOne, codeOne, oneCount);
          }
          arr1 = codeOne;
        } else {
            // codeOne、codeTwo剩余随机
            chooseObj2(listOne, codeOne, codeOne.length);
            chooseObj2(listTwo, codeTwo, codeTwo.length);
            arr1 = codeOne;
            arr2 = codeTwo;
          }
        }
        for (var i = 0, len = arr2.length; i < len; i++) {
          arr1.push(arr2[i]);
        }
        return arr1;
      }

/////项目中调用
ClearForm(f('HidA2x1'));

var codes=f('A2x1').get();

f('HidA2x1').set(randomChooseTwo(codes, [1,2,3,4,5,6,7,8], [13,14,15,16,17,18], [6], [13], 4, 4));
