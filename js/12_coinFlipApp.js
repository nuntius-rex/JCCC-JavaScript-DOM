window.addEventListener("load",function(){

  var userChoice=document.getElementById('userChoice');
  var resetBTN=document.getElementById('resetBTN');
  var flipResult=document.getElementById('flipResult');
  var innerBox=document.getElementById('innerBox');
  var winsColumn=document.getElementById('winsColumn');
  var lossColumn=document.getElementById('lossColumn');

  userChoice.addEventListener('change', function(){
      innerBox.classList.remove("hidden");
      var result="";
      var userChoiceSelected="";

      var Coin={
        sides: ["Heads", "Tails"],
        flip: function(){
          var num=Math.floor(Math.random()* this.sides.length);
          return this.sides[num];
        }
      }

      userChoiceSelected=userChoice.value;
      result = Coin.flip();

      //console.log("User choice:"+userChoiceSelected);
      //console.log("Coin Flip:"+result);

      function Score(result, guess){
        //console.log("result:"+ result);
        //console.log("guess:"+ guess);

        if(result=="Heads"){
            innerBox.classList.add("flip-Tails");
            setTimeout(function(){
              innerBox.classList.remove("flip-Tails");
              innerBox.classList.add("flip-Heads");
            }, 500);

        }else{
            //Tails:
            innerBox.classList.add("flip-Heads");
            setTimeout(function(){
                innerBox.classList.remove("flip-Heads");
                innerBox.classList.add("flip-Tails");
            }, 500);
        }
        var win="";
        if(result==guess){
          win=1;
          //console.log("You win! "+ result);
          flipResult.innerHTML="You win! "+ result;
          flipResult.classList.remove("flipLoss");
          flipResult.classList.add("flipWin");
        }else{
          win=0;
          //console.log("Sorry, it was "+result);
          flipResult.innerHTML="Sorry, it was "+result;
          flipResult.classList.remove("flipWin");
          flipResult.classList.add("flipLoss");

        }


        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = processResponse;
        xhr.open("GET","api/cfs/?win="+win, true);
        xhr.send();

        function processResponse(){
          if(xhr.readyState===4 && xhr.status===200){
            var jsonObj=JSON.parse(this.responseText);
            console.log(jsonObj);
            winsColumn.innerHTML=jsonObj.wins+" wins!";
            lossColumn.innerHTML=jsonObj.losses+" losses :-( ";

          }
        }


      }

      //Coin = new Coin();
      var result = Coin.flip();

      if(/Heads|Tails/.test(userChoiceSelected)){
        Score(result, userChoiceSelected);
      }else{
        console.log("Sorry, that entry is not valid!");
        flipResult.innerHTML="Sorry, that entry is not valid!";
      }


  });

  resetBTN.addEventListener("click", function(){
    userChoice.value="";
    flipResult.innerHTML="&nbsp;";
    innerBox.classList.add("hidden");
    innerBox.classList.remove("flip-Heads");
    innerBox.classList.remove("tails-Heads");
  })


});
