<h1>Cartas</h1>

<p>Tem certeza que deseja excluir a carta {{ $carta->nome }}?</p>

<form action="{{ route('cartas.excluir', $carta->id) }}" method="post">
    @csrf
    @method('delete')
    <input type="submit" value="Confirmar Exclusão">
    <a href="{{ route('cartas.index') }}">Cancelar</a>
</form>