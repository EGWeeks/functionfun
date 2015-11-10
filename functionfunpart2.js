// - Define a function called oldestPerson that takes an object with names as keys and
// ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and
// then returns the name of the oldest living person.
var oldies = {
	'Chuck Norris' : 101,
	'Dolly Parton' : 89,
	'Rick James' : 78,
	'John Deere' : 56,
	'Steve Jobs' : 102,
	'Clif Bar' : 99
}

function oldestPerson(obj) {
	var arr = []
	// loop through prop value and store them in an array
	for (var prop in obj) {
		arr.push(obj[prop]);
	}
	// using the max method to store the greatest value in oldest
	var oldest = Math.max.apply(Math, arr);
	// loop through the objects prop values to find the value that matches the oldest value
	for(var prop in obj) {
		if ( obj[prop] === oldest) {
			return prop;
		}
	}
}

console.log(oldestPerson(oldies));

// - Define a function called longestWord that takes
// a string and returns the longest word in the string.
// Refactor the longestWord function so that it ignores punctuation.
function longestWord(str) {
	//replace all characters that are not letters, digit, whitespace
	var str = str.replace(/[^\w\s\ ]/g, '');
	// split each word up and store in array
	var strSplit = str.split(' ');
	// loops through array and stores the strings length in new array
	var strLength = [];
	for(var i=0; i < strSplit.length; i++) {
		strLength.push(strSplit[i].length);
	}
	// longestStr value equals index of the longest string
	var longestStr = strLength.indexOf(Math.max.apply(Math, strLength));
	return strSplit[longestStr];
}

console.log(longestWord("Butters!, is, the, best?"));
// - Define a function called factorial that takes a random number
// as an argument and then returns the factorial of that given number.

function factorial(randomNum) {
	var factNum = 1;
	for(var i=2; i <= randomNum; i++) {
		// factNum represents the factorial for each iteration 
		factNum = factNum * i;
		console.log(factNum)
	}
	return factNum;
}

console.log(factorial(5));
// Bonus: Write a function called palindrome that takes a string as an argument
// and returns the string in reversed order. Return true if the string 
// is the same as the reversed string, otherwise return false.

function palindrome(str) {
	str = str.toLowerCase();
	var result = str.split("").reverse().join("");
	console.log(result);
	if (str === result) {
		return true;
	} else {
		return false;
	}
}

console.log(palindrome("racecar"));
console.log(palindrome("Noel sees Leon"));