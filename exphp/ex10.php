<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Médias</title>
</head>
<body>
    <?php
    $nota1 = 10;
    $nota2 = 7;
    $nota3 = 2;
    $media = ($nota1 + $nota2 + $nota3) / 3;
    $media = round ($media);
    if ($media >= 7) {
         echo "Aluno aprovado com média $media";
    } else {
        echo "Aluno reprovado com média $media"; 
    }
    ?>
</body>
</html>