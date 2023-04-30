<?php

require 'database.php';

$postdata = file_get_contents("php://input");
$data = json_decode($postdata);

// Change status of stagiaire into the database if exist
$id = mysqli_real_escape_string($con, $data->id);
$status = mysqli_real_escape_string($con, $data->status);

$sql = "UPDATE `stagiaires` SET `status` = '{$status}' WHERE `stagiaires`.`id` = '{$id}'";

mysqli_query($con, $sql);

$sqlSelect = "SELECT * FROM `stagiaires`";

if ($result = mysqli_query($con, $sqlSelect))
{
  $resultArray = array();
  $tempArray = array();

  while($row = $result->fetch_object())
  {
    $tempArray = $row;
    array_push($resultArray, $tempArray);
  }

  echo json_encode($resultArray);
}

mysqli_close($con);
?>