const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
     
      // remove line with error and write your code herecalculateDepth(arr, count = 1) {
          let count = 1;
          if (!Array.isArray(arr)) 
          return 1;
          arr.forEach(item => {
              if (Array.isArray(item)) {
                  count = Math.max(this.calculateDepth(item) + 1, count);
              }
          })
          return count;
      }
  };