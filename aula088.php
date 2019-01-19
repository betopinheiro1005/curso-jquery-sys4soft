<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Curso jQuery - Aula 088</title>
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <link rel="stylesheet" href="css/main.css" />
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/jquery-ui.js"></script>
        <script type="text/javascript" src="js/aula088.js"></script>
    </head>
    <body id="container">

        <h1 class="aula">Aula 088 - Condicionar o movimento Draggable: Axis e Containment</h1>

        <button type="button" id="bt_arraste1">Horizontal, na página</button>
        <button type="button" id="bt_arraste2">Vertical, na página</button>
        <button type="button" id="bt_arraste3">No contentor</button>
        <button type="button" id="bt_arraste4">Horizontal, no contentor</button>
        <button type="button" id="bt_arraste5">Vertical, no contentor</button>
        <button type="button" id="bt_recarregar">Recarregar</button>
        
        <hr />

        Informação: <span id="msg" class="cor_msg"></span>

        <hr />

        <div id="contentor1" class="contentor">
            <div id="drag1" class="box_drag1">
                <p></p>
            </div>
        </div>

    </body>
</html>
