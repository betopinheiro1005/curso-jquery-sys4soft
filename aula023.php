<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 023</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula023.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 023 - Hierarchy selectors: Child selectors, next Adjacent e next Siblings</h1>

        <button id="div_id_div1">$("div#div1 p")</button>
        <button id="div_id_div1_p">$("div#div1 > p")</button>
        <button id="div_id_div2_class_p1">$("div#div2 .p1")</button>
        <button id="p_class_p2_plus_p_class_p1">$(".p2 + .p1")</button>
        <button id="p_class_p1_plus_p_class_p2">$(".p1 + .p2")</button>
        <button id="p_id_teste_til_p">$("p#teste ~ p")</button>
        <button id="p_id_teste_til_span">$("p#teste ~ span")</button>
        <button id="limpar">Limpar</button>
        
        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <div id="div1">
            div1
            <p>Parágrafo 1</p>
            <p>Parágrafo 2</p>
            <div>
                <p>Outro parágrafo</p>
            </div>
            <p>Parágrafo 3</p>
        </div>
        
        <hr />

        <div id="div2">
            div2
            <p class="p1">Parágrafo 1 (class="p1")</p>
            <p class="p1">Parágrafo 2 (class="p1")</p>
            <p id="teste">Parágrafo 3 (id="teste")</p>
            <p class="p2">Parágrafo 4 (class="p2")</p>
            <p class="p1">Parágrafo 5 (class="p1")</p>
            <p class="p2">Parágrafo 6 (class="p2")</p>
            <span>Texto dentro de um span</span>
            <p class="p2">Parágrafo 7 (class="p2")</p>
        </div>
        
        
    </body>
</html>
