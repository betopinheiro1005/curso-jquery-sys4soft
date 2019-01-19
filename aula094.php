<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 094</title>
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/jquery-ui.js"></script>
        <script type="text/javascript" src="js/jquery.maskedinput.js"></script>
        <script type="text/javascript" src="js/aula094.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 094 - Transferir conteúdo entre o draggable e o droppable</h1>

        <!--
        <br />

        <p>Informação: <span id="msg"></span></p>

        <hr />

        -->

        <button type="button" id="bt_exibir_codigo">Exibir código HTML</button>
        <button type="button" id="bt_ocultar_codigo">Ocultar código HTML</button>
        <button type="button" id="bt_recarregar">Recarregar</button><br /><br />

        <div id="elementos">
            <fieldset>
                <legend>Elementos de Formulário</legend>
                <div id="input_text" class="box_input_text">
                    <fieldset>
                        <label for="nome">Nome: </label>
                        <input type="text" id="nome1" name="nome" placeholder="Nome" required="required" />
                    </fieldset>                        
                </div>
                <div id="input_email" class="box_input_email">
                    <fieldset>
                        <label for="email">Email: </label>
                        <input type="email" id="email1" name="email" placeholder="Email" required="required" />
                    </fieldset>
                </div>
                <div id="input_password" class="box_input_password">
                    <fieldset>
                        <label for="senha">Senha: </label>
                        <input type="password" id="senha1" name="senha" placeholder="Senha" required="required" />
                    </fieldset>
                </div>
                <div id="input_text_telefone" class="box_input_text_telefone">
                    <fieldset>
                        <label for="telefone">Telefone: </label>
                        <input type="text" name="telefone" id="telefone" required="required"  >
                    </fieldset>
                </div>
                <div id="input_radio" class="box_input_radio">
                    <fieldset>
                        <label for="sexo">Sexo: </label><br /><br />
                        <input type="radio" name="sexo" value="Masculino"> Masculino<br>
                        <input type="radio" name="sexo" value="Feminino"> Feminino<br>
                    </fieldset>
                </div>
                <div id="select" class="box_select" >
                    <fieldset>
                        <label for="estado">Estado: </label>
                        <select id="select1" name="estado" class=”required”>
                            <option value="">Selecione</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </fieldset>
                </div>
                <div id="text_area" class="box_texarea">
                    <fieldset>
                        <label for="mensagem">Digite sua mensagem: </label><br /><br />
                        <textarea id="text_area1" name="mensagem" cols="40" rows="10" placeholder="Mensagem"/></textarea>
                    </fieldset>
                </div>
                <div id="submit" class="box_input_submit">
                    <fieldset>
                        <input type="submit" id="enviar1" name="enviar" value="Enviar" />
                    </fieldset>
                </div>
                <div id="reset" class="box_input_reset">
                    <fieldset>
                        <input type="reset" id="limpar1" name="limpar" value="Limpar" />
                    </fieldset>
                </div>
            </fieldset>
        </div>

        <div id="descarga">
            <fieldset id="fieldset_descarga">
                <legend>Formulário</legend>
                <div id="drop1" class="box_drop2"></div>
            </fieldset>
            <br /> 
        </div>

        <p id="fim"></p>

        <br />

        <div>
            <fieldset id="fieldset_codigo">
                <legend>Código HTML</legend>
                <pre>
                     <div id="drop2"></div>
                </pre>
            </fieldset>
        </div>

        <br />

    </body>
</html>
