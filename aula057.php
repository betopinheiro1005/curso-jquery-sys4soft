<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 057</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula057.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 057 - Removendo elementos HTML do DOM com jQuery</h1>

        <button type="button" id="bt_detach">detach()</button>
        <button type="button" id="bt_remove">remove()</button>
        <button type="button" id="bt_empty">empty()</button>
        <button type="button" id="bt_recarregar">Recarrega a página</button>

        <hr />

        Informação: <span id="msg" class="cor_msg"></span>

        <hr />

        <div class="primeira">
            <p>Início</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
            <p>Fim</p>                
        </div>

    </body>
</html>
