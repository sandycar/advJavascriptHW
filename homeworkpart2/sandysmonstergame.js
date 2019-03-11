var inquirer = require('inquirer');

function Human(n, h){
	this.name= n;
	this.health=parseFloat(h);
}

var human1 = new Human("Sandy", 100)
console.log(human1)

function Survivor(n, h){
	// Math.random() * (max - min) + min;
	this.lucky_number= Math.floor(Math.random() *30) + 1;
	Human.call(this, n, h)

}
Survivor.prototype = Object.create(Human.prototype)

Survivor.prototype.escape = function(){
//You have to retrun inquirer or it won't work
return inquirer
  	.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Guess a number between 1 and 30",
      name: "luckynumber"
      default: 3
    }
    ])
    .then (function(res){
    if (res.confirm) {
      console.log("\nYou guessed: " + parseInt(res.luckynumber));
    }
    else {
      console.log("\nGuess again");
    }

    })
    

