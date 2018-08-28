//JDP 进度条
$(document).ready(function(){
  function chunk(array, chunkSize) {
   var i, j, temparray = [], chunk = chunkSize;
   for (i = 0, j = array.length; i < j; i += chunk) {
    temparray.push(array.slice(i, i + chunk));
  }
  return temparray;
}

function getData(current, toSwitch) {
 var qidsIndex = _.indexOf(qids, current);
 var diffIndex = _.indexOf(diff, current);
 var wQidIdx = (qidsIndex + 1) * weight;
 var wDiffIdx = (diffIndex + 1) * weight;
 var wDiffAdd = wDiffIdx + ((diffIndex + 1) * diffWeight);

     //console.log([qidsIndex, current, wQidIdx.toFixed(2), wDiffAdd.toFixed(2)]);
     toSwitch = toSwitch || false;
     return !toSwitch ? wQidIdx.toFixed(2) : wDiffAdd.toFixed(2);
   }

   try{
     //var qids = ['Intro1', 'Intro2', 'S1', 'infoScreener2', 'S2', 'S3', 'S4a', 'S4b', 'S4c', 'InfoQ3', 'Q3', 'Q4', 'IntroQ5', 'Q5A', 'Q5B', 'Q5C', 'Q5D', 'Q5E', 'Q5F', 'Q5G', 'Q5H', 'Q5I', 'Q6', 'Q6a', 'infoQ6', 'i205', 'i126', 'i295', 'i213', 'i127', 'i296', 'Q6ax3', 'i128', 'i297', 'i229', 'i129', 'i298', 'i237', 'i118', 'i299', 'i245', 'i119', 'i300', 'i253', 'i120', 'i301', 'i261', 'i121', 'i302', 'i173', 'i122', 'i303', 'i181', 'i123', 'i304', 'i189', 'i124', 'i305', 'i197', 'i125', 'i306', 'i157', 'i114', 'i307', 'i165', 'i115', 'i308', 'i149', 'i116', 'i309', 'i269', 'i117', 'i310', 'i277', 'i112', 'i311', 'i285', 'i113', 'i312', 'i293', 'i111', 'i313', 'Q6ax20', 'i110', 'i314', 'i1122', 'i1124', 'i1126', 'i1105', 'i1107', 'i1115', 'i1093', 'i1095', 'i1098', 'i1081', 'i1083', 'i1086', 'i1066', 'i1068', 'i1153', 'i1074', 'i1053', 'i1055', 'i1059', 'i1040', 'i1042', 'i1046', 'i1025', 'i1027', 'i1033', 'Q6ax29', 'i1157', 'i1160', 'iQ6ax30', 'i30', 'i1176', 'iQ6ax31', 'i1186', 'i1188', 'iQ6ax32', 'i1208', 'i1210', 'iQ6ax33', 'i1197', 'i1199', 'iQ6ax34', 'i1230', 'i1232', 'iQ6ax35', 'i1219', 'i1221', 'Q7', 'Q8', 'Q9A', 'Q9B', 'Q10', 'Q11A', 'Q11B', 'Q11C', 'Q12', 'Q13A', 'Q13B', 'Q14A', 'Q14B', 'Q15', 'Q16', 'Q17A', 'Q17B', 'Q17C', 'Q17D', 'Q17E', 'Q17F', 'Q17G', 'Q17H', 'Q18', 'background', 'Q20', 'Q22', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29', 'infoAppend', 'D26f', 'F22Af', 'A18Af', 'H22f', 'T16f1', 'T16f2', 'infoEdu', 'D38f','F20f', 'T10T13f', 'Q636f','i1154'];
     var qids = ['Intro1', 'Intro2', 'S1', 'infoScreener2', 'S2', 'S3', 'S4a', 'S4b', 'S4c', 'InfoQ3', 'Q3', 'Q4', 'IntroQ5', ^f('qrotate').domainLabels()^ , 'Q6', 'infombp','Q6a', 'infoQ6', ^f('qrandom').domainLabels()^ , 'Q7', 'Q8', 'Q9A', 'Q9B', 'Q10', 'Q11A', 'Q11B', 'Q11ca','Q11cb' ,'Q12', 'Q13A', 'Q13Ba','Q13Bb', 'Q14A', 'Q14B', 'Q15', 'Q16', 'Q17A', 'Q17B', 'Q17C', 'Q17D', 'Q17E', 'Q17F', 'Q17G', 'Q17H', 'Q18', 'background', 'Q20', 'Q22', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29', 'infoAppend', 'D26f', 'F22Af', 'A18Af', 'H22f', 'T16f1', 'T16f2', 'infoEdu', 'D38f','F20f', 'T10T13f', 'Q636f'];    
     //var Q6Rc = _.range(1, 36, 1);
     var Q6Rc = [^f('qrandom').domainValues()^];
     Q6Rc = _.difference(Q6Rc, [^f('Q6Rc').get()^]);

     var Q6RcQids = {
      1 : ["i205", "i126", "i295"],
      2 : ["i213", "i127", "i296"],
      3 : ["Q6ax3", "i128", "i297"],
      4 : ["i229", "i129", "i298"],
      5 : ["i237", "i118", "i299"],
      6 : ["i245", "i119", "i300"],
      7 : ["i253", "i120", "i301"],
      8 : ["i261", "i121", "i302"],
      9 : ["i173", "i122", "i303"],
      10 : ["i181", "i123", "i304"],
      11 : ["i189", "i124", "i305"],
      12 : ["i197", "i125", "i306"],
      13 : ["i157", "i114", "i307"],
      14 : ["i165", "i115", "i308"],
      15 : ["i149", "i116", "i309"],
      16 : ["i269", "i117", "i310"],
      17 : ["i277", "i112", "i311"],
      18 : ["i285", "i113", "i312"],
      19 : ["i293", "i111", "i313"],
      20 : ["Q6ax20", "i110", "i314"],
      21 : ["i1122", "i1124", "i1126"],
      22 : ["i1105", "i1107", "i1115"],
      23 : ["i1093", "i1095", "i1098"],
      24 : ["i1081", "i1083", "i1086"],
      25 : ['i1066', 'i1068', 'i1153', 'i1074'],
      26 : ["i1053", "i1055", "i1059"],
      27 : ["i1040", "i1042", "i1046"],
      28 : ["i1025", "i1027", "i1033"],
      29 : ["Q6ax29", "i1157", "i1160"],
      30 : ["iQ6ax30", "i30", "i1176"],
      31 : ["iQ6ax31", "i1186", "i1188"],
      32 : ["iQ6ax32", "i1208", "i1210"],
      33 : ["iQ6ax33", "i1197", "i1199"],
      34 : ["iQ6ax34", "i1230", "i1232"],
      35 : ["iQ6ax35", "i1219", "i1221"],
      36 : ["iQ6ax36", "i36", "i1245"]
    };
    if (Q6Rc.length > 0) {
      var skip = [];
      for (i in Q6Rc) {
       for (x in Q6RcQids[Q6Rc[i]]) {
        skip.push(Q6RcQids[Q6Rc[i]][x]);
      }
    }
  }

  var qAppend = "^f('Append').domainValues()^".split(",");
    //console.log(["qAppend before ", qAppend]);
    qAppend = _.difference(qAppend, "^f('Append').get()^".split(","));
    //console.log(["qAppend after ", qAppend]);   
    if(qAppend.length>0){
      skip = _.union(skip,qAppend);
    }     
          //console.log([Q6Rc, Q6Rc.length, skip, skip.length]);
          var totalQuestions = qids.length;
          var weight = 100 / totalQuestions;
          var diff = _.difference(qids, skip);
     //var diffWeight = (skip.length * weight) / diff.length;
     var diffWeight = ((106+8) * weight) / diff.length; // 106 = Q6RcQids , 8 = qAppend
     
     var toSwitch = false;

    //console.log("diffWeight: "+diffWeight);

    var percent = null;
    try {
      percent = getData("^CurrentForm()^", true);
    } catch (e) {
      // console.log("catch percent");
      // console.log(e);
      percent = null;
    }

    $('#progressbar').css('visibility', 'visible');
    if (percent != null) {
      if($('#progressbar colgroup col').length==1){
       $('#progressbar colgroup').append('<col>')
       .css({ "border-top": "1px solid #ffffff", "border-right": "1px solid #414099", "border-bottom": "1px solid #414099", "border-left": "1px solid #414099"});
     }
     $('#progressbar colgroup col:eq(1)').css('width', (100 - percent) + '%');
     $('#progressbar colgroup col:eq(0)').css('width', percent + "%");
   }

 }catch(e){
       //console.log("catch");
       //console.log(e);
     }
   });
