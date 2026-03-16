<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    // pior pagina de login existente
    public function index()
    {
        return view('login');
    }

    public function autenticar(Request $request)
    {
        // dd($request->only('user', 'pass'));
        $login = $request->only('user', 'pass');
        $auth = Auth::attempt([
            'email' => $login['user'], //test@example.com
            'password' => $login['pass'], //password
        ]);
        // dd($auth);
        if ($auth) {
            return redirect()->route('bemvindo');
        } else {
            return redirect()->route('login')->with('erro', 'usuario ou senha invalido');
        }

    }

    public function bemvindo() {
        return '<h1>você está autenticado<h1>';
    }
}
