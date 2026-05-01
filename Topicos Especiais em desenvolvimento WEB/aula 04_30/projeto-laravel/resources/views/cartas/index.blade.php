<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartas</title>
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @else
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @endif
</head>
<body>
<div class="cartas-page">
    <h1 class="cartas-title">CARTAS</h1>

    <div>
        <a href="{{ route('cartas.inserir') }}" class="cartas-add-link">➕ Add Card</a>
    </div>

    <div class="cartas-table-container">
        <table class="cartas-table">
            <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Foto</th>
                <th>Número</th>
                <th>editar</th>
                <th>excluir</th>
            </tr>

            @foreach ($cartas as $carta)
            <tr>
                <td>{{ $carta['id'] }}</td>
                <td>{{ $carta['nome'] }}</td>
                <td>
                    <img src="{{ asset('storage/energias/'.$carta['tipo'].'.png' ) }}" alt="{{ $carta['tipo'] }}" width="25">
                </td>
                <td><img src="{{ asset('storage/'.$carta['foto']) }}" alt="[NULL]" width="100" class="carta-imagem"></td>
                <td>{{ $carta['numero'] }}</td>
                <td>
                    <a href="{{ route('cartas.editar', $carta['id']) }}">edit</a>
                </td>
                <td>
                    <a href="{{ route('cartas.excluir', $carta['id']) }}">excluir</a>
                </td>
            </tr>
            @endforeach
        </table>
    </div>

    <!-- {{ $cartas }} -->
</div>
</body>
</html>