// Load library
var howManyPizza = require('how-many-pizza');
	util 	= require('../util');

module.exports = function (param) {
	var	channel		= param.channel,
		people	= param.args[0];
		slicexperson = param.args[1];
		slicexpizza = param.args[2];

	if (!param.args[0]){
		util.postMessage(channel, "Usage: !Pizza [people] [slicesXperson] [#slicesXpizza]");
	} else{
		util.postMessage(channel, howManyPizza(Number(people),Number(slicexperson),Number(slicexpizza)) + " Pizzas");
	}

//console.log(howManyPizza(Number(people),Number(slicexperson),Number(slicexpizza)));

		// Calculate pizzas for 50 people
//console.log(howManyPizza(50)); // => 19
 
// Calculate pizzas for 50 people
// 4 slices per person and pizzas of 12 slices
//console.log(howManyPizza(50, 4, 12)); // => 17
	

		

};