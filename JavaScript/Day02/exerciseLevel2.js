  /*
  Using console.log() print out the following statement:
  The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
  */
  console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
  
  /*
  Using console.log() print out the following quote by Mother Teresa:
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
  */
  console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
  
 // Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num1 = '10', num2 = 10;
let isEqual = typeof(num1) == typeof(num2);
console.log(isEqual);
let exactlyEqual = parseInt(num1) == parseInt(num2);
console.log(exactlyEqual);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10
let float = parseFloat('9.8');
console.log(float == num2);
float = Math.ceil(float);
console.log(float == num2);

// Check if 'on' is found in both python and jargon
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes('on') + ' ' + word2.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let word3 = 'I hope this course is not full of jargon.';
console.log(word3.includes('jargon'));

// Generate a random number between 0 and 100 inclusively.
let num3 = Math.floor(Math.random() * 101);
console.log(num3);

// Generate a random number between 50 and 100 inclusively.
let num4 = 50;
let num5 = Math.floor(Math.random() * (101 - num4) + num4);
console.log(num5);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number.
let string = 'JavaScript';
let len = string.length;
let RandNum = Math.floor(Math.random() * len);
console.log(string[RandNum]);

/*
Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
 */
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let startIndex = sentence.indexOf('because');
let word = 'because because because';
let lengthOfWord = word.length;
let str = sentence.substr(startIndex, lengthOfWord);
console.log(str);
