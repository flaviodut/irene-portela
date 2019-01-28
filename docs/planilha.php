<?php

$handle = fopen('pesquisa.csv', 'r');

if ($handle) {
  while (($line = fgets($handle)) !== false) {
    printf('<p>' . $line . '</p>');
  }

  fclose($handle);
} else {
  // error opening the file.
  printf('vish');
}

?>