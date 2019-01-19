$(document).ready(iniciar);

function iniciar() {

    $("#bt_ativar").mouseenter(bt1_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt1_msg() {
        $("#msg").html("Ativa o draggable do box");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_desativar").mouseenter(bt2_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt2_msg() {
        $("#msg").html("Desativa o draggable do box");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    function bt_leave() {
        $("#msg").html("");
    }

    function bt_ativo() {
        $(this).css({"color": "white", "background-color": "green" });
        $(this).siblings().css({"color": "", "background-color": ""});
    }

    /* ============================================================================================================ */

    $("#bt_ativar").click(function () {
        $("#drag1").mouseenter(cursor1).mouseleave(cursor2).draggable().html("<p>Box arrastável</p>");
    });

    $("#bt_desativar").click(function () {
        $("#drag1").mouseenter(cursor2).draggable("destroy").html("<p>Box não arrastável</p>");
    });

    function cursor1() {
        $("#drag1").css("cursor", "move");
    }

    function cursor2() {
        $("#drag1").css("cursor", "default");
    }

}
