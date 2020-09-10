
window.addEventListener("load",function(){

  var userGuess=document.getElementById('userGuess');
  var userGuessForm=document.getElementById('userGuessForm');
  var resultDiv=document.getElementById('resultDiv');
  var showComputer=document.getElementById('showComputer');

  var compValue="";

  userGuessForm.addEventListener("submit", function(e){
        e.preventDefault();

        //console.log(e);
/*
        var elements = userGuessForm.elements;
        var obj ={};
        for(var i = 0 ; i < elements.length ; i++){
            var item = elements.item(i);
            obj[item.name] = item.value;
        }
        console.log(JSON.stringify(obj));
*/

        var result="";

        var userGuessValue=Number(userGuess.value);
        //console.log(userGuessValue);

        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }

        if(showComputer.checked){
            compValue = getRandomInt(100);
            result+="User entered: "+userGuessValue+" , Computer value:"+compValue+"<br>";
            //console.log(compValue);
        }else{
            if(compValue==""){
              compValue=getRandomInt(100);
            }
            //console.log(compValue);
            result+="User entered: "+userGuessValue+"<br>";
        }

        if(isNaN(userGuessValue)){
            result+="Is not a number!";
        }else if(userGuessValue>compValue){
            result+="Too high";
            resultDiv.classList.remove("Win");
            resultDiv.classList.add("Loss");
            saveStats(0);
        }else if(userGuessValue<compValue){
            result+="Too low";
            resultDiv.classList.remove("Win");
            resultDiv.classList.add("Loss");
            saveStats(0);
        }else if(userGuessValue==compValue){
            result+="You got it!!!";
            resultDiv.classList.remove("Loss");
            resultDiv.classList.add("Win");
            saveStats(1);
            compValue="";
        }

        resultDiv.innerHTML=result;

  });


  var saveStats = function(win){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open("GET","api/hls/?win="+win, true);
    xhr.send();

    function processResponse(){
      if(xhr.readyState===4 && xhr.status===200){
        var jsonObj=JSON.parse(this.responseText);
        //console.log(jsonObj);
        winsColumn.innerHTML=jsonObj.wins+" wins!";
        lossColumn.innerHTML=jsonObj.losses+" losses :-( ";

      }
    }
  }

});
