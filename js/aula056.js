$(document).ready(iniciar);

function iniciar() {
    
    $("#bt_before").mouseover(function(){
        $("#msg").html("Insere um item antes do primeiro item da lista");
    });

    $("#bt_before").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_insertbefore").mouseover(function(){
        $("#msg").html("Insere um parágrafo antes da lista");
    });

    $("#bt_insertbefore").mouseout(function(){
        $("#msg").html("");
    });

    $("#bt_after").mouseover(function(){
        $("#msg").html("Insere um item depois do último item da lista");
    });

    $("#bt_after").mouseout(function(){
        $("#msg").html("");
    });

    $("#bt_insertafter").mouseover(function(){
        $("#msg").html("Insere um parágrafo depois da lista");
    });

    $("#bt_insertafter").mouseout(function(){
        $("#msg").html("");
    });

    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_before").click(function(){
        $("li:first").before("<li>Novo item</li>");
    });

    $("#bt_insertbefore").click(function(){
        $("<p>Lista não ordenada</p>").insertBefore("ul");
    });

    $("#bt_after").click(function(){
        $("li:last").after("<li>Novo item</li>");
    });

    $("#bt_insertafter").click(function(){
        $("<p>Lista de itens</p>").insertAfter("ul");
    });


    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}
