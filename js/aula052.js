$(document).ready(iniciar);

function iniciar() {

    $("#bt_inserir").mouseover(function () {
        $("#msg").html("Insere moldura interna");
    });

    $("#bt_inserir").mouseout(function () {
        $("#msg").html("");
    });


    $("#bt_remover").mouseover(function () {
        $("#msg").html("Remove molduras internas");
    });

    $("#bt_inserir").mouseout(function () {
        $("#msg").html("");
    });


    $("#bt_recarregar").mouseover(function () {
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function () {
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_inserir").click(function () {
        if ($("div").hasClass('primeira')) {
            $("#div1").wrapInner("<div class='segunda'>");
        } else {
            $("div").addClass('#div1');
        }
    });

    $("#bt_remover").click(function () {
        $(".segunda").unwrap();
        $("div").removeClass('segunda');
        $("div").addClass('primeira');
        recarregar();
    });

    $("#bt_recarregar").click(recarregar);

    function recarregar() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }

}
