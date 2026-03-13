<?php

use App\Http\Controllers\LoguinController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/loguin', [LoguinController::class, 'index']);

route::post('/loguin', [LoguinController::class, 'autenticar'])->name('loguin');
