const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members ) {
  if (Array.isArray(members)) {
    let nickname = [];
    for(let j = 0; j < members.length; j++) {
      if(typeof members[j] === "string") {
        members[j] = members[j].replace(/\s+/g, '');
        nickname.push(members[j][0].toUpperCase())
      } 
    }
    let team = nickname.sort().join('');  
    if (team == "") {
      return false;
    } else {
      return team;
    }
  } else {
    return false;
  }
};
