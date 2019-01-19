$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        return false;
    });

    $("input:text").bind("keypress",function(e){
       $("#p1").html("Código ASCII da tecla pressionada: " + e.which);
    });

    $("input:text").bind("mousedown",function(e){
        var bt = "";
        if(e.which == 1){
           bt = "botão esquerdo do mouse";
       } else if (e.which == 2) {
           bt = "botão central do mouse";
       } else if (e.which == 3) {
           bt = "botão direito do mouse";
       }
       $("#p2").html("Mouse button: " + e.which + " (" + bt + ")").fadeIn("fast").fadeOut(3000);
    });


}


