<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 044</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula044.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 044 - Usando Data para guardar valores dentro de elementos HTML</h1>

        <br />

        <form id="form1">
            <input type="text" name="nome" placeholder="Nome" value="" autocomplete="off"><br />
            <input type="text" name="email" placeholder="Email" value="" autocomplete="off"><br />
            <input type="password" name="senha" placeholder="Senha"><br />
            <input type="submit" id="enviar" value="Enviar">
        </form>
       
        <br /><hr /><br />
        
        <button type="button" id="bt_armazenar">Armazenar</button>
        <button type="button" id="bt_apresentar">Apresentar</button>
        <button type="button" id="bt_remover">Remover</button>
        
        <br /><br />
        
        <div id="info"></div>
        <div id="exibe_dados1"></div>
        <div id="exibe_dados2"></div>

        <br />
        
    </body>
</html>
