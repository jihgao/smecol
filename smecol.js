var fs = require('fs');
var path = require('path');

module.exports = function(){
  var iarr = [40, 41, 42,43,44,45,46,47, 100,101,102,103,104,105,106,107,49];
  var karr = [30, 31, 32,33,33,35,36,37, 90,91,92,93,94,95,96,97,39];
  var jarr = [0, 1, 2, 4, 5, 7];
  var str;
  for (var i = 0,imax=16; i<imax;i++){
          for (var k=0,kmax=16;k<kmax;k++){
            str = [];
            for(var j=0,jmax = 6;j<jmax;j++){
              str.push("\x1b[" + iarr[i] + ";" + jarr[j] + ";" + karr[k] + "m^[" + iarr[i] + ";" + jarr[j] + ";" + karr[k] + "m\x1b[0m");
            }
            console.log(str.join(""));
          }
  }

  iarr = [38, 48];
  for (i = 0,imax=2; i<imax;i++){
          for (k=0,kmax=257;k<kmax;k++){
            if((k+1) % 10 === 1){
              str = [];
            }
            str.push("\x1b[" + iarr[i] + ";5;" + k + "m^[" + iarr[i] + "\t\x1b[0m");
            if((k + 1) % 10 === 0){
              console.log(str.join(""));
            }
          }
  }
}


