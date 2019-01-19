<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 049</title>
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/aula049.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula049.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 049 - Class Attributes: removeClass e toggleClass</h1>

        <p>Classe 'cor1' no primeiro elemento da lista</p>
        <button type="button" id="bt_addclass1">Adicionar</button>
        <button type="button" id="bt_hasclass1">Verificar</button>
        <button type="button" id="bt_removeclass1">Remover</button>
        <button type="button" id="bt_toggleclass1">Alternar</button>

        <hr />
        
        <p>Classes 'cor1', 'fundo1' e 'borda1' no quarto elemento da lista</p>
        <button type="button" id="bt_addclass2">Adicionar</button>
        <button type="button" id="bt_removeclass2">Remover</button>

        <hr />

        Informação: <span id="msg" class="cor_msg"></span>

        <hr />

        <ul id="lista1">
            <li class="cor1">Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
        </ul>

        <br />

    </body>
</html>
