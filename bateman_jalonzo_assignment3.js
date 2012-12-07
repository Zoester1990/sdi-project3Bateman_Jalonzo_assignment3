// JavaScript Document
/* Jalonzo Bateman
Assignment 3
SDI 1209
*/






var friends;
friends = (" John,Joe, and James");
var pizzaNames;
pizzaNames =(" bacon pizza and peperoni pizza "); //strings part of the story. 

console.log (" Me " + friends + " went to the pizza cafe donw the street, we had got finished playing basketball.");
console.log(" So we " + friends + " went to order pizza, we had to choose from " + pizzaNames + " they decided to get them both. ");
console.log ( " We also wanted something to drink, so they asked the waiter for the prices on the drinks.");
console.log (" So the waiter gave them the prices for the drinks.");
console.log (" So " + friends + " read off the prices of the drinks. ");


 

//My array	
	var drinks;  
	drinks 	 = ("Cola","Grape","Water");
;

var drinks =["Cola", "Grape","Water"];

var adjectives =["$ 1.50",
				"$ 2.00",
				"FREE"
];


//function
var feedFriends = function(friendsNames,pizza){
	console.log("  The waiter servered  some " + pizzaNames + " to " + friends);
};
feedFriends(" John ", "bacon ");
feedFriends(" James and Joe ", " peperoni ")




//The objects
var John ={
	age:"18",
	money: "$14.00",
	pizzaChoice:"bacon",
	slices:"7",
	prices:"$7",
	deepDish:false
};

var James ={
	age:"19",
	money:"$20.00",
	pizzaChoice:"peperoni",
	slices: "4",
	prices:"$4",
	deepDish:true
};

var Joe ={
	age:"18",
	money:"$15.00",
	pizzaChoice:"peperoni",
	slices:"4",
	prices: "$4",
	deepDish:true
};

var pizzaCost ={
	pizzaChoice1:"bacon $1.50 a slice",
	pizzaChoice2:"peperoni 1.25 a slice",
	slicesBought1: "7 slices of bacon",
	slicesBought2:"8 slices of peperoni",
	totalAmount: "$ 20.50 "
} ;
//For loops
for (var i=0, j= drinks.length; i < j; i++) {
	console.log("" + drinks[i] + " is " + adjectives[i] )
	};
var totalAmount = pizzaCost.totalAmount 
console.log ("And they all decided to get water")
console.log (" All together " + friends + "paid the total amount of " + totalAmount)
console.log ("So the pizza got to the table and they all started to eat.")




var pizzaNames =[ "bacon pizza", "cheese pizza",],
	slicesPerPizza=[ 7, 8];
for (var pizzaNumber = 0; pizzaNumber < pizzaNames.length; pizzaNumber++){
	var pizzaName = pizzaNames [pizzaNumber],
		slicesThisPizza = slicesPerPizza[pizzaNumber];
    console.log("Start to eat the " + pizzaName+ " of " + slicesThisPizza + " slices.");
	for (var slices = 0; slices < slicesThisPizza; slices += 1){
	var slicesRemain = slicesThisPizza - slices;
    console.log(slices +" done " + slicesRemain + " to go ");
  }	

  console.log(" They are done eating  the " + pizzaName + ".");
};