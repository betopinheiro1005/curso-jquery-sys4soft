<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 009</title>
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/aula009.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula009.js"></script>
    </head>

    <body id="container">

        <h1 class="aula">Aula 009 - Selectors notselector</h1>

        <button id="div_p">$("div p")</button>
        <button id="div_span">$("div span")</button>
        <button id="div_p_not_id_p1">$("div p:not(#p1)")</button>
        <button id="div_p_class_outra">$("div p.outra")</button>
        <button id="div_p_not_class_outra">$("div p:not(.outra)")</button>
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
                        <span>Início do div</span><br />
                        <p>Texto de um parágrafo dentro de um div 1</p>
                        <p class="outra">Texto de um parágrafo dentro de um div 2 (class="outra")</p>
                        <p class="outra">Texto de um parágrafo dentro de um div 3 (class="outra")</p>
                        <p class="outra">Texto de um parágrafo dentro de um div 4 (class="outra")</p>
                        <p id="p1">Texto de um parágrafo dentro de um div 5 (id="p1")</p>
                        <p>Texto de um parágrafo dentro de um div 6</p>
                        <span>Fim do div</span>
                    </div>
                </td>
            </tr>
        </table>

    </body>
</html>
