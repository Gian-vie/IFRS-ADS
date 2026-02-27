<?php
//usando_twig.php

#carrega o sostema de autoload do composer
require __DIR__ . '/vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./templates');

$twig = new \Twig\Environment($loader);

echo $twig->render('teste.html', ['nome' => 'Gian']);