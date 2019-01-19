<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 007</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula007.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 007 - Selectors First, Last, Even e Odd</h1>

        <button id="ul_li_first">$("ul li:first")</button>
        <button id="ul_li_last">$("ul li:last")</button>
        <button id="ol_li_first">$("ol li:first")</button>
        <button id="ol_li_last">$("ol_li:last")</button>
        <button id="ul_li_even">$("ul li:even")</button>
        <button id="ul_li_odd">$("ul li:odd")</button>
        <button id="ol_li_even">$("ol li:even")</button>
        <button id="ol_li_odd">$("ol_li:odd")</button>
        <button id="div_p_first">$("div p:first")</button>
        <button id="div_p_last">$("div p:last")</button>
        <button id="div_p_even">$("div p:even")</button>
        <button id="div_p_odd">$("div_p:odd")</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <table>
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
                        Início do div<br />
                        <p>Texto de um parágrafo dentro de um div 1</p>
                        <p>Texto de um parágrafo dentro de um div 2</p>
                        <p>Texto de um parágrafo dentro de um div 3</p>
                        <p>Texto de um parágrafo dentro de um div 4</p>
                        <p>Texto de um parágrafo dentro de um div 5</p>
                        <p>Texto de um parágrafo dentro de um div 6</p>
                        Fim do div
                    </div>
                </td>
            </tr>
        </table>

    </body>
</html>
