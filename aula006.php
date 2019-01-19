<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 006</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula006.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 006 - jQuery Selectors - All, Element, ID, Class e exemplos</h1>

        <button id="element_p">$("p")</button>
        <button id="element_div">$("div")</button>
        <button id="element_ul">$("ul")</button>
        <button id="element_ol">$("ol")</button>
        <button id="element_li">$("li")</button>
        <button id="element_h3">$("h3")</button>
        <button id="element_span">$("span")</button>
        <button id="all">$("*")</button>
        <button id="element_div_p">$("div p")</button>
        <button id="element_ul_li">$("ul li")</button>
        <button id="element_ol_li">$("ol li")</button>
        <button id="id">$("p#p1")</button>
        <button id="classe">$("p.p2")</button>
        <button id="exemplo">Exemplo --> Clique em span</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <table>
            <tr>
                <td>
                    <h3>Título 3 em HTML</h3>
                    <p>Texto de um parágrafo em HTML</p>
                    <p id="p1">Este texto é de um parágrafo com id. (id="p1")</p>
                    <p class="p2">Este texto é de um parágrafo com classe. (class="p2")</p>
                    <div>Texto dentro de um div</div>
                    <span>Texto dentro de um span</span><br /><br />
                </td>
                <td>
                    <div>
                        Início do div<br />
                        <p>Texto de um parágrafo dentro de um div 1</p>
                        <p>Texto de um parágrafo dentro de um div 2</p>
                        <p>Texto de um parágrafo dentro de um div 3</p>
                        <p>Texto de um parágrafo dentro de um div 4</p>
                        Fim do div
                    </div>
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
        </table>

    </body>
</html>
