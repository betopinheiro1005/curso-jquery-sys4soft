<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 008</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula008.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 008 - Selectors: eq, lt e gt</h1>

        <button id="ul_li_first">$("ul li:first")</button>
        <button id="ul_li_2">$("ul li:eq(2)")</button>
        <button id="div_p_2">$("div p:eq(2)")</button>
        <button id="ul_li_gt_1">$("ul li:gt(1)")</button>
        <button id="ul_li_lt_4">$("ul li:lt(4)")</button>
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
