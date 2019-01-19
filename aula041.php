<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 041</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula041.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 041 - Eventos das Forms: Blur e Focus</h1>

        <br />

        <button type="button" id="bt_foco_nome">Foco no campo 'nome'</button>
        <button type="button" id="bt_foco_email">Foco no campo 'email'</button>
        <button type="button" id="bt_perde_foco_senha">Perda de foco no campo 'senha'</button>
        <button type="button" id="bt_recarregar">Recarregar</button>
        
        <hr />

        Informação: <span id="msg" class="cor_msg"></span>

        <hr />

        <form id="form1">
            <input type="text" name="nome" placeholder="Nome" value="" autocomplete="off"><br />
            <input type="text" name="email" placeholder="Email" value="" autocomplete="off"><br />
            <input type="password" name="senha" placeholder="Senha" value="" autocomplete="off"><br />
            <input type="submit" id="enviar" value="Enviar">
        </form>

    </body>
</html>
