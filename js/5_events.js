console.log("The file loaded!");

//Window Listener:
window.addEventListener("load",function(){
  console.log("The dom is loaded!");

  //Safe to write to the header:
  var header = document.getElementById("header");
  //document.getElementById("header").innerHTML="Welcome! (This was written on window load)";
  header.innerHTML="Welcome! (This was written on window load)";

  //==================================
  //Click on the header type 1
  header.onclick=function(){
    console.log("you clicked the header");
  }
  //This one will overwrite the click listener above:
  header.onclick=function(){
    console.log("you clicked the header... REALLY!!!");
  }
  //==================================

  //This one you can add multiple listeners

    //addEventListener you can add as many as you want:
  header.addEventListener("click", function(){
    console.log("I added a listener to the header");
  });

  header.addEventListener("click", function(){
    console.log("I added another listener to the header");
  });

  //===========================================
  // #1 Mouseover
  //===========================================
  var box1=document.getElementById("box1");
  box1.addEventListener("mouseover", function(){
    this.style.backgroundColor="yellow";

  });
  box1.addEventListener("mouseout", function(){
    this.style.backgroundColor="white";

  });

  //===========================================
  // #2 Click Counter
  //===========================================

  var clickCounter=document.getElementById("clickCounter");
  var clickCounter_result=document.getElementById("clickCounter_result")
  var count=0;

  clickCounter.addEventListener("click", function(){
    count=count+1;
    clickCounter_result.innerHTML="The count is<br>"+count;
  });

  //===========================================
  // #3 Age Verify
  //===========================================
  var verify=document.getElementById("verify");
  verify.addEventListener("click", function(){
    var age=document.getElementById("age").value;
    if(age<18){
      response="You are not eligible to vote, sorry.";
    }else{
      response="You may vote!";
    }
    document.getElementById("verify_result").innerHTML=response;
  });

  //===========================================
  // #4 Populating Dropdowns
  //===========================================
  var monthsSelector=document.getElementById("monthsSelector");
  var months=["January","February","March","April","May","June",
  "July","August","September","October","November","December"];

  var monthOptions="";
  for(i=0; i<months.length;i++){
    monthOptions+=""
    +"<option value='"+months[i]+"'>"
    +months[i]
    +"</option>";
  }
  monthsSelector.innerHTML=monthOptions;

  var yearSelector=document.getElementById("yearSelector");
  var currentDate = new Date();
  currentYear=currentDate.getFullYear();
  lastYearToDisplay=currentYear+10;
  console.log(lastYearToDisplay);

  var yearOptions="";
  for(i=currentYear;i<lastYearToDisplay;i++){
    yearOptions+=""
    +"<option value='"+i+"'>"
    +i
    +"</option>";
  }
  yearSelector.innerHTML=yearOptions;


  //===========================================
  // #5 Populating Dropdowns
  //===========================================
  var dogImage=document.getElementById("dogImage");
  dogImage.addEventListener("mouseover", function(){
    dogImage.setAttribute("src","img/dog2.jpg");
  });

  dogImage.addEventListener("mouseout", function(){
    dogImage.setAttribute("src","img/dog1.jpg");
  });

  //===========================================
  // #6 Populating Inputs
  //===========================================

  function popAverage(){
      var calcAverageBTN=document.getElementById("calcAverageBTN");
      var grade1=document.getElementById("grade1");
      var grade2=document.getElementById("grade2");
      var grade3=document.getElementById("grade3");
      var average=document.getElementById("average");

      calcAverageBTN.addEventListener("click", function(){
        var grade1Val=parseInt(grade1.value);
        var grade2Val=parseInt(grade2.value);
        var grade3Val=parseInt(grade3.value);
        average.value=( (grade1Val+grade2Val+grade3Val)/3 )
      });
  }
  popAverage();

  var superHero={
    name : "Tony Stark",
    "first name" : "Tony",
    alias: "IRONMAN",
    greeting: "I am IRONMAN",
    fly: function(){
      return "Whew!";
    },
    shoot: function(){
      return "Bang!";
    }

  }

  var superHeroElem=document.getElementById("superHero");
  superHeroElem.innerHTML=superHero.greeting;
  //console.log( superHero.name );


});
