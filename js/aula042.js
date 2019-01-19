$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        alert("Enviado");
    });

    // Evento change

    $("input:text[name='nome']").change(function(){
        $("input:text[name='email']").val($(this).val());
    });

    // select
    
    $("input:text").select(function(){
        var sel = $(this).val();
        $("div#info").html("Texto selecionado: " + sel);
    });

}

