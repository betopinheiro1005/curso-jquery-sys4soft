<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 18</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula018.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 018 - Traversing: Prev, Next, PrevAll e NextAll</h1>

        <button id="p">$("p")</button>
        <button id="p_id_teste">$("p#teste")</button>
        <button id="p_id_teste_next">$("p#teste").next()</button>
        <button id="ul_li_2_next">$("ul li:eq(2)").next()</button>
        <button id="ul_li_2_nextall">$("ul li:eq(2)").nextAll()</button>
        <button id="p_id_teste_nextall">$("p#teste").nextAll()</button>
        <button id="p_id_teste_prev">$("p#teste").prev()</button>
        <button id="p_id_teste_prevall">$("p#teste").prevAll()</button>
        <button id="p5_prevall">$("p:eq(5)").prevAll()</button>
        <button id="li2_prevall">$("li:eq(2)").prevAll()</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <p>Parágrafo 1</p>
        <p>Parágrafo 2</p>
        <p id="teste">Parágrafo 3 (id = "teste")</p>
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
        
        <p>Parágrafo 6</p>
        <p>Parágrafo 7</p>

    </body>
</html>
