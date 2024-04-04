/* 
Using if else set an alarm by printing
Mon - 7 
Tue - Thurs - 4
Fri - 9
Sat - Sun - 8
*/

let day =`Wed`;
if (day==`Mon`) {
  console.log(`Set alarm for 7 AM`);
}
else if(day==`Fri`) {
  console.log(`Set alarm for 9 AM`);
}
else if(day==`Sat`) {
  console.log(`Set alarm for 8 AM`);
}
else if(day==`Sun`) {
  console.log(`Set alarm for 8 AM`);
}
else {
  console.log(`Set alarm for 4 AM`);
}
