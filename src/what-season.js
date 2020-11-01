const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date ) {
  
  // remove line with error and write your code here
  if(!date){return "Unable to determine the time of year!";}
	else if(Date.prototype.toString.call(date) === "Invalid Date"){throw "Invalid date"; return;}
	
	if(/Sep|Oct|Nov/.test(date) === true){return "autumn";}
	else if(/Dec|Jan|Feb/.test(date) === true){return "winter";}
	else if(/Mar|Apr|May/.test(date) === true){return "spring";}
	else if(/Jun|Jul|Aug/.test(date) === true){return "summer";}
	return;
};