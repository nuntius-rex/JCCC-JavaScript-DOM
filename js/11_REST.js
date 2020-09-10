window.addEventListener("load",function(){

  var xhr = new XMLHttpRequest();
  var container="";

  var postBTN=document.getElementById("postBTN");
  var getBTN=document.getElementById("getBTN");
  var patchBTN=document.getElementById("patchBTN");
  var deleteBTN=document.getElementById("deleteBTN");

  var postReturn=document.getElementById("postReturn");
  var getReturn=document.getElementById("getReturn");
  var patchReturn=document.getElementById("patchReturn");
  var deleteReturn=document.getElementById("deleteReturn");

  var contacts = {
    "contact":{
      "first_name":"Dan",
      "last_name":"Guinn",
      "email": "d@g.com"
    }
  };


   postBTN.addEventListener("click", function(){
      container="postReturn";
      xhr.open("POST","REST/", true);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF8");
      console.log(JSON.stringify(contacts));
      xhr.send(JSON.stringify(contacts));
    });

    getBTN.addEventListener("click", function(){
       container="getReturn";
       xhr.open("GET","REST/?id=1", true);
       xhr.setRequestHeader("Content-Type", "application/json;charset=UTF8");
       xhr.send();
     });

     patchBTN.addEventListener("click", function(){
        container="patchReturn";
        xhr.open("PATCH","REST/?id=1", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF8");
        xhr.send(JSON.stringify(contacts));
      });

      deleteBTN.addEventListener("click", function(){
         container="deleteReturn";
         xhr.open("DELETE","REST/?id=1", true);
         xhr.setRequestHeader("Content-Type", "application/json;charset=UTF8");
         xhr.send(JSON.stringify(contacts));
       });

  xhr.onreadystatechange = function(){
    if(xhr.readyState===4 && xhr.status===200){
      console.log(container);
      var containerHTML=document.getElementById(container);
      var jsonObj=JSON.parse(this.responseText);
      var output="<p>"
      +"<br>"+jsonObj.contact.message+"<br>"
      +jsonObj.contact.first_name+" "
      +jsonObj.contact.last_name+" "
      +jsonObj.contact.email+" "
      +"</p>";
      containerHTML.innerHTML=output;
    }
  };




});
