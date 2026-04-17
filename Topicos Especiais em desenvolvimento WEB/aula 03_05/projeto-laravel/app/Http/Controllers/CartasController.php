<?php

namespace App\Http\Controllers;

use App\Models\Carta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
           
            $dados = $request->only('nome', 'tipo', 'numero'); 
            // dd($dados);
            $foto = $request->file('foto')->store('cartas', 'public');

            if ($foto) {
                $dados['foto'] = $foto;
            }

            Carta::create($dados);
            
            return redirect()->route('cartas.index')->with('success', 'Carta inserida com sucesso!');
        
        }
        return view('cartas.inserir');

    }

    public function editar(Request $request, Carta $carta){

    }

    public function excluir(Request $request, Carta $carta) {
        if ($request->isMethod('DELETE')) {
            if ($carta->foto) {
                Storage::disk('public')->delete($carta->foto);
                // unlink(storage_path('app/public/' . $carta->foto));
            }
            $carta->delete();
            return redirect()->route('cartas.index')->with('success', 'Carta excluída com sucesso!');
        }

        return view('cartas.excluir', [
            'carta' => $carta
        ]);
    }
}
