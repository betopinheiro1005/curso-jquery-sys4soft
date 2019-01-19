<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 012</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula012.js"></script>
    </head>

    <body id="container">

        <h1 class="aula">Aula 012 - Has Attribute Selector</h1>

        <button id="name">$("[name]")</button>
        <button id="alt">$("[alt]")</button>
        <button id="li_name">$("li[name]")</button>
        <button id="p_name">$("p[name]")</button>
        <button id="div_p_name">$("div p[name]")</button>
        <button id="div_not_p_name">$("div :not(p[name])")</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

        <table>

            <tr>
                <td>
                    <ul>Lista de elementos não ordenada
                        <li>Item 1</li>
                        <li name="carlos">Item 2 (name=carlos)</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                        <li>Item 6</li>
                    </ul>
                </td>
                <td>
                    <ol>Lista de elementos ordenada
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                        <li>Item 6</li>                    
                    </ol>
                </td>
            </tr>
            <tr>
                <td>
                    <p name="francisco">Texto de um parágrafo em HTML (name="francisco")</p>
                    <span alt="algumacoisa">Texto dentro de um span (alt="algumacoisa")</span>
                    <div>Texto dentro de um div</div>
                </td>
                <td>
                    <div>
                        <span>Início do div</span>
                        <p>Texto de um parágrafo dentro de um div 1</p>
                        <p name="ribeiro">Texto de um parágrafo dentro de um div 2 (name="ribeiro")</p>
                        <p name="joao">Texto de um parágrafo dentro de um div 3 (name="joao")</p>
                        <p alt="outracoisa">Texto de um parágrafo dentro de um div 4 (alt="outracoisa")</p>
                        <p>Texto de um parágrafo dentro de um div 5</p>
                        <span>Fim do div</span>
                    </div>
                </td>
            </tr>
        </table>

    </body>
</html>
