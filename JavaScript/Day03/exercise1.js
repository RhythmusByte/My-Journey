// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Akhil', lastName = 'Mahesh', country = 'India', city = 'Trivandrum', age = 19, isMarried = false, year = 2024;
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);

// Check if parseInt('9.8') is equal to 10
const num = 10;
let data = parseInt('9.8');
console.log(data, num == data);

/* Boolean value is either true or false.
Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/
let a = 3, b = 4;
console.log(a<=b);
console.log(a!=b);
console.log(a<b);
console.log(a>b);
console.log(a==b);
console.log(a===b);

/* Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4' */
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

/*
Find the length of python and jargon and make a falsy comparison statement.*/
let word1 = 'python', word2 = 'jargon';
let lenOfPython = word1.length, lenOfJargon = word2.length;
console.log(lenOfPython > lenOfJargon);

/*Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python
*/ 
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // false
word1 = 'dragon', word2 = 'python';
let check1 = word1.includes('on'), check2 = word2.includes('on');
console.log(!(check1 == check2)); // false

/*
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */
 
 let date = new Date();
 console.log(date.getFullYear());
 console.log(date.getMonth());
 console.log(date.getDate());
 console.log(date.getDay());
 console.log(date.getHours());
 console.log(date.getMinutes());
 console.log(date.getTime());

/* Outputs

number
boolean
9 false
true
true
true
false
false
false
true
true
false
false
true
true
false
false
false
true
false
false
true
false
true
true
false
true
true
false
true
true
false
2024
3
1
1
21
44
1711988087213

*/
