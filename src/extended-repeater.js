module.exports = function repeater( str, options ) {
    
  // remove line with error and write your code here
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition = options.addition !== undefined ? options.addition : "";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";
  
  if (typeof(str) != 'string') {
      str = String(str);
      
  }
  let stmp=str;

  let a = "";
  for (let i = 1; i < additionRepeatTimes; i++) {
    a = a + addition + additionSeparator;
  }
  a += addition;

  let newstmp = "";
  for (let j = 1; j < repeatTimes; j++) {
    newstmp = newstmp + stmp + a + separator;
  }
  newstmp += stmp + a;

  return newstmp;

};