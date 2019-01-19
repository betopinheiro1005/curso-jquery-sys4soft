<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 043</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula043.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 043 - Forms: Serialize e SerializeArray</h1>

        <br />
        
        <button type="button" id="bt_serialize">serialize</button>
        <button type="button" id="bt_serializearray">serializeArray</button>
        
        <br /><br /><hr /><br />
        
        <div id="info"></div>

        <br />

        <form id="form1">
            <input type="text" name="nome" placeholder="Nome" value="" autocomplete="off"><br />
            <input type="text" name="email" placeholder="Email" value="" autocomplete="off"><br />
            <input type="password" name="senha" placeholder="Senha"><br />
            <input type="submit" id="enviar" value="Enviar">
        </form>
        
    </body>
</html>
