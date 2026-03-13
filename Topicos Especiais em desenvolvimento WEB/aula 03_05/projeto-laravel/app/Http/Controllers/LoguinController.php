<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoguinController extends Controller
{
    // pior pagina de loguin existente
    public function index()
    {
        return view('loguin');
    }

    public function autenticar(Request $request)
    {
        // dd($request->only('user', 'pass'));
        $login = $request->only('user', 'pass');
        $auth = Auth::attempt([
            'email' => $login['user'],
            'password' => $login['pass'],
        ]);
        dd($auth);
    }
}
