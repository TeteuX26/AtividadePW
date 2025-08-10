<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ímpar ou Par</title>
</head>
<body>
    <?php
    $num = 5;
    if ($num % 2 == 0) {
        echo "A variável $num é Par";
    } else {
        echo "A variável $num é Ímpar";
    }
    ?>
</body>
</html>