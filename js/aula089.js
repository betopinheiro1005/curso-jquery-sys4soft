$(document).ready(iniciar);

function iniciar() {

    $("#drag1").draggable({cursor: "default"});    
    
    var tipo_cursor = "move";
    var pos_x = 10;
    var pos_y = 10;

    var intervalo = 300; // tempo em milissegundos
    var tempo = "";
    
    if (intervalo < 1000) {
        tempo = intervalo + " milissegundos";
    } else if(intervalo >= 1000 && intervalo < 2000){
        tempo = (intervalo/1000) + " segundo";
    } else {
        tempo = (intervalo/1000) + " segundos";
    }


    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_cursor").mouseenter(bt1_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt1_msg() {
        $("#msg").html("Ao arrastar o box: cursor do tipo '" + tipo_cursor + "' posicionado no interior do box em x=" + pos_x + " e y=" +  pos_y + " com delay de " + tempo);
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(bt2_msg).mouseleave(bt_leave);

    function bt2_msg() {
        $("#msg").html("Recarrega a página depois de 1 segundo");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    function bt_leave() {
        $("#msg").html("");
    }

    function bt_ativo() {
        $(this).css({"color": "white", "background-color": "green"});
        $(this).siblings().css({"color": "", "background-color": ""});
    }

    /* ============================================================================================================ */

    $("#bt_cursor").click(function () {
        $("#drag1").draggable( { cursor: "move", cursorAt: {top:pos_y, left:pos_x}, delay: intervalo } );
    });

    $("#bt_recarregar").click(limpar);
    
    function limpar() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }
}
