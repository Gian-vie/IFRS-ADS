<h1>SEJA BEM VINDO</h1>
<h2>Pagina Inicial</h2>
<hr>

<!-- @if (session('erro'))
    <h2>{{ session('erro') }}</h2>
@endif -->

@if (auth()->user())
    Olá {{auth()->user()->name}} você está autenticado
    <br>
    <a href="{{ route('logout') }}">SAIR</a>
@else
    Você <strong>NÂO</strong> está autenticado.
    <br>
    <a href="{{ route('login') }}">Logar</a>
@endif









<!-- <form action="http://127.0.0.1:8000/login" method="post"> -->
<!-- <form action="{{ route('login') }}" method="post">
        @csrf
        <input type="text" name="user">
        <br>
        <input type="password" name="pass">
        <br>
        <input type="submit" value="Acessar">
</form> -->