// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Scoping_rules

/*
let - forces block level variable scoping:
caution: don't use just because it's popular.
use when you need it.
*/

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // different variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}

letTest();
