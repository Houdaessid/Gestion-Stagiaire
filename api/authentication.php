<?php
require 'database.php';

// Get the posted data.

$postdata = file_get_contents("php://input");
$data = json_decode($postdata);


if (isset($data) && !empty($data)) {
  // Extract the data.
  // $request = json_decode($postdata);


  // Sanitize.
  $email = mysqli_real_escape_string($con, $data->email);
  $password = mysqli_real_escape_string($con, $data->password);

  // Store.
  $sql = "SELECT * FROM `users` WHERE `email`='{$email}' AND `password`='{$password}'";

  $user = [];
  if ($result = mysqli_query($con, $sql)) {
    $cr = 0;
    while ($row = mysqli_fetch_assoc($result)) {
      $user[$cr]['nom']    = $row['nom'];
      $user[$cr]['prenom'] = $row['prenom'];
      $user[$cr]['email'] = $row['email'];
      $user[$cr]['role'] = $row['role'];
      $cr++;
    }

    echo json_encode(['data' => $user]);
  } else {
    http_response_code(404);
  }
}
?>