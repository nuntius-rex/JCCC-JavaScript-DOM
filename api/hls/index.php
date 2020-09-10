<?php

//======================================================
// Connect to database
//======================================================
$dcArray=array();
$dcArray[0]="localhost";
$dcArray[1]="root";
$dcArray[2]="";
$dcArray[3]="test";
$MySQLi = new mysqli($dcArray[0], $dcArray[1], $dcArray[2], $dcArray[3]);

if(isset($_REQUEST["debug"]) && $_REQUEST["debug"]==1){
  echo "<p>The following database connection was made:</p>";
  arrayToString($MySQLi);
}

if(isset($_REQUEST["win"]) && $_REQUEST["win"]!=""){

  $win=$_REQUEST["win"];

  if($win==1){
    $sql="UPDATE hls_log SET wins=wins+1 WHERE id=1";
  }
  if($win==0){
    $sql="UPDATE hls_log SET losses=losses+1 WHERE id=1";
  }

  $resultArray=array();
  if($result=$MySQLi->query($sql)){
    $resultArray["status"]="log updated";
  }


  $sql="SELECT wins, losses FROM hls_log WHERE id=1";
  if($result=$MySQLi->query($sql)){
    for($i=0; $i<$result->num_rows; $i++){
      if($Obj=$result->fetch_object()){
        $resultArray["wins"]=$Obj->wins;
        $resultArray["losses"]=$Obj->losses;
        echo json_encode($resultArray);
      }
    }
  }

}



?>
