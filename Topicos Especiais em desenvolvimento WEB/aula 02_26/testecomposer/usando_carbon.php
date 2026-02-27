<?php
//usando_carbn.php
// phpinfo();
#carrega o sostema de autoload do composer
require __DIR__ . '/vendor/autoload.php';

use \Carbon\Carbon as carbon; // controle de datas 
// use \Twig\Twig as twig; // controle e separação de html do php

echo 'agora<br>';
echo carbon::now('America/Sao_Paulo');

echo '<br>+ 1 dia<br>';
echo carbon::now('America/Sao_Paulo')->addDay();

