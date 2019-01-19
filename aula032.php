<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 032</title>
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/aula032.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 032 - Adicionar vários eventos a Bind e alusão ao objeto Event</h1>

        <br />
        
        <form id="form1">
            <input type="text" name="nome" placeholder="Nome" value="" autocomplete="off"><br />
            <input type="text" name="email" placeholder="Email" value="" autocomplete="off"><br />
            <input type="password" name="senha" placeholder="Senha"><br /><br />
            <label>Sexo:</label>
            <select name="sexo">
                <option>Masculino</option>
                <option>Feminino</option>
            </select><br /><br />
            <textarea name="mensagem" cols="60" rows="10" placeholder="Digite a sua mensagem"></textarea><br />
            <input type="submit" name="enviar" value="Enviar"><br />
        </form>

        <p id="info"></p> 
        
    </body>
</html>
