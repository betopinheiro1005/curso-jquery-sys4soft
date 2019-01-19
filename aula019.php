<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 019</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula019.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 019 - Traversing: PrevUntil, NextUntil, First e Last</h1>

        <button id="p_id_teste1_nextuntil_teste2">$("p#teste1").nextUntil("p#teste2")</button>
        <button id="p_id_teste2_prevuntil_teste1">$("p#teste2").prevUntil("p#teste1")</button>
        <button id="li_first">$("li").first()</button>
        <button id="li_last">$("li").last()</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <p>Parágrafo 1</p>
        <p>Parágrafo 2</p>
        <p id="teste1">Parágrafo 3 (id = "teste1")</p>
        <p>Parágrafo 4</p>
        <p>Parágrafo 5</p>

        <hr />
        
        <ul>Lista de elementos não ordenada
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>

        <hr />
        
        <p id="teste2">Parágrafo 6 (id = "teste2")</p>
        <p>Parágrafo 7</p>

    </body>
</html>
