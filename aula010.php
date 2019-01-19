<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 010</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula010.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 010 - Resumindo todos os Basic Selectors</h1>

        <button id="all">$("*")</button>
        <button id="class_teste">$(".teste")</button>
        <button id="li">$("li")</button>
        <button id="ul_li">$("ul li")</button>
        <button id="ol_li">$("ol li")</button>
        <button id="p">$("p")</button>
        <button id="div_p">$("div p")</button>
        <button id="div_id_p1">$("div #p1")</button>
        <button id="div_id_p2">$("div #p2")</button>
        <button id="ul_li_div_p">$("ul li, div p")</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <table>
            <tr>
                <td colspan=2">
                    <p>Texto de um parágrafo fora de um div.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <ul>Lista de elementos não ordenada
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                    </ul>
                </td>
                <td>
                    <ol>Lista de elementos ordenada
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                    </ol>
                </td>
            </tr>
            <tr>
                <td colspan=2">
                    <div>
                        Início do div
                        <p class="teste">Texto de um parágrafo dentro de um div 1 (class="teste")</p>
                        <p id="p1">Texto de um parágrafo dentro de um div 2 (id="p1")</p>
                        <p id="p2">Texto de um parágrafo dentro de um div 3 (id="p2")</p>
                        <p>Texto de um parágrafo dentro de um div 4</p>
                        <p>Texto de um parágrafo dentro de um div 5</p>
                        Fim do div
                    </div>
                </td>
            </tr>
        </table>

    </body>
</html>
