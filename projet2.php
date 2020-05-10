<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$link = new PDO('mysql:host=localhost;dbname=mmitineraire', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

if(isset($_GET["email"]) and $_GET["email"]!=""){
    $email = $_GET["email"];
    $sql = "INSERT INTO formulaire_de_contact (email) VALUES(:email)";
    $req = $link -> prepare($sql);
    $req -> execute(array(":email" => $email));
    echo("Votre adresse de courriel a bien été ajouté");
} else{
    echo("Merci de préciser une adresse de courriel à ajouter");
}
?>
<br>
</body>
</html>