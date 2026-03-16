<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [LoginController::class, 'index']);

route::post('/login', [LoginController::class, 'autenticar'])->name('login');

Route::get('/bemvindo', [LoginController::class, 'bemvindo'])->name('bemvindo');
