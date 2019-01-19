<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 061</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula061.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 061 - Usando o método Prop em elementos do tipo Radio</h1>

        <button type="button" id="bt_opcao1">Seleciona a opção 1</button>
        <button type="button" id="bt_opcao2">Seleciona a opção 2</button>
        <button type="button" id="bt_opcao3">Seleciona a opção 3</button>        
        <button type="button" id="bt_recarregar">Recarrega a página</button>

        <hr />

        Informação: <span id="msg" class="cor_msg"></span>

        <hr />

        <input type="radio" id="opcao1" name="opcoes">
        <label for="radio1">Opção 1</label>
        <br />
        <input type="radio" id="opcao2" name="opcoes">
        <label for="radio2">Opção 2</label>
        <br />
        <input type="radio" id="opcao3" name="opcoes">
        <label for="radio3">Opção 3</label>
        
        <br /><hr />

        <div id="info"></div>

    </body>
</html>
