<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoguinController extends Controller
{
    // pior pagina de loguin existente
    public function index() {
        return view('loguin');

    }
}
