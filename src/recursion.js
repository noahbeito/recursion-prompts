/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

// I: integer
// O: factorial of the given integer (another integer)
// C:
// E:

// if n is equal to 1
  // return factorial

// else call recursive function on n minus 1

var factorial = function(n) {
  var result = n;

  if (n < 0) {
    return null;
  }

  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return result;
  }

  var innerFunction = function(int) {
    result *= factorial(n-1);
  }

  innerFunction(n);

  return result;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

// I: array of nums
// O: sum
// C: cannot add parameter
// E: if array is empty, return 0;

// edge case

// declare sum variable set to zero

// base case:
// if length of array is zero
  // return sum

// recursive case:
// for each element add to sum and remove element from array

var sum = function(array) {
  var arrayCopy = array.slice();
  if (arrayCopy.length === 0) {
    return 0;
  }

  return arrayCopy.pop() + sum(arrayCopy);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

// I: array containing nested arrays
// O: sum of all integers
// C:
// E:

// base case:
// if input is not an array
  // return current element (or add to sum)

// if element is an array
  // iterate the array

var arraySum = function(input) {
  var sum = 0;
  if (!Array.isArray(input)) {
    return input;
  } else {
    input.forEach(function(item) {
      sum += arraySum(item);
    });
  }
  return sum;
};

// 4. Check if a number is even.
// I: number
// O: boolean
// C: do not use modulo
// E:

// subtract 2 from n until it equals 0 or 1

var isEven = function(n) {
  n = Math.abs(n);
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

// I: integer
// O: sum
// C:
// E:

// base case:
// if int is 0, return sum

// recursive case:
  // decrement int by 1
  // add int to sum
  // call function again

var sumBelow = function(n) {
  var sum = 0;
  if (n === 0) {
    return n;
  } else if (n > 0) {
    n--;
    sum += n;
    return sum + sumBelow(n);
  } else {
    n++;
    sum += n;
    return sum + sumBelow(n);
  }
  return sum;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

// I: two integers (a range, non inclusive)
// O:  array of integers
// C:
// E: return empty array if no integers in range

// declare result array

// base case:
// if x plus one is equal to y
  // return [];

// recursive case:
// decrement y
// concat decremented value of y with result array
// return result array concated with a call recursive function on new value of y

// return result array
var range = function(x, y) {


  var integers = [];

  if (x + 1 === y || x === y || x - 1 === y) {
    return integers;
  } else if (x > y) {
    x--;
    integers.push(x);
    return integers.concat(range(x, y));
  } else {
    x++;
    integers.push(x);
    debugger;
    return integers.concat(range(x, y));
  }
  return integers;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

// I: two integers the base and exponent
// O: computed integer
// C:
// E: if exponent is 0 return 1.

// declare result set to 1

// base case:
// if exponent is 0, return 1

// recursive case:
// (positive integers only)
// multiply result by the base
// decrement exponent
// return result multiplied by the function called again with same base and the decremented exp

// return result
var exponent = function(base, exp) {
  var result = 1;

  if (exp === 0) {
    return 1;
  } else if (exp < 0) {
    parseFloat(result /= base);
    exp++;
    return result * parseFloat(exponent(base, exp));
  } else {
    result *= base;
    exp--;
    return result * exponent(base, exp);
  }
  return result;
};

console.log(exponent(4, -2));
console.log(exponent(5, -4));
console.log(exponent(2, -5));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

// I: number
// O: boolean
// C:
// E: if n is 1 return true


// base case:
// if n === 2
  // return true

// recursive case:
// return power of two function called on n divided by 2

var powerOfTwo = function(n) {
  if (n === 1 || n === 2) {
    return true;
  } else if (n < 1) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.

// I: string
// O: string (reversed)
// C:
// E: empty string return empty string

// declare result string

// base case:
// if string length is 1
  // return the string

// recursive case:
// for each character in string
  // return the recursive call + result string

//return string

var reverse = function(string) {
  var reversed = '';

  if (string.length === 1) {
    return reversed += string;
  } else {
    reversed += string[string.length - 1];
    return reversed + reverse(string.slice(0, string.length - 1));
  }

  return reversed;
};

console.log(reverse('hello'));

// 10. Write a function that determines if a string is a palindrome.

// I: string
// O: boolean
// C: ignore capital letters
// E:

// set string to lower case
// set boolean flag true
// base case:
// if beginning char does not match end character
  // set boolean flag false
// else
  // call recursive case on string sliced from index one to last index

// return boolean flag

var palindrome = function(string) {
  string = string.toLowerCase();
  var isPalindrome = true;

  if (string.length < 1) {
    return isPalindrome;
  }

  if (string[0] !== string[string.length - 1]) {
    return isPalindrome = false;
  } else {
    return palindrome(string.slice(1, string.length - 1));
  }
  return isPalindrome;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// base case:
// if x is less than y
  // return x

// recursive case:
// return recursive function passing (x - y) as x and y

var modulo = function(x, y) {
  if (x < y) {
    return x;
  } else if (y < 0 && y < x) {
    return modulo((x + y), y);
  } else {
    return modulo((x - y), y);
  }
};

console.log(modulo(3, -2))

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

// I: object with nested objects
// O: integer
// C:
// E:

// declare counter

// base case:
// if input is not an object
  // increment count by 1
  // return count

// recursive case:
// iterate obj

// return count

var countValuesInObj = function(obj, value) {
  var count = 0;
  Object.keys(obj).forEach(function(key) {
    if (obj[key] === value) {
      return count++;
    }
    if (typeof obj[key] === 'object') {
      return count += countValuesInObj(obj[key], value);
    }
  })
  return count;
};

// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// console.log(countValuesInObj(obj, 'r'));

// debugger;
  // var count = 0;
  // for (var key in obj) {
  //   if (obj[key] === value) {
  //     return count++;
  //   } else if (typeof obj[key] === 'object') {
  //     return count + countValuesInObj(obj[key], value);
  //   }
  // }
  // return count;

  // var count = 0;
  // for (var key in obj) {
  //   if (obj[key] === value || obj === value) {
  //     return count++;
  //   } else if (typeof obj[key] === 'string' && obj[key] !== value) {
  //     return count;
  //   }

  //   if (typeof obj[key] === 'object' ) {
  //     return count + countValuesInObj(obj[key], value);
  //   }
  // }
  // return count;

  // debugger;
  // var count = 0;
  // if (obj === value) {
  //   return count++;
  // } else if (typeof obj !== 'object') {
  //   return;
  // } else {
  //   for (var key in obj) {
  //     return count + countValuesInObj(obj[key], value);
  //   }
  // }
  // return count;

// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

// I: obj with nested objects
// O: obj with replaced keys (not values)
// C:
// E:

// base case:
// if key is equal to 'oldKey',
  // replace old key with new key
  // return obj

// recursive case:
  // if current value is an object
    // call recursive func

var replaceKeysInObj = function(obj, oldKey, newKey) {
  Object.keys(obj).forEach(function(key) {
    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
    }

    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  })
  return obj;
};

var obj = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
console.log(replaceKeysInObj(obj, 'r', 'new'));

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
