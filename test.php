<?php
$command = "php data.php";
exec($command, $output, $return_var);
var_dump($output);
?>