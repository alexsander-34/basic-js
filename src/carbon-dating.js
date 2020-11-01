const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {

  if (typeof sampleActivity !== 'string'|| Number.isNaN(sampleActivity )) {
    return false;
  }
  if (/[^[0-9.,]/.test(sampleActivity)) {
   return false;
  }
  if (sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY) {
   
    let t = (Math.log(MODERN_ACTIVITY / sampleActivity)) /0.693 * HALF_LIFE_PERIOD;
  return Math.ceil(t);
  }

  return false
  // remove line with error and write your code here
};
