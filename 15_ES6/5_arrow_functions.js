/*
The FUN thing about Functions in JavaScript
What the Heck is a JavaScript Function Anyway? Even old programmers are mystified at times by the liberty JavaScript takes with functions. However, this approach is often what makes JavaScript so appealing to some. Here is a step-by-step explanation of what I mean.
=======================================================================
1.) You may know that JavaScript functions can be written in variable structure "var test = function(x){...}" or a standard named "declaration notation" function call. We'll be utilizing the declaration notarion for this example to illustrate how function logic and usage has developed.
EXAMPLE 1.) A Standard Function: This is a standard function call.
=======================================================================
*/

function f1(msg) {
     console.log(msg);
}
f1("Hello #1!");
/*
=======================================================================
EXAMPLE 2.) "Call Wrapping" the Function Call: Here is the same type of function. However, since function calls are objects, they can be grouped
like equations. Putting a parenthesis around the call still works!
See the next example for why that is important.
=======================================================================
*/
function f2(msg) {
       console.log(msg);
}
(f2)("Hello #2!");
//Note: This also works:
//(f2("Hello #2!"));

/*
=======================================================================
EXAMPLE 3.) Wrapping the entire function as a call. Since a call is a
function object, the function call can be used without the named call at all. This is all fascilitated by the parenthesis now wrapping the entire function.
This is a common module structure.
=======================================================================
*/
(function foo(msg) {
     console.log(msg);
})("Hello #3!");

/*
=======================================================================
EXAMPLE 4.) An Anonymouse Function Call: Because of this, and the concept
of anonmous functions, you don't need the function name either!
=======================================================================
*/
(function (msg) {
    console.log(msg);
})("Hello #4!");

/*
=======================================================================
EXAMPLE 5.) An Anonymouse Call Without the 'Function' Keyword:
Nore do you need the function keyword itself! Using the arrow function
syntax of ES6, you can reduce the compexity to an equation.
=======================================================================
*/
((msg)=>{
    console.log(msg);
})(message);
/*
=======================================================================
With ES6 that can use only a parameter and a structure, we are practically left with just an equation!:
((param)=>{ //Do something })(param));
=======================================================================
*/
