
/*
General
*/

let doThat =function(num){
    return new Promise((resolve, reject) => {
    if(num==1){
      resolve("excellent!");
    }else{
      //throw "Whoah dude!";
      reject("bummer!");
    }
  });
}

whatHappened=doThat(0);

whatHappened.then( value => {
  console.log(value); // Success!
}, reason => {
  console.log(reason); // Error!
} );

//Reject is synonmous with throwing an error:
whatHappened.catch((error) => {
  console.log(error)
})




/*AJAX Example: */
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
