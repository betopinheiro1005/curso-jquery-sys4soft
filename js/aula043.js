$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        alert("Enviado");
    });

    // serialize

    $("#bt_serialize").click(function(){
        $("div#info").text($("form").serialize());
        console.log($("form").serialize());
    });

    // serializeArray

    $("#bt_serializearray").click(function(){
        $("div#info").text($("form").serializeArray());
        var valores = $("form").serializeArray();
        console.log($("form").serializeArray());
        console.log(valores[1]);
    });


}

