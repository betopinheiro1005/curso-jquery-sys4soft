$(document).ready(iniciar);

function iniciar() {
    
    var distancia = 50;
    var grade_x = 50;
    var grade_y = 50;
    var tipo_helper = "clone";
    var opacidade = 0.4;
    var revert_true = "invalid";
    var revert_false = "valid";

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_distance").mouseenter(bt1_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt1_msg() {
        $("#msg").html("distance = " + distancia + "px para iniciar o arraste do box");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_grid").mouseenter(bt2_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt2_msg() {
        $("#msg").html("Movimento de arraste em grade de " + grade_x + " x " + grade_y);
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_helper").mouseenter(bt3_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt3_msg() {
        $("#msg").html("helper tipo '" + tipo_helper + "': cria um clone arrastável transparente (opacidade = " + opacidade + ") que ao ser solto desaparece");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_revert").mouseenter(bt4_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt4_msg() {
        $("#msg").html("Arrastando o box, se soltá-lo fora do contentor, ele retorna a posição inicial");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(bt_msg).mouseleave(bt_leave);

    function bt_msg() {
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

    $("#div_arrastavel").draggable().css("cursor", "default");
    $("#contentor1").css({"float":"right", width:"400px", height:"300px"});

    $("#bt_distance").click(function () {
        iniciar();
        $("#div_arrastavel").draggable( { distance: distancia } );
    });

    $("#bt_grid").click(function () {
        iniciar();
        $("#div_arrastavel").draggable( { grid: [grade_x, grade_y] } );
    });

    $("#bt_helper").click(function () {
        iniciar();
        $("#div_arrastavel").draggable( { helper: tipo_helper, opacity: opacidade } );
    });

    $("#bt_revert").click(function () {
        iniciar();
        $("#contentor1").droppable();
        $("#div_arrastavel").draggable( { revert: revert_true, opacity: opacidade } );
    });

    function iniciar(){
        // $("#contentor1").droppable("destroy");
        $("#div_arrastavel").draggable( { distance: 0, helper: "", grid: "", revert: "", opacity: "" } );
    }

    $("#bt_recarregar").click(limpar);
    
    function limpar() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }
}
