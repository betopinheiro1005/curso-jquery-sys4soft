$(document).ready(iniciar);

function iniciar() {

    $("#bt_inserir_borda").mouseover(function(){
        $("#msg").html("Insere moldura usando wrap()");
    });

    $("#bt_inserir_borda").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_remover_borda").mouseover(function(){
        $("#msg").html("Remove moldura usando wrapAll()");
    });

    $("#bt_remover_borda").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

//    $("button#inserir_borda").click(function(){
//        $("p").wrap("<div class='primeira'>");
//    });

    $("#bt_inserir_borda").click(function(){
        $("p").wrapAll("<div class='primeira'>");
    });

    $("#bt_remover_borda").click(function(){
        $("p").unwrap();
    });

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}
