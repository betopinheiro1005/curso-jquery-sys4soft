$(document).ready(iniciar);

function iniciar() {

    $("#container").css({"width": "1100px"});
    $("#elementos").css({"float": "left"});
    $("#descarga").css({"float": "right"});
    $("#form").draggable({"cursor": "move", revert: "invalid"});
    $("#input_text").draggable({"cursor": "move", revert: "invalid"});
    $("#input_email").draggable({"cursor": "move", revert: "invalid"});
    $("#input_password").draggable({"cursor": "move", revert: "invalid"});
    $("#select").draggable({"cursor": "move", revert: "invalid"});
    $("#input_text_telefone").draggable({"cursor": "move", revert: "invalid"});
    $("#input_radio").draggable({"cursor": "move", revert: "invalid"});
    $("#text_area").draggable({"cursor": "move", revert: "invalid"});
    $("#submit").draggable({"cursor": "move", revert: "invalid"});
    $("#reset").draggable({"cursor": "move", revert: "invalid"});
    $("#drop1").droppable({tolerance: "intersect", drop: evento_drop});

    $("#drop2").hide();

    var codigo_html = "";

    function evento_drop(event, ui) {
        ui.draggable.hide();
        var drag_html = ui.draggable.html();
        codigo_html += drag_html + "<br />";
        // alert(codigo_html);
        var form1 = "<form name='form1' method='post' action='form1.php' enctype='multipart/form-data' >";
        var result1 = $("#drop1").html(codigo_html).wrapAll(form1);
        var result2 = $("#drop2").text(form1 + codigo_html + "\n</form>");
    }


    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_exibir_codigo").mouseenter(bt_1).mouseleave(bt_leave).click(bt_ativo);

    function bt_1() {
        $("#msg").html("Exibe o código HTML do formulário");
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_ocultar_codigo").mouseenter(bt_2).mouseleave(bt_leave).click(bt_ativo);

    function bt_2() {
        $("#msg").html("Oculta o código HTML do formulário");
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

    $("#bt_exibir_codigo").click(exibir_codigo);
    $("#bt_ocultar_codigo").click(ocultar_codigo);

    function exibir_codigo() {
        $("#drop2").show();
        bt_ativo();
    }

    function ocultar_codigo() {
        $("#drop2").hide();
        bt_ativo();
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").click(limpar);

    function limpar() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }

}



