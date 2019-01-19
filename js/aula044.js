$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        alert("Enviado");
    });

    $("#bt_remover").hide();

    // Atribuição de valores a um elemento HTML

    $("#bt_armazenar").click(function () {
        $("#bt_armazenar").hide();
        $("#bt_remover").show();

        $("div#exibe_dados1").html("");
        $("div#exibe_dados2").html("");
        $("div#info").data("v1", 100).data("v2", 200);
        alert("Valores armazenados");
    });

    // Apresentar os valores atribuídos

    $("#bt_apresentar").click(function () {
        if (($("div#info").data("v1") == null) && $("div#info").data("v2") == null) {
            alert("Não há valores armazenados");
        } else {
            console.clear();
            $("div#exibe_dados1").html($("div#info").data("v1"));
            $("div#exibe_dados2").html($("div#info").data("v2"));
            console.log($("div#info").data("v1"));
            console.log($("div#info").data("v2"));
        }
    });

    $("#bt_remover").click(remove_valores);

    function remove_valores() {
        $("#bt_remover").hide();
        $("#bt_armazenar").show();

        console.clear();
        $("div#info").removeData("v1");
        $("div#info").removeData("v2");

        $("div#exibe_dados1").html("");
        $("div#exibe_dados2").html("");

        alert("Valores removidos");
    }

}

