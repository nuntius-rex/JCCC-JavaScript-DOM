<?php
header('Content-Type: application/json; charset=UTF8');
$method=$_SERVER['REQUEST_METHOD'];

$request=json_decode(file_get_contents('php://input'), true);
//echo "<pre>".print_r($request, true)."</pre>";

switch ($method) {
  case 'POST':
      //Here we would insert the data sent (we're pretending):
      $response=$request;
      $response["contact"]["message"]="Got your POST, inserted the following record:";
      echo json_encode($response);
  break;
  case 'GET':
      //Here we would lookup the id sent (we'll fake it):
      $contact=array();
      $contact["id"]="1";
      $contact["first_name"]="Joey";
      $contact["last_name"]="Jamison";
      $contact["email"]="joe@smoe.com";
      $contact["message"]="Got your GET, Here is the record:";

      $response["contact"]=$contact;
      echo json_encode($response);
  break;
  case 'PATCH':
      $response=$request;
      $response["contact"]["message"]="Got your PATCH, updated the record to the following:";
      echo json_encode($response);
  break;
  case 'DELETE':
      $response=$request;
      $response["contact"]["message"]="Got your DELETE, deleting the following message:";
      echo json_encode($response);
  break;
}


?>
