<?php

/**
 * Returns the list of cars.
 */
require 'database.php';

// Insert the new stagiaire into the database if not exist

$postdata = file_get_contents("php://input");
$data = json_decode($postdata);


if (isset($data) && !empty($data)) {
     // Extract the data.
     // $request = json_decode($postdata);


     // Sanitize.
     $nom = mysqli_real_escape_string($con, $data->nom);
     $prenom = mysqli_real_escape_string($con, $data->prenom);
     $email = mysqli_real_escape_string($con, $data->email);
     $telephone = mysqli_real_escape_string($con, $data->telephone);
     $adresse = mysqli_real_escape_string($con, $data->adresse);
     $specialite = mysqli_real_escape_string($con, $data->specialite);
     $message = mysqli_real_escape_string($con, $data->message);
     $status = mysqli_real_escape_string($con, $data->status);

     $sql = "INSERT INTO `stagiaires` (`nom`, `prenom`, `email`, `telephone`, `adresse`, `specialite`, `message`, `status`) VALUES ('{$nom}','{$prenom}','{$email}','{$telephone}','{$adresse}','{$specialite}','{$message}','{$status}')";
     

     $stagiares = [];
     if ($result = mysqli_query($con, $sql)) {
          $cr = 0;
          while ($row = mysqli_fetch_assoc($result)) {
               $stagiares[$cr]['nom']    = $row['nom'];
               $stagiares[$cr]['prenom'] = $row['prenom'];
               $stagiares[$cr]['email'] = $row['email'];
               $stagiares[$cr]['telephone'] = $row['telephone'];
               $stagiares[$cr]['adresse'] = $row['adresse'];
               $stagiares[$cr]['specialite'] = $row['specialite'];
               $stagiares[$cr]['message'] = $row['message'];
               $stagiares[$cr]['status'] = $row['status'];
               $cr++;
          }

          echo json_encode(['data' => $stagiares]);
     } else {
          http_response_code(404);
     }
}
