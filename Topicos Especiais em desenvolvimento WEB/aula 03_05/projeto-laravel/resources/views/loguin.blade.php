<h1>Pagina de login totalmente insegura</h1>

<hr>
<form action="{{ route('loguin') }}" method="post">
    <!-- <form action="http://127.0.0.1:8000/loguin" method="post"> -->
        @csrf
        <input type="text" name="user">
        <br>
        <input type="password" name="pass">
        <br>
        <input type="submit" value="Acessar">
</form>