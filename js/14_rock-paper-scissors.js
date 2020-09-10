
window.addEventListener("load",function(){
    var rock=document.getElementById('rock');
    var paper=document.getElementById('paper');
    var scissors=document.getElementById('scissors');

    var Player1_scoreboard=document.getElementById('Player1_scoreboard');
    var Player2_scoreboard=document.getElementById('Player2_scoreboard');

    winsColumn=document.getElementById('winsColumn');
    lossColumn=document.getElementById('lossColumn');

    var userChoice="";

    rock.addEventListener("click", function(){
      userChoice="Rock";
      runGame(userChoice);
    });

    paper.addEventListener("click", function(){
      userChoice="Paper";
      runGame(userChoice);
    });

    scissors.addEventListener("click", function(){
      userChoice="Scissors";
      runGame(userChoice);
    });

    function runGame(userChoice){


      function Character(id,name){
        this.id=id;
        this.move=["Rock", "Paper", "Scissors"];
        this.num="";
        this.name=name;
        this.gesture = function(action){
            //console.log(action);
            if(action!=undefined){
                var num = this.move.indexOf(action);
                this.num = num;
                var move=this.move[num];
                return "Player "+this.id+": <br> "
                +"<i class='far fa-hand-"+move.toLowerCase()+"'></i><br>"
                +move;

            }else{
                var num = Math.floor(Math.random() * this.move.length);
                this.num = num;
                var move=this.move[num];
                return "Player "+this.id+": <br> "
                +"<i class='far fa-hand-"+move.toLowerCase()+"'></i><br>"
                +move;
            }
        }
      }//End Character


        function score(p1, p2){
            var resultOutput="";
            //var resultOutput="Player 1:"+p1+" Player 2:"+p2+" ";
          	var result = (3+(p1-p2))%3;
            console.log(result);
          	switch(result){
              case 0:
                resultOutput+="Tie!";
              break;
              case 1:
                resultOutput+="Player 1 Wins!";
                saveStats(1);
              break;
              case 2:
               resultOutput+="Player 2 Wins!";
               saveStats(0);
              break;

            }
            rps_result.innerHTML=resultOutput;
        }

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

        Player1 = new Character(1, "Human");
        Player1_scoreboard.innerHTML=Player1.gesture(userChoice);
        //console.log(Player1.gesture(userChoice));

        Player2 = new Character(2, "Computer");
        Player2_scoreboard.innerHTML=Player2.gesture();
        //console.log(Player2.gesture());

        score(Player1.num, Player2.num);




     }




});

/*


function score(p1, p2){
	console.log("Player 1:"+p1+" Player 2:"+p2);
  	var result = (3+(p1-p2))%3;
    console.log(result);
  	switch(result){
      case 0:
        console.log("Tie!");
      break;
      case 1:
        console.log("Player 1 Wins!");
      break;
      case 2:
       console.log("Player 2 Wins!");
      break;

    }
}

Player1 = new Character(1, "Computer");
console.log(Player1.gesture());
Player2 = new Character(2, "Human");
console.log(Player2.gesture(userChoice));
score(Player1.num, Player2.num);
*/
