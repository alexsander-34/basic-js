const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  method: [],

  getLength() {
    return this.method.length;
  },

  addLink(value) {
    if (value == null) {
      this.method.push('null');
    } else {
      this.method.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || (position >= this.getLength())) {
      this.method = [];
      throw new Error();
    }

    this.method.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.method.reverse();
    return this;
  },

  finishChain() {
    let result = this.method.map( elem => `( ${elem} )`);
    this.method = [];
    return result.join('~~');
  }
};


module.exports = chainMaker;