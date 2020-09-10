


function constTest() {
  const x = 31;
  if (true) {
    const x = 71;  // still a different variable, because of keyword const
    console.log(x);  // 71
  }
  console.log(x);  // 31
}

constTest();



function constTest() {
  const x = 31;
  if (true) {
    x = 71;  // same variable, will not allow reassignment
    console.log(x);  // 71
  }
  console.log(x);  // 31
}

constTest();
