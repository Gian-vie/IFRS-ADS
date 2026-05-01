<?php

namespace App\Http\Controllers;

use App\Models\Carta;
use Illuminate\Http\Request;

class ApiCartasController extends Controller
{
    public function index()
    {
        $cartas = Carta::all();
        return response()->json($cartas);
    }

    public function show($carta)
    {
        $carta = Carta::find($carta);
        if (!$carta) {
            return response()->json(['message' => 'Carta não encontrada'], 404);
        }
        return response()->json($carta);
    }

    public function store(Request $request)
    {
        $daods = $request->validate([
            'nome' => 'required|string|max:255',
            'tipo' => 'required|string|max:255|in:Elétrica,Fogo',
            'foto' => 'nullable|string',
        ]);
        $carta = Carta::create($daods);
        return response()->json($carta, 201);
    }
}
