$(document).ready(iniciar);

function iniciar() {
    
    $("#msg").html(" ");
    
    
    $("#bt_detach").mouseover(function(){
        $("#msg").html("Remove o primeiro item da lista");
    });

    $("#bt_detach").mouseout(function(){
        $("#msg").html("");
    });



    $("#bt_empty").mouseover(function(){
        $("#msg").html("Torna vazia as tags dos ítens");
    });

    $("#bt_empty").mouseout(function(){
        $("#msg").html("");
    });



    $("#bt_remove").mouseover(function(){
        $("#msg").html("Remove o último item da lista");
    });

    $("#bt_remove").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_detach").click(function(){
        $("li:first").detach();
    });

    $("#bt_empty").click(function(){
        $("li").empty();
    });

    $("#bt_remove").click(function(){
        $("li:last").remove();
    });

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}
