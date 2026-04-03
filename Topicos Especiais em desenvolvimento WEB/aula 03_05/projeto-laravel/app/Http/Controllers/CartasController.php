<?php

namespace App\Http\Controllers;

use App\Models\Carta;
use Illuminate\Http\Request;

class CartasController extends Controller
{
    public function index () {
        $cartas = Carta::all();

        return view('cartas.index', [
            'cartas' => $cartas
        ]);
    }

    public function inserir(Request $request) {
        if ($request->isMethod('POST')){
            // dd($request->all());
            $dados = $request->only('nome', 'tipo'); 
            // dd($dados);
            Carta::create($dados);
            
            return redirect()->route('cartas.index')->with('success', 'Carta inserida com sucesso!');
        
        }
        return view('cartas.inserir');

    }
}
