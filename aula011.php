<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 11</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula011.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 011 - Resumindo os Basic Filters</h1>

        <button id="ul_li_1">$("ul li:eq(1)")</button>
        <button id="ul_li_even_ol_li_even">$("ul li:even, ol li:even")</button>
        <button id="ul_li_odd_ol_li_odd">$("ul li:odd, ol li:odd")</button>
        <button id="ul_li_first_ol_li_first_div_p_first">$("ul li:first, ol li:first, div p:first")</button>
        <button id="ul_li_last_ol_li_last_div_p_last">$("ul li:last, ol li:last, div p:last")</button>
        <button id="ul_li_gt0_ol_li_gt0_div_p_gt0">$("ul li:gt(0), ol li:gt(0), div p:gr(0)")</button>
        <button id="ul_li_lt4_ol_li_lt4_div_p_lt4">$("ul li:lt(4), ol li:lt(4), div p:lt(4)")</button>
        <button id="div_p_not_p_teste">$("div p:not(p.teste)")</button>
        <button id="div_not_p_id_p2">$("div :not(p#p2)")</button>
        <button id="div_not_p_id_p1">$("div :not(p#p1)")</button>
        <button id="h1_h3">$("h1, h3")</button>
        <button id="header">$(":header")</button>
        <button id="td_div_header">$("td div :header")</button>
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
                        <td>
                            <h4>Título h4 fora de um div</h4>
                            <div>
                                <h1>Título h1 dentro de um div</h1>
                                <h2>Título h2 dentro de um div</h2>
                                <h3>Título h3 dentro de um div</h3>
                            </div>

                        </td>
                        <td>
                            <div>
                                <span>Início do div</span>
                                <p class="teste">Texto de um parágrafo dentro de um div 1 (class="teste")</p>
                                <p id="p1">Texto de um parágrafo dentro de um div 2 (id="p1")</p>
                                <p id="p2">Texto de um parágrafo dentro de um div 3 (id="p2")</p>
                                <p>Texto de um parágrafo dentro de um div 4</p>
                                <p class="teste">Texto de um parágrafo dentro de um div 5 (class="teste")</p>
                                <span>Fim do div</span>
                            </div>
                        </td>
                    </tr>
                </table>

                </body>
                </html>
