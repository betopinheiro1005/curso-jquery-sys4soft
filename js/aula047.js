$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        return false;
    });

    $("#bt_remover").hide();

    // Atribuição de valores a um elemento HTML (contentor)

    $("#bt_adicionar").click(add_valores);

    // Apresentar no console, os valores atribuídos

    $("#bt_apresentar").click(exibe_valores);

    // Remover valores atribuídos

    $("#bt_remover").click(remove_valores);
}


function add_valores() {
    console.clear();
    $("#bt_adicionar").hide();
    $("#bt_remover").show();
    $("#contentor").data("valor1", 100).data("valor2", 200);
    // exibe_valores();
    alert("Valores armazenados");
}

function exibe_valores() {
    console.clear();
    if ($("#contentor").data("valor1")) {
        console.log($("#contentor").data("valor1"));
        $("div#exibe_dados1").html($("#contentor").data("valor1"));
    } else {
        $("div#exibe_dados1").html("");
    }
    if ($("#contentor").data("valor2")) {
        console.log($("#contentor").data("valor2"));
        $("div#exibe_dados2").html($("#contentor").data("valor2"));
    } else {
        $("div#exibe_dados2").html("");
    }
}

function remove_valores() {
        $("#bt_remover").hide();
        $("#bt_adicionar").show();
        console.clear();
        $("#contentor").removeData("valor1");
        $("#contentor").removeData("valor2");

        $("div#exibe_dados1").html("");
        $("div#exibe_dados2").html("");

    // exibe_valores();
    
    alert("Valores removidos");
}
