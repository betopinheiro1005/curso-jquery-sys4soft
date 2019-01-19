$(document).ready(iniciar);

function iniciar() {

    $("#drag1").draggable({"cursor": "move"});
    $("#drop1").css({"margin-left":"470px"});

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_intersect").mouseenter(bt1_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt1_msg() {
        $("#msg").html("Dispara o evento quando pelo menos 50% do BOX 1 entra no interior do CONTENTOR, em qualquer uma das direções");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_fit").mouseenter(bt2_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt2_msg() {
        $("#msg").html("Dispara o evento quando todo o BOX 1 entra no interior do CONTENTOR");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_pointer").mouseenter(bt3_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt3_msg() {
        $("#msg").html("Dispara o evento quando o ponteiro do mouse que move o BOX 1 entra no interior do CONTENTOR");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_touch").mouseenter(bt4_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt4_msg() {
        $("#msg").html("Dispara o evento quando qualquer parte do BOX 1, por menor que seja, entra no interior do CONTENTOR");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    function bt_leave() {
        $("#msg").html("");
    }

    function bt_ativo() {
        $(this).css({"color": "white", "background-color": "green", "cursor": "pointer"});
        $(this).siblings().css({"color": "", "background-color": "", "cursor": "default"});
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(bt_msg).mouseleave(bt_leave);

    function bt_msg() {
        $("#msg").html("Recarrega a página depois de 1 segundo");
    }

    /* ============================================================================================================ */
    
    $("#bt_intersect").click(function () {
        $("#drop1").droppable( {tolerance: "intersect", drop: evento_drop} );
    });

    $("#bt_fit").click(function () {
        $("#drop1").droppable( {tolerance: "fit", drop: evento_drop} );
    });

    $("#bt_pointer").click(function () {
        $("#drop1").droppable( {tolerance: "pointer", drop: evento_drop} );
    });

    $("#bt_touch").click(function () {
        $("#drop1").droppable( {tolerance: "touch", drop: evento_drop} );
    });
        
    function evento_drop(){
        $("#drop1").html("<p class='msg_contentor'>O BOX 1 foi descarregado!</p>");
        $("#drag1").draggable({"cursor": "move"});
    }

    $("#bt_recarregar").click(limpar);
    
    function limpar() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }

}
