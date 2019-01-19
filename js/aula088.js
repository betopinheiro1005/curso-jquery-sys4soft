$(document).ready(iniciar);

function iniciar() {

    $("#drag1").draggable({cursor: "move"});

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_arraste1").mouseenter(bt1_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt1_msg() {
        $("#msg").html("Permite arrastar o box horizontalmente, dentro da página");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_arraste2").mouseenter(bt2_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt2_msg() {
        $("#msg").html("Permite arrastar o box verticalmente, dentro da página");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_arraste3").mouseenter(bt3_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt3_msg() {
        $("#msg").html("Permite arrastar o box dentro do contentor");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_arraste4").mouseenter(bt4_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt4_msg() {
        $("#msg").html("Permite arrastar o box horizontalmente dentro do contentor");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_arraste5").mouseenter(bt5_msg).mouseleave(bt_leave).click(bt_ativo);

    function bt5_msg() {
        $("#msg").html("Permite arrastar o box verticalmente dentro do contentor");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    function bt_leave() {
        $("#msg").html("");
    }

    function bt_ativo() {
        $(this).css({"color": "white", "background-color": "green"});
        $(this).siblings().css({"color": "", "background-color": ""});
    }


    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(bt_msg).mouseleave(bt_leave);

    function bt_msg() {
        $("#msg").html("Recarrega a página depois de 1 segundo");
    }


    /* ============================================================================================================ */

    $("#bt_arraste1").click(function () {
        $("#drag1").draggable({ cursor: "move", containment: "", axis: "x"});
    });

    $("#bt_arraste2").click(function () {
        $("#drag1").draggable({ cursor: "move", containment: "", axis: "y"});
    });

    $("#bt_arraste3").click(function () {
        $("#drag1").draggable({ cursor: "move", containment: "#contentor1", axis: "" });
    });

    $("#bt_arraste4").click(function () {
        $("#drag1").draggable({ cursor: "move", containment: "#contentor1", axis: "x"});
    });

    $("#bt_arraste5").click(function () {
        $("#drag1").draggable({ cursor: "move", containment: "#contentor1", axis: "y"});
    });

    $("#bt_recarregar").click(limpar);
    
    function limpar() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }

}
