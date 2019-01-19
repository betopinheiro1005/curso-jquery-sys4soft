<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 17</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula017.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 017 - Content filters associados aos selectors</h1>

        <button id="div_p_contains_div2">$("div p:contains('div 2')")</button>
        <button id="div_p_empty">$("div p:empty")</button>
        <button id="div_has_p">$("div:has(p)")</button>
        <button id="span_parent">$("span:parent")</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <p>Texto de um parágrafo em HTML</p>
        <span>Texto dentro de um span</span>
        <div>Texto dentro de um div</div>

        <br />

        <div>
            <p>Texto de um parágrafo dentro de um div 1</p>
            <p>Texto de um parágrafo dentro de um div 2</p>
            <p>Texto de um parágrafo dentro de um div 3</p>
            <p>Texto de um parágrafo dentro de um div 4</p>
            <p>Texto de um parágrafo dentro de um div 5</p>
        </div>

        <hr />

        <div>
            <p>Texto de um parágrafo dentro de um div 1</p>
            <p>Texto de um parágrafo dentro de um div 2</p>
            <p></p>
        </div>

        <hr />

        <p>Texto de um parágrafo fora de um div</p>

        <hr />    

        <div>
            <p><span>Texto de um span</span> dentro de um parágrafo que está dentro de um div</p>
        </div>

        
        <div>
            <span>Texto de um span dentro de um div</span>
        </div>

    </body>
</html>
