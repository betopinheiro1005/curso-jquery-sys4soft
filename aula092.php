<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 092</title>
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/jquery-ui.js"></script>
        <script type="text/javascript" src="js/aula092.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 092 - Definir diferentes tipos de tolerância ao Drop</h1>

        <button type="button" id="bt_intersect">tolerance: "intersect"</button>
        <button type="button" id="bt_fit">tolerance: "fit" </button>
        <button type="button" id="bt_pointer">tolerance: "pointer"</button>
        <button type="button" id="bt_touch">tolerance: "touch" </button>
        <button type="button" id="bt_recarregar">Recarregar</button>

        <hr />

        Informação: <span id="msg" class="cor_msg"></span>

        <hr />
        
        <div id="drag1" class="box_drag1">BOX 1 <br />Arraste</div>
        <div id="drop1" class="box_drop1"><strong>CONTENTOR<br />Solte aqui o box 1</strong></div>

        <br >
        
    </body>
</html>
