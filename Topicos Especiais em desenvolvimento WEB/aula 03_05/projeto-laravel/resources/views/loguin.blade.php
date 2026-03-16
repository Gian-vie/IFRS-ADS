<h1>Pagina de login totalmente insegura</h1>

<hr>

@if (session('erro'))
    <h2>{{ session('erro') }}</h2>
@endif

<form action="{{ route('login') }}" method="post">
    <!-- <form action="http://127.0.0.1:8000/login" method="post"> -->
        @csrf
        <input type="text" name="user">
        <br>
        <input type="password" name="pass">
        <br>
        <input type="submit" value="Acessar">
</form>