<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Carta</title>
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @else
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @endif
</head>

<body>
    <div class="form-container">
        <form action="{{ route('cartas.atualizar', $carta->id) }}" method="post" enctype="multipart/form-data" class="form-cartas">
            @csrf
            @method('put')
            <h1 class="form-title">✏️ Editar Carta</h1>

            <div class="form-group">
                <label for="nome" class="form-label">Nome da Carta</label>
                <input type="text" id="nome" name="nome" class="form-input" value="{{ $carta->nome }}" required>
            </div>

            <div class="form-group">
                <label for="tipo" class="form-label">Tipo</label>
                <select id="tipo" name="tipo" class="form-select" required>
                    <option value="fogo" {{ $carta->tipo === 'fogo' ? 'selected' : '' }}>🔥 Fogo</option>
                    <option value="elétrico" {{ $carta->tipo === 'elétrico' ? 'selected' : '' }}>⚡ Elétrico</option>
                </select>
            </div>

            <div class="form-group">
                <label for="foto" class="form-label">Imagem da Carta</label>
                <img src="{{ asset('storage/'.$carta['foto']) }}" alt="[NULL]" width="100" class="carta-imagem">
                <input type="file" id="foto" name="foto" class="form-file" accept="image/*">
                <p style="font-size: 0.75rem; color: #a0aec0; margin-top: 5px;">Deixe em branco para manter a imagem atual</p>
            </div>

            <div class="form-group">
                <label for="numero" class="form-label">Número</label>
                <input type="number" id="numero" name="numero" class="form-input" value="{{ $carta->numero }}" required>
            </div>

            <button type="submit" class="form-submit">Atualizar Carta</button>
            <a href="{{ route('cartas.index') }}" class="form-button form-button-secondary" style="text-align: center; text-decoration: none; display: block;">Voltar</a>
        </form>
    </div>
</body>

</html>