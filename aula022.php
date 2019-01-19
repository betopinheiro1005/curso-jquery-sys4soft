<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 022</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula022.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 022 - Breve análise dos selector's para formularios</h1>

        <button id="input_text">$(":text")</button>
        <button id="input_password">$(":password")</button>
        <button id="input">$("input")</button>
        <button id="input_name_email">$("input[name='email']")</button>
        <button id="input_name_enviar">$("input[name='enviar']")</button>
        <button id="input_submit">$("input[type='submit']")</button>
        <button id="form_submit_false">$("form").submit(function(){return false;})</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <form>
            <input type="text" name="nome" placeholder="Nome"><br />
            <input type="text" name="email" placeholder="Email"><br />
            <input type="password" name="senha" placeholder="Senha"><br />
            <input type="submit" name="enviar" value="Enviar"><br />
        </form>

    </body>
</html>
