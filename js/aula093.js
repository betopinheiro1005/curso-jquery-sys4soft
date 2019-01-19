$(document).ready(iniciar);

function iniciar() {

    $("#drag1").draggable().css({"cursor": "default"});
    $("#drag2").draggable().css({"cursor": "default", "float":"left"});
    $("#drop1").css({"margin-left":"450px"});
    $("#drop1").droppable( {tolerance: "fit", drop: evento_drop} );

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(bt_msg).mouseleave(bt_leave);

    function bt_msg() {
        $("#msg").html("Recarrega a página depois de 1 segundo");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    function bt_leave() {
        $("#msg").html("");
    }

    
    /* ============================================================================================================ */
    
    function evento_drop(event, ui){
        $("#drop1").html("<p class='msg_contentor'>id : " + ui.draggable.attr('id') +"</p>");
        
    }

    $("#bt_recarregar").click(limpar);

    /* ------------------------------------------------------------------------------------------------------------ */

    function limpar() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }

}
