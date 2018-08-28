for(var i=1;i<=10;i++){
  if(f('B2_'+i).get().indexOf("博世")!=-1) {f('B3')['1'].set('1')}
  if(f('B2_'+i).get().toUpperCase().indexOf("BOSCH")!=-1) {f('B3')['1'].set('1')}
}
