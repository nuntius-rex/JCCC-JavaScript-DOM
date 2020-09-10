
/*
===============================================================
A straight forward class
===============================================================
*/
class Person {
  constructor(first_name, last_name, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
}
console.log(Person); //Identified as a class
console.log(Person.name);//Note this keyword "name" is inherent to the class

/*
Class declarations are not "hoisted" (pushed into preceeding scope):
Just remember, the object must preceed the usage.
*/
const p= new Person("Dan","Guinn", 49);
console.log(p.first_name);
console.log(p.last_name);
console.log(p.age);

/*
Hoisted does not mean that it has to be instantiated,
This will also work:
*/
Person.first_name="Dan";
console.log(Person.first_name);//




/*
===============================================================
Class Expressions: Classes can also be created as expressions
and thus variablized
===============================================================
*/

let Person = class{
  constructor(first_name, last_name, age){
    this.first_name=first_name;
    this.last_name=last_name;
    this.age=age;
  }
}
console.log(Person); //Also Identified as class
console.log(Person.name);//Note this keyword "name" is inherent to the class, but if the class is anonmous or nameless, returns undefined


/*
===============================================================
Class Expressions 2: The can be named!
===============================================================
*/

let Person = class Dude{
  constructor(first_name, last_name, age){
    this.first_name=first_name;
    this.last_name=last_name;
    this.age=age;
  }
}
console.log(Person); //Also Identified as class
console.log(Person.name);//
Person.first_name="Dan";
console.log(Person.first_name);//
