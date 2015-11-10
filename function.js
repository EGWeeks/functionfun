// -Define a function called sum that takes two numbers as 
// arguments and returns their sum.

function sum(num1, num2) {
	return num1 + num2;
}

console.log(sum(2,3));
// -Define a function called isEqual that takes two arguments and returns a boolean. 
// Return true if the two arguments are equal and return false if they are not.
function isEqual(a, b){
	var result = true;
	if(a === b) {
		result;
	} else {
		result = false;
	}
	return result;
}

console.log(isEqual("beep", "beep"));
console.log(isEqual("jeep", "beep"));
// -Define a function called discountPercentage that returns the total discount ($),
// given the original amount and discount percentage (as arguments).
//  Return a warning if the discount amount is greater than 100 or less that 0 percent.
function discountPercentage(original, discount) {
	var percentage = discount / 100;
	var result = "Warning";
	if ((percentage <= 0) || (percentage >= 1)) {
		result;
	} else {
	result = original -(original * percentage);
	}
	return result;
}
console.log(discountPercentage(20.00, 10));
console.log(discountPercentage(20.00, 101));
console.log(discountPercentage(10.00, -0.1));

// -Define a function called stringCapitalize that takes a string as an argument and
//  returns the same string with the first letter of each word capitalized. 
//  Assume that each individual word is separated by only one space.
function stringCapitalize(str) {
	//splitting the str and storing in array
	var strarr =str.split(' ');
	// decalaring empty variable;
	var upper = '';
	// looping through each index in strarr and capping first letter 
	for(var i=0; i < strarr.length; i++) {
		upper += strarr[i].replace(strarr[i].charAt(0), strarr[i].charAt(0).toUpperCase());
		if ((i + 1) !== strarr.length) {
			upper += ' ';
		}
	}
	return upper;
}

console.log(stringCapitalize('what'));
console.log(stringCapitalize("cat in the hat"))
console.log(stringCapitalize("what the fudge"))

// -Define a function called evenNumbers that takes a random integer, from 0 to 100, and 
// outputs all the even integers from 0 to that random number.
function evenNumbers(num) {
	var answer = [];
	for (var i=0; i < num; i++) {
		if(i % 2 === 0) {
			answer += i + ' ';
		}	
	}
	return answer + num;	
}

console.log(evenNumbers(20));

// -Define a function called isDivisible that takes two arguments and returns a boolean. 
// Return true if the first argument is divisible by the second; otherwise, return false.
function isDivisible(a, b) {
	if ( a % b === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isDivisible(5, 10));

// -Bonus: Write a function called oddNumbers that takes a random integer, 
// from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. 
// If the number is less than 40, output all the odd integers from 0 to 40.

function oddNumbers(random) {
	 var over40 = [];
	if(random > 40) {
		for (var i=41; i < random; i += 2) {
			over40.push(i);
		}
	} else {
		for(var i=1; i < 40; i +=2) {
		 	over40.push(i)
		}

	}
	return over40;
}

console.log(oddNumbers(50));
console.log(oddNumbers(20));