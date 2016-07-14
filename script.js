// Day 2 Exercise
var numbers = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
	sum = sum + numbers[i];
}
var average = sum/numbers.length;
console.log(average);

var myColor = ["Red", "Green", "White", "Black"];
var plus = myColor[0];
for (var i = 1; i < myColor.length; i ++) {
	plus = plus + " + " + myColor[i];
}
console.log(plus);

var array = [];
array.push("0", "2", "5", "4", "6", "8");
for (var i = 0; i < array.length; i+=1) {
	if ((array[i] % 2 == 0) && (array[i+=1] % 2 == 0)) {
		console.log(i + " - ");
	} else {
		console.log(i);
	}
}
console.log(array);

// Day 3 Exercise

var rock = function() {
	console.log("I wanna rock!");
}
rock();

var rap = function() {
	console.log("i'm Mike Jones!");
}
rap();

var convert = function(num, unit) {
	if (unit === "kilos") {
		var kilos = num * 2.2;
		console.log(kilos);
	} else if (unit === "pounds") {
		var pounds = num / 2.2;
		console.log(pounds);
	} else {
		console.log("Error!");
	}
}
convert(100, "kilos");

var giveMeArgs = function (one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
  console.log('no worries!');
}

giveMeArgs("two");

var add = function () {
  console.log(1 + 1);
}

add(3, 4, 5, 6);

var calculateAge = function (birth, current) {
	var age = current - birth;
	var age2 = age - 1;
	console.log("You are either " + age + " or " + age2);
}
calculateAge(1991, 2014);

//How to get current year using JS
var d = new Date();
var n = d.getFullYear();
var calculateAge = function (birth,n) {
    var age = n - birth;
    var age2 = age - 1;
    console.log("You are either " + age + " or " + age2);
}
calculateAge(1986, n);
//You are either 30 or 29

var isPrime = function(number) {
	for (var i = 2; i < number; i++) {
		if ((number > 1) && (number % i != 0)) {
			return true;
		} else {
			return false;
		}
	}
}
isPrime(13);

var integers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
var allItems = function(integers) {
	for (var i = 0; i < integers.length; i++) {
		sum = sum + integers[i];
	}
	return sum / integers.length;
}
allItems(integers);

var array = [1,2,3,4,5,6,7,8,9];
var insideArray = function(array, num) {
	for (var i = 0; i < array.length; i++) {
		if (num === array[i]) { // if the if is good, will return true.
			return true;
		}
	}
			return false; // after it looped through all the numbers and did not return true, we want it to stop looping, get out of the function and return false.

}
insideArray(array,22);

var array = [1,3,5,7,9];
var sum = 0;
var inCompare = function(array, num) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] < num) {
			console.log(array[i]);
			sum = sum + array[i];
			var length = i + 1; //(i+1) i is the position of the element, and it is always -1 than the number of elements.
		}
	}
	return sum / length;
}
inCompare(array, 1);

//Day 4 Exercise
var car = {
	wheels: 4,
	color: "White"
}
var user = {
  name: "Aaron",
  email: "amhayslip@gmail.com",
  family: ["Sarah", "Isaiah"],
  speak: function () {
    console.log("Hey! I'm Aaron!");
  }
}

user.speak();//if we won't put parentheses after speak, the user.speak will show the function but won't invoke it
user.family.push("Daniel");
user.family;

var person = {

}
person.firstName = "daniel";
person.lastName = "alroy";
person.greet = function() {
	console.log("hey there!");
}
person.greet();

var user = {
  name: "Aaron",
  addresses: {
    home: "12345 Hebrew Street",
    work: "35 Ahad Ha'am"
  }
}
user.addresses.work;

var nest = { //this is an object with a funciton, which is a method!:)
	slack: function() {
		console.log("slack me!");
	}
}
nest.slack();

//Day 5 Exercise

var cat = {
  makeNoise: function () {
    alert(this.noise);
  },
  noise: "Meow!"
};

var dog = {
  makeNoise: cat.makeNoise,
  noise: "Woof!"
};

cat.makeNoise();
dog.makeNoise;

var makeNoiseFunction = function () {
  alert(this.noise);
}

var cat = {
  makeNoise: makeNoiseFunction,
  noise: "Meow!"
};

var dog = {
  makeNoise: makeNoiseFunction,
  noise: "Woof!"
};

cat.makeNoise();
dog.makeNoise();


var person = {
  hungry: true,

  feed: function () {
    if (this.hungry) { //fixed hungry to this.hungry (means) if person.hungry (=true) run the function.
      hungry = false;
      alert('Im no longer hungry!');
    }
  }
}
person.feed();

var pump = function (amount) {
	this.liters += amount;//liters wasn't defined. now it will refer to which ever object calls it
  console.log('You put ' + amount + ' liters in ' + this.name);
};

var garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  }, //comma between two properties
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ', garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);


var pumpFuel = function (plane) {
  this.fuel += 1;
};

var airplane = {
	fuel: 0,
	pump: pumpFuel,//calls the function
 	fly: function () {
    if (this.fuel < 2) {//this refers to airplane
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());//just checks the fuel now which is 0

airplane.pump();//changed the order for calling the object's function- airplane(object).pump(new property)(=which is equal to the pumpFuel function)
console.log('The plane should STILL not be able to fly: ' + airplane.fly());//calling the pump function added the fuel +=1, so now the fuel is 1

airplane.pump();//now, the fuel 1 and we're adding it through the function +=1 again, so now the fuel is 2.
console.log('Can it fly now? ' + airplane.fly());//if the fuel is 2, it can fly.

//Create a method called stealCoins that takes a number parameter
//and decreases the tipJar's coins by that amount:
var tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function(number) {
  	this.coinCount -= number;
  }
};

tipJar.tip();//when we call this it will take coinCount and add 1 to it
console.log('Wishing well should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);//
console.log('Wishing well should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Wishing well should have 8 coins: ' + tipJar.coinCount);

//Fix the following 3 syntax errors and 1 logic error. The flow of this is really tricky, 
//so take it slow and write it out if you need to.

var revealSecret = function () {
  return this.secret;
};

var shoutIt = function (person, func) {
  person.revealItAll = func;//this means person now has a new property- revealItAll(which is now a method) because it equals a function
  var result = person.revealItAll();//the function it equals to is revealSecret;
  alert(this.name + " said: " + result);
};

var avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

var narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

//Different Method for the exercise
var shoutIt = function () {
  alert(this.name + " said: " + this.secret);
};
  
  var avi = {
	  name: "Avi",
	  secret: "Im scared of snakes!",
	  shout: shoutIt
	};
  
  var narkis = {
	  name: "Narkis",
	  secret: "I dont have secrets because I'm zen like that.",
	  shout: shoutIt
	};

avi.shout();
narkis.shout();














































