$(document).ready(iniciar);

function iniciar() {

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_resizable").mouseenter(bt_1).mouseleave(bt_leave).click(bt_ativo);

    function bt_1() {
        $("#msg").html("Torna o BOX 1 redimensionável");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_resizable_animate").mouseenter(bt_2).mouseleave(bt_leave).click(bt_ativo);

    function bt_2() {
        $("#msg").html("Torna o BOX 1 redimensionável com efeito 'animate'");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_resizable_containment").mouseenter(bt_3).mouseleave(bt_leave).click(bt_ativo);

    function bt_3() {
        $("#msg").html("Torna o BOX 1 redimensionável dentro dos limites do contentor");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(bt_msg).mouseleave(bt_leave);

    function bt_msg() {
        $("#msg").html("Recarrega a página depois de 1 segundo");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    function bt_ativo() {
        $(this).css({"color": "white", "background-color": "green"});
        $(this).siblings().css({"color": "", "background-color": ""});
    }

    function bt_leave() {
        $("#msg").html("");
    }

    /* ============================================================================================================ */

    $("#bt_resizable").click(resizable_default);
    $("#bt_resizable_animate").click(resizable_animate);
    $("#bt_resizable_containment").click(resizable_containment);

    function resizable_default() {
        $("#box1").resizable({animate: false, containment: ""});  // padrão
    }

    function resizable_animate() {
        resizable_default();
        $("#box1").resizable({animate: true, containment: ""});
    }

    function resizable_containment() {
        resizable_default();
        $("#box1").resizable({animate: false, containment: "parent"});
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").click(limpar);

    function limpar() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }

}



