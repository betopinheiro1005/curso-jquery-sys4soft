<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 020</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula020.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 020 - Traversing: Siblings, Slice e Children</h1>

        <button id="ul">$("ul")</button>
        <button id="li">$("li")</button>
        <button id="li_id_item3">$("li#item3")</button>
        <button id="li_id_item3_siblings">$("li#item3").siblings()</button>
        <button id="li_slice_1_3">$("li").slice(1,3)</button>
        <button id="li_slice_0_4">$("li").slice(0,4)</button>
        <button id="p_slice_1_6">$("p").slice(1,6)</button>
        <button id="div_id_div1_children">$("div#div1").children()</button>
        <button id="div_id_div1_children_p">$("div#div1").children("p")</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <p>Parágrafo 1</p>
        <p>Parágrafo 2</p>

        <hr />
        
        <div id="div1">
            <p id="teste1">Parágrafo 3 (id = "teste1")</p>
            <p>Parágrafo 4</p>
            <p>Parágrafo 5</p>
            <span>Texto no span e dentro do div</span>
        </div>

        <hr />

        <ul id="lista1">Lista de elementos não ordenada
            <li>Item 1</li>
            <li>Item 2</li>
            <li id="item3">Item 3 (id="item3")</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>

        <hr />

        <p id="teste2">Parágrafo 6 (id = "teste2")</p>
        <p>Parágrafo 7</p>

    </body>
</html>
