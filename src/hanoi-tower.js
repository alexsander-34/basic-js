const CustomError = require("../extensions/custom-error");



module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
   
  let rez= { };
      rez.turns=Math.pow(2, disksNumber)-1;
      rez.seconds=rez.turns/(turnsSpeed/3600);

      return rez;
}