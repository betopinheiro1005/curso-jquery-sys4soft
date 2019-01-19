<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 013</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula013.js"></script>
    </head>

    <body id="container">

        <h1 class="aula">Aula 013 - Attribute selectors: Equals, Not equals e Starts with</h1>

        <button id="class_joao">$("[class='joao']")</button>        
        <button id="p_class_joao">$("p[class='joao']")</button>
        <button id="p_class_ribeiro">$("p[class='ribeiro']")</button>
        <button id="p_inicio_j">$("p[class^='j']")</button>
        <button id="p_inicio_a">$("p[class^='a']")</button>
        <button id="p_inicio_al">$("p[class^='al']")</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

            <table>

                <tr>
                    <td>
                        <ul>Lista de elementos não ordenada
                            <li>Item 1</li>
                            <li class="joao">Item 2 (class="joao")</li>
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
                        <p class="jose">Texto de um parágrafo em HTML (class="jose")</p>
                        <p class="alfredo">Texto de um parágrafo em HTML (class="alfredo")</p>
                        <span>Texto dentro de um span</span>
                        <div>Texto dentro de um div</div>
                    </td>
                    <td>
                        <div>
                            <span>Início do div</span>
                            <p class="antonio">Texto de um parágrafo dentro de um div 1 (class="antonio")</p>
                            <p class="ribeiro">Texto de um parágrafo dentro de um div 2 (class="ribeiro")</p>
                            <p class="joao">Texto de um parágrafo dentro de um div 3 (class="joao")</p>
                            <p class="alberto">Texto de um parágrafo dentro de um div 4 (class="alberto")</p>
                            <p class="alvaro">Texto de um parágrafo dentro de um div 5 (class="alvaro")</p>
                            <span>Fim do div</span>
                        </div>

                    </td>
                </tr>
            </table>

        </body>
</html>
