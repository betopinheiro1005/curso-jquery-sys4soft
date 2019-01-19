<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 15</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula015.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 015 - Multiple attribute selector e exemplos</h1>

        <button id="div_p_name">$("div p[name]")</button>
        <button id="div_p_name_olept">$("div p[name=olept]")</button>
        <button id="div_p_id_name_olept_alt">$("div p[id][name=olept][alt]")</button>
        <button id="div_p_id_p1_name">$("div p[id=p1][name]]")</button>
        <button id="div_p_id_name_alt">$("div p[id][name][alt]")</button>
        <button id="div_p_id_name_alt_teste1">$("div p[id][name][alt=teste1]")</button>
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
                <td colspan=2">
                    <div>
                        <span>Início do div</span>
                        <p id="p1" name="pt-1" alt="teste1">Texto de um parágrafo dentro de um div 1 (id="p1" name="pt-1" alt="teste1")</p>
                        <p id="p2" name="pt-2" alt="alternativo">Texto de um parágrafo dentro de um div 2 (id="p2" name="pt-2" alt="alternativo")</p>
                        <p id="p3" name="pts">Texto de um parágrafo dentro de um div 3 (id="p3" name="pts")</p>
                        <p id="p4" name="pt-3" alt="teste1">Texto de um parágrafo dentro de um div 4 (id="p4" name="pt-3" alt="teste1")</p>
                        <p id="p5" name="olept">Texto de um parágrafo dentro de um div 5 (id="p5" name="olept")</p>
                        <p id="p6" name="olept" alt="teste1">Texto de um parágrafo dentro de um div 6 (id="p5" name="olept" alt="teste1")</p>
                        <span>Fim do div</span>
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>
