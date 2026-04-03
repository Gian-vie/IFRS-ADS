<h1>CARTAS</h1>

<style>
    .cartas-table {
        width: auto;
        border-collapse: separate;
        border-spacing: 0;
        border: 1px solid #4a5568;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        background: #fff;
    }

    .cartas-table th,
    .cartas-table td {
        border: 1px solid #cbd5e0;
        padding: 8px 12px;
        text-align: left;
    }

    .cartas-table th {
        background-color: #2d3748;
        color: #edf2f7;
        font-weight: 700;
    }

    .cartas-table tr:nth-child(odd) {
        background-color: #f7fafc;
    }

    .cartas-table tr:hover {
        background-color: #e2e8f0;
    }

    .cartas-table td:nth-child(3) {
        text-align: center;
    }

    .cartas-table td img {
        vertical-align: middle;
    }
</style>

<div>
    <a href="{{ route('cartas.inserir') }}">➕ Add Card</a>
</div>


<div>

    tabla de cartas
    <table class="cartas-table">
        <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Foto</th>
        </tr>

        @foreach ($cartas as $carta)
        <tr>
            <td>{{ $carta['id'] }}</td>
            <td>{{ $carta['nome'] }}</td>
            <td>
                <img src="{{ asset('storage/energias/'.$carta['tipo'].'.png' ) }}" alt="{{ $carta['tipo'] }}" width="25">    
            </td>
            <td><img src="{{ $carta['foto'] }}" alt="[NULL]" width="100"></td>
        </tr>
        @endforeach

    </table>

    <!-- {{ $cartas }} -->
</div>