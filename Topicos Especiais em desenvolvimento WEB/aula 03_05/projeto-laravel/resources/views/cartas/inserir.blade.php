<h1>INSERIR CARTAS</h1>

<form action="{{ route('cartas.gravar') }}" method="post">
    @csrf
    <input type="text" name="nome" placeholder="Nome">
    <br>
    <select name="tipo">
        <option value="fogo">Fogo</option>
        <option value="elétrico">Elétrico</option>
    </select>
    <br>
    <input type="file" name="foto" placeholder="foto">
    <br>
    <input type="submit" value="Gravar">
</form>