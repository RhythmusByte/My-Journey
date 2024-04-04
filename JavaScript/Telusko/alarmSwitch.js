/* 
Using switch set an alarm by printing
Mon - 7 
Tue - Thurs - 4
Fri - 9
Sat - Sun - 8
*/

let day = `Wed`;
switch(day) {
  case `Mon`:
    console.log(`Set alarm for 7 AM`);
    break;
  case `Tue`:
  case `Wed`:
  case `Thurs`:
    console.log(`Set alarm for 4 AM`);
    break;
  case `Fri`:
    console.log(`Set alarm for 9 AM`);
    break;
  case `Sat`:
  case `Sun`:
    console.log(`Set alarm for 8  AM`);
    break;
}
