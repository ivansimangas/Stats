/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */

// the .length property gives the number of elements in the numbers array.
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */

function getSum(numbers) {
  //For...of Loop
  let sum = 0; // Starts the variable 'sum' to store the total sum. Starts at 0

  for (const n of numbers) {
    // n is the current element(number) in the array as we loop through
    // n is the current number in the array
    sum += n; // is the same as writing sum = sum + n
  }
  return sum; // once the loop finishes, return the sum
}

function getSum(numbers) {
  //While Loop
  let sum = 0; // Sum starts at 0. This will hold the sum of all the numbers in the array
  let i = 0; // Starts from the first index of the array (Index 0)

  while (i < numbers.length) {
    //The While Loop will run as long as i is less than the length of the array.
    sum += numbers[i]; // Add the current number (at index i) to the sum

    i++; // Increase i by 1 to move to the next element in the array
  }
  return sum; // Once the loop finishes, return the final sum of the numbers in the array
}

function getSum(numbers) {
  //For Loop
  let sum = 0; //Sum starts at 0. this will hold the sum of all the numbers in the array

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; //add the current number (number[i]) to the sum
  }
  return sum; //Once loop finished, return sum
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */

function getMean(numbers) {
  return getSum(numbers) / getLength(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */

function getMin(numbers) {
  let min = Infinity; // starts 'min' as Infinity, which is the largest possible number
  for (const n of numbers) {
    //For...of Loop. Goes over each element (n) in the 'numbers' array
    if (n < min) {
      //if the current number is smalled than the current 'min'
      min = n; //update 'min' to the currrent number
    }
  }
  return min; //after the loop, 'min' will contain the smallest number in the array
}

function getMin(numbers) {
  let min = Infinity; // starts 'min' as Infinity, which is the largest possible number
  let i = 0; //Starts from the first index of the array (Index 0)

  while (i < numbers.length) {
    // this while loop runs as long as i is less than the length of 'numbers' array
    if (numbers[i] < min) {
      //if the current number is the smaller than the min
      min = numbers[i]; //update 'min' to the current number
    }
    i++; // increase the index to move to the next number in the array
  }
  return min; // after the loop, 'min' will contain the smallest number in the array
}

function getMin(numbers) {
  let min = Infinity; // starts 'min' as Infinity, which is the largest possible number
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i]; //update 'min' to the current number
    }
  }
  return min; //returns smallest number found
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */

function getMax(numbers) {
  let max = -Infinity; // starts max at negative Infinity, which is the smallest possible number
  for (const n of numbers) {
    //For...of Loop. Goes over each element (n) in the 'number' array
    if (n > max) {
      //if the current number is bigger than the current 'max'
      max = n; //update max to the current number
    }
  }
  return max; //after the loop, 'max' will contain the largest number in the array
}

function getMax(numbers) {
  let max = -Infinity; //starts 'max' as negative infinity, which is the smallest possible number
  let i = 0; // starts from the first index in the array of numbers

  while (i < numbers.length) {
    // while loop runs as long as i is less than the length of 'numbers' array
    if (numbers[i] > max) {
      // if the current number in the array is greater than the max
      max = numbers[i]; //update the 'max' to the current number
    }
    i++; //increases the index to move to the next number in the array
  }
  return max; // after the loop, 'max' will contain the biggest number in the array
}

function getMax(numbers) {
  let max = -Infinity; //starts the max at negative Infinity, which is the smallest possible number
  for (i = 0; i < numbers.length; i++) {
    // i starts in index 0, loop continues as long as i is
    // less than the number of elements in the array, i++ increments i by 1 after each iteration, moving to the next index
    if (numbers[i] > max) {
      //if current number in the array is greater than the max
      max = numbers[i]; //update max to the current number
    }
  }
  return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */

function getEvens(numbers) {
  //Using For..of Loop
  const evens = []; //creates an empty array to store even numbers
  for (const n of numbers) {
    //iterates over each number in the array
    if (n % 2 === 0) {
      //checks if the number is even
      evens.push(n); //adds even numbers to the 'evens' array
    }
  }
  return evens; //return array of even numbers
}

function getEvens(numbers) {
  //Using While loop
  let evens = []; //creates an empty array to store even numbers
  let i = 0; //start at the first index of the array

  while (i < numbers.length) {
    // continues looping while i is less than the array length
    if (number[i] % 2 === 0) {
      //checks if the current number is even
      evens.push(numbers[i]); // adds even number to the 'evens' array
    }
    i++; //moves to the next index
  }
  return evens; // returns the array of even numbers
}

function getEvens(numbers) {
  //Using For loop
  let evens = []; //creates an empty array of even numbers
  for (i = 0; i < numbers.length; i++) {
    //Loops through the array using index i
    if (numbers[i] % 2 === 0) {
      // checks if the current number is even
      evens.push(numbers[i]); //adds even number to the 'evens' array
    }
  }
  return evens; // return the array of even numbers
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */

function getOdds(numbers) {
  //Using For..of Loops
  const odds = []; // creates an empty array to store odd numbers
  for (const n of numbers) {
    //iterates over each number in the array
    if (n % 2 === 1) {
      //checks if number is odd
      odds.push(n); // adds odd numbers to the 'odds' array
    }
  }
  return odds; // returns the array of odd numbers
}

function getOdds(numbers) {
  let odds = []; //creates an empty array to store odd numbers
  let i = 0; //start at the first index of the array

  while (i < number.length) {
    //continues looping while i is less than the array length
    if (numbers[i] % 2 === 1) {
      // checks if current number is odd
      odds.push(numbers[i]); //adds odd numbers to the 'odds' array
    }
    i++; // moves to the next index
  }
  return odds; // returns the array of odd numbers
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
