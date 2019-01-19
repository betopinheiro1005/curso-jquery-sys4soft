<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 14</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula014.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 014 - Attribute selectors: Ends with, Contains e Prefix</h1>

        <button id="p_name_fim_ao">$("p[name$='ao']")</button>
        <button id="p_name_fim_o">$("p[name$='o']")</button>
        <button id="p_name_contem_joao">$("p[name*='joao']")</button>
        <button id="p_name_contem_joao_separado">$("p[name~='joao']")</button>
        <button id="p_lang_prefix_pt">$("p[lang|='pt']")</button>
        <button id="limpar">Limpar</button>

        <hr />

        Função do jQuery selector: <span id="msg" class="cor_msg"></span>

        <hr />

                <table>
                    <tr>
                        <td>
                            <p name="jair castro">Texto de um parágrafo em HTML (name="jair castro")</p>
                        </td>
                        <td>
                            <p name="jose joao">Texto de um parágrafo em HTML (name="jose joao")</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ul>Lista de elementos não ordenada
                                <li>Item 1</li>
                                <li name="jose ribeiro">Item 2 (name="jose ribeiro")</li>
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
                            <div>
                                <span>Início do div</span>
                                <p name="joao1">Texto de um parágrafo dentro de um div 1 (name="joao1")</p>
                                <p name="joao 2">Texto de um parágrafo dentro de um div 2 (name="joao 2")</p>
                                <p name="3 joao">Texto de um parágrafo dentro de um div 3 (name="3 joao")</p>
                                <p name="carlos damiao">Texto de um parágrafo dentro de um div 4 (name="carlos damiao")</p>
                                <p name="albertinojoaocarlos">Texto de um parágrafo dentro de um div 5 (name="albertinojoaocarlos")</p>
                                <p name="albertino joao carlos">Texto de um parágrafo dentro de um div 6 (name="albertino joao carlos")</p>
                                <span>Fim do div</span>
                            </div>

                        </td>
                        <td>
                            <div>
                                <span>Início do div</span>
                                <p lang="pt">Texto de um parágrafo dentro de um div 1 (lang="pt")</p>
                                <p lang="pt-br">Texto de um parágrafo dentro de um div 2 (lang="pt-br")</p>
                                <p lang="ptbr">Texto de um parágrafo dentro de um div 3 (lang="ptbr")</p>
                                <p lang="pt br">Texto de um parágrafo dentro de um div 4 (lang="pt br")</p>
                                <p lang="br-pt">Texto de um parágrafo dentro de um div 5 (lang="br-pt")</p>
                                <p lang="pt-pt">Texto de um parágrafo dentro de um div 6 (lang="pt-pt")</p>
                                <span>Fim do div</span>
                            </div>
                        </td>
                    </tr>
                </table>

                </body>
                </html>
