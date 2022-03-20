<?php

use Symfony\Component\Dotenv\Dotenv;

$dotenv = new Dotenv();
$dotenv->usePutenv(TRUE);
$envFile = __DIR__.'/.env';
if(file_exists($envFile)){
  $dotenv->load($envFile);
}
