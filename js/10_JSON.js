
window.addEventListener("load",function(){

  var xhr = new XMLHttpRequest();
  var container="";

  xhr.onreadystatechange = function(){
    if(xhr.readyState===4 && xhr.status===200){
      var containerHTML=document.getElementById(container);
      var jsonObj=JSON.parse(this.responseText);
      var output=""
      +jsonObj.contact.first_name+" "
      +jsonObj.contact.last_name+" "
      +jsonObj.contact.email+" "
      +" ";
      containerHTML.innerHTML=output;
    }
  };

  var jsonFileBTN=document.getElementById("jsonFileBTN");
  var jsonPHPBTN=document.getElementById("jsonPHPBTN");
  var jsonNodeBTN=document.getElementById("jsonNodeBTN");

  jsonFileBTN.addEventListener("click",function(){
    console.log("clicked file");
    container="json_file_result";
    xhr.open("GET","json/contacts.json", true);
    xhr.send();
  });

  jsonPHPBTN.addEventListener("click",function(){
    console.log("clicked php");
    container="json_php_result";
    xhr.open("GET","json/contacts.php", true);
    xhr.send();
  });

  jsonNodeBTN.addEventListener("click",function(){
    console.log("clicked node");
    container="json_node_result";
    xhr.open("GET","http://localhost:8080", true);
    xhr.send();
  });

});
