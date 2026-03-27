<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartasController extends Controller
{
    public function index () {
        return view('cartas/index');
    }

    public function inserir(Request $request) {
        if ($request->isMethod('POST')){
            // dd($request->all());
            dd($request->only('nome', 'tipo', 'foto'));
        }
        return view('cartas.inserir');

    }
}
