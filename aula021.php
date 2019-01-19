<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 021</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula021.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 021 - Traversing: Parent, Parents e ParentsUntil</h1>

        <button id="li_parent">$("#li_parent")</button>
        <button id="p_id_teste1_parents_div">$("p#teste1").parents("div")</button>
        <button id="p_id_teste1_parent">$("p#teste1").parent()</button>
        <button id="p_id_teste1_parentsuntil_div_id_avo">$("p#teste1").parentsUntil("div#avo")</button>
        <button id="p_id_teste1_parentsuntil_div_id_bisavo">$("p#teste1").parentsUntil("div#bisavo")</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <p>Parágrafo 1</p>
        <p>Parágrafo 2</p>

        <hr />

        <div id="bisavo">
            <span>Início do bisavô</span>
            <div id="avo">
                <span>Início do avô</span>
                <div id="div1">
                    <span>Início do pai</span>
                    <p id="teste1">Filho 1 (id = "teste1")</p>
                    <p>Filho 2</p>
                    <p>Filho 3</p>
                    <span>Fim do pai</span>
                </div>
                <span>Fim do avô</span>
            </div>
            <span>Fim do bisavô</span>
        </div>

        <hr />

        <ul>Lista de elementos não ordenada
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
