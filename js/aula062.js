$(document).ready(iniciar);

function iniciar() {

    $("#bt_selecao").mouseover(function () {
        $("#msg").html("Exibe a opção selecionada");
    });

    $("#bt_selecao").mouseout(function () {
        $("#msg").html("");
    });


    $("#bt_recarregar").mouseover(function () {
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function () {
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_selecao").click(function () {
        var opcao_selecionada = $("#caixa_selecao").val();
        if (opcao_selecionada == "Selecione uma opção") {
            $("#info").html("Você não selecionou uma opção!");
        } else {
            $("#info").html("Opção selecionada: " + opcao_selecionada);
        }
    });

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
