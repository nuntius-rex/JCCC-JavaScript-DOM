
/*
Simple variable replacement without contatination:
*/
var name='Dan';
console.log(`My name is ${name}`);

/*
Multiline support without Multiline contatination:
*/

var name='Dan';
console.log(`My name is ${name},
  and
  I
  like
  multiple
  lines`);

/*
As expressions:  
*/

var name='Dan';
var born=1970;
var current_year=2019;
console.log(`My name is ${name}, I am ${current_year-born} years old.`);
