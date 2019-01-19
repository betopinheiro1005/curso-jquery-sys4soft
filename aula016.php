<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 16</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula016.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 016 - Utilizando child filters nos selectors</h1>

        <button id="ul_li">ul li</button>
        <button id="ul_li_first_child">ul li:first-child</button>
        <button id="div_p_first_child">div p:first-child</button>
        <button id="div_p_last_child">div p:last-child</button>
        <button id="ul_li_nth_child_1">ul li:nth-child(1)</button>
        <button id="div_p_only_child">div p:only-child</button>
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
                        <li name="carlos">Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                    </ol>
                </td>
            </tr>
            <tr>
                <td>
                    <p>Texto de um parágrafo em HTML</p>
                    <span>Texto dentro de um span</span>
                    <div>Texto dentro de um div</div>

                    <hr />
                    
                    <div>
                        <p>Texto de um parágrafo dentro de um div 1</p>
                    </div>

                    <hr />

                    <div>
                        <p>Texto de um parágrafo dentro de um div 1</p>
                        <p>Texto de um parágrafo dentro de um div 2</p>
                    </div>
                </td>
                <td>
                    <div>
                        <p>Texto de um parágrafo dentro de um div 1</p>
                        <p>Texto de um parágrafo dentro de um div 2</p>
                        <p>Texto de um parágrafo dentro de um div 3</p>
                        <p>Texto de um parágrafo dentro de um div 4</p>
                        <p>Texto de um parágrafo dentro de um div 5</p>
                    </div>
                </td>
            </tr>
        </table>

    </body>
</html>
