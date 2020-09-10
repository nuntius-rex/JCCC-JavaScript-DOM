
//Window Listener:
window.addEventListener("load",function(){

      var first_name=document.getElementById("first_name");
      var first_name_validation=document.getElementById("first_name_validation");

      first_name.addEventListener("keyup", function(){
        if(first_name.value.length>=40){
          first_name_validation.innerHTML="You are so lame!!!";
        }
      });

      var last_name=document.getElementById("last_name");
      var last_name_validation=document.getElementById("last_name_validation");

      last_name.addEventListener("keyup", function(){
        if(last_name.value.length>=40){
          last_name_validation.innerHTML="You are so lame!!!";
        }
      });


      var email=document.getElementById("email");
      var email_validation=document.getElementById("email_validation");

      email.addEventListener("keyup", function(){
        if(email.value.length>=256){
          email_validation.innerHTML="You are so lame!!!";
        }
      });

     var submit=document.getElementById("submit");
     var ajax_response=document.getElementById("ajax_response");

     submit.addEventListener("click", function(e){
         e.preventDefault();

         var get_req =""
         +"first_name="+first_name.value
         +"&last_name="+last_name.value
         +"&email="+email.value
         +"";

         var xhr = new XMLHttpRequest();
         xhr.onreadystatechange = processResponse;
         xhr.open("GET","form_handler/?"+get_req, true);
         xhr.send();

         function processResponse(){
           console.log("The stage changed.");
           console.log(xhr.status);

           if(xhr.readyState===4 && xhr.status===200){
             console.log("respose text"+ xhr.responseText);
             ajax_response.innerHTML=xhr.responseText;
           }
         }
     });


});//End onload listerner
