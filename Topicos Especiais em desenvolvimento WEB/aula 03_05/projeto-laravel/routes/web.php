<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [LoginController::class, 'index']);

route::post('/login', [LoginController::class, 'autenticar'])->name('login');

route::get('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/bemvindo', [LoginController::class, 'bemvindo'])->name('bemvindo');
