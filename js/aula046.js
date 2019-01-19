$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        return false;
    });

    /* ============================================================================================================ */

    $("#bt_get").mouseover(function(){
        $("#msg").html("Pega o conteúdo do parágrafo de indice 2: parágrafo 3");
    });

    $("#bt_get").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */



    var elementos = $("p").get();

    $("#bt_get").click(function () {
        console.log(elementos[3]);
        // $("#info").html(elementos[3]);
        $("#info").html($("p").get(2));
    });

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}

