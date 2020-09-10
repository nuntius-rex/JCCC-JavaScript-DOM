//9_AJAX_XML.js
window.addEventListener("load",function(){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = processResponse;
  xhr.open("GET","xml/contacts.xml", true);
  xhr.send();

  var xmlDocResult=document.getElementById("xmlDocResult");


  function processResponse(){

    if(xhr.readyState===4 && xhr.status===200){
      var table="<table><tr><th>Contact</th></tr>";

      console.log("respose xml: "+ xhr.responseXML);
      var xmlDoc=xhr.responseXML;
      var contact = xmlDoc.getElementsByTagName("contact");
      console.log(contact.length);
      for(i=0;i<contact.length;i++){
        table+="<tr><td>"
        +contact[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue+" "
        +contact[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue+" "
        +contact[i].getElementsByTagName("email")[0].childNodes[0].nodeValue+" "
        +"</td></tr>";

      }
      table+="</table>";

      xmlDocResult.innerHTML=table;
    }
  }



});
