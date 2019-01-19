<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 047</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula047.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 047 - removeData para remover valores atribuidos a elementos HTML</h1>

        <br />

        <form id="form1">
            <input type="text" name="nome" placeholder="Nome" value="" autocomplete="off"><br />
            <input type="text" name="email" placeholder="Email" value="" autocomplete="off"><br />
            <input type="password" name="senha" placeholder="Senha"><br />
            <input type="submit" id="enviar" value="Enviar">
        </form>
  
        <br /><hr /><br />

        <p id="contentor">Contentor</p>
        
        <br />
        
        <button type="button" id="bt_adicionar">Adicionar</button>
        <button type="button" id="bt_apresentar">Apresentar</button>
        <button type="button" id="bt_remover">Remover</button>
        
        <br /><br />
        
        <div id="exibe_dados1"></div>
        <div id="exibe_dados2"></div>

        <br />
        
    </body>
</html>
