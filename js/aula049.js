$(document).ready(iniciar);

function iniciar() {

    $("#bt_addclass1").attr('disabled', 'disabled');
    $("#bt_removeclass2").attr('disabled', 'disabled');


    $("#bt_addclass1").mouseover(function () {
        $("#msg").html("Adiciona a classe 'cor1' ao primeiro item da lista");
    });

    $("#bt_addclass1").mouseout(function () {
        $("#msg").html("");
    });

    $("#bt_hasclass1").mouseover(function () {
        $("#msg").html("Verifica se o primeiro elemento da lista possui a classe 'cor1'");
    });

    $("#bt_hasclass1").mouseout(function () {
        $("#msg").html("");
    });

    $("#bt_removeclass1").mouseover(function () {
        $("#msg").html("Remove a classe 'cor1' do primeiro elemento da lista");
    });

    $("#bt_removeclass1").mouseout(function () {
        $("#msg").html("");
    });

    $("#bt_toggleclass1").mouseover(function () {
        $("#msg").html("Insere ou Remove a classe 'cor1' do primeiro elemento da lista");
    });

    $("#bt_toggleclass1").mouseout(function () {
        $("#msg").html("");
    });


    /* ====================================================================================== */


    $("#bt_addclass2").mouseover(function () {
        $("#msg").html("Adiciona as classes 'cor1', 'fundo1' e 'borda1' ao quarto elemento da lista");
    });

    $("#bt_addclass2").mouseout(function () {
        $("#msg").html("");
    });


    $("#bt_removeclass2").mousemove(function () {
        $("#msg").html("Remove as classes 'cor1', 'fundo1' e 'borda1' do quarto elemento da lista");
    });

    $("#bt_removeclass2").mouseout(function () {
        $("#msg").html("");
    });

    /* ====================================================================================== */

    $("#bt_addclass1").click(function () {
        $("#msg").html("");
        // Adiciona a classe 'cor1' ao primeiro elemento da lista
        $("ul li:first").addClass("cor1");
        $("#bt_removeclass1").removeAttr('disabled');
        $(this).attr('disabled', 'disabled');
    });

    $("#bt_removeclass1").click(function () {
        $("#msg").html("");
        // Remove as classe 'cor1' do primeiro elemento da lista
        $("ul li:first").removeClass("cor1");
        $("ul li:first").removeAttr("class");
        $("#bt_addclass1").removeAttr('disabled');
        $(this).attr('disabled', 'disabled');
    });

    $("#bt_hasclass1").click(function () {
        // Verifica o primeiro elemento da lista tem a classe 'cor1'

        var tem_classe = $("ul li:first").hasClass("cor1");

        if (tem_classe)
            alert("O primeiro elemento da lista CONTÉM a classe 'cor1'");
        else
            alert("O primeiro elemento da lista NÃO CONTÉM a classe 'cor1'");
    });

    $("#bt_toggleclass1").click(function () {

        var tem_classe = $("ul li:first").hasClass("cor1");

        $("#msg").html("");
        // Insere ou remove a classe 'cor1' do primeiro elemento da lista
        $("ul li:first").toggleClass("cor1");

        if (tem_classe) {
            $("#bt_addclass1").removeAttr('disabled');
            $("#bt_removeclass1").attr('disabled', 'disabled');
        } else {
            $("#bt_addclass1").attr('disabled', 'disabled');
            $("#bt_removeclass1").removeAttr('disabled');
        }
    });

    /* ====================================================================================== */

    $("#bt_addclass2").click(function () {
        $("#msg").html("");
        // Adiciona as classes 'cor1', 'fundo' e 'borda1' do item de indice 3 da lista
        $("ul li:eq(3)").addClass("cor1 fundo1 borda1");
        $("#bt_removeclass2").removeAttr('disabled');
        $(this).attr('disabled', 'disabled');
    });

    $("#bt_removeclass2").click(function () {
        $("#msg").html("");
        // Remove as classes 'cor1', 'fundo' e 'borda1' do item de indice 3 da lista
        $("ul li:eq(3)").removeClass("cor1 fundo1 borda1");
        $("ul li:eq(3)").removeAttr("class");
        $("#bt_addclass2").removeAttr('disabled');
        $(this).attr('disabled', 'disabled');
    });

}
