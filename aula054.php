<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 054</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula054.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 054 - Utilização de html e text e principais diferenças</h1>

        <button type="button" id="bt_html_div1">html() - div 1</button>
        <button type="button" id="bt_text_div1">text() - div 1</button>
        <button type="button" id="bt_html_div2">html() - div 2</button>
        <button type="button" id="bt_text_div2">text() - div 2</button>

        <hr />

        <button type="button" id="bt_html_div">html() - div's</button>
        <button type="button" id="bt_text_div">text() - div's</button>


        <hr />

        <button type="button" id="bt_text_id_teste">text() - Altera texto</button>
        <button type="button" id="bt_html_id_teste">html() - Altera HTML</button>
        <button type="button" id="bt_recarregar">Recarregar</button>
        
        <hr />

        Informação: <span id="msg" class="cor_msg"></span>

        <hr />
        
        <div id="div1" class="primeira">
            <strong>div 1</strong>
            <p>Parágrafo 1</p>
            <div>
                <P id="teste">Parágrafo em outra div (id="teste")</p>
            </div>
            <p>Parágrafo 2</p>
        </div>


        <br /><br />

        <div id="div2" class="segunda">
            <strong>div 2</strong>
            <p>Parágrafo 3</p>
            <p>Parágrafo 4</p>
        </div>

    </body>
</html>
