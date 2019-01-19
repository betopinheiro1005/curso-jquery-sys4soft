$(document).ready(iniciar);

function iniciar() {
    
    $("#bt_opcao1").mouseover(function(){
        $("#msg").html("Seleciona a opção 1");
    });

    $("#bt_opcao1").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_opcao2").mouseover(function(){
        $("#msg").html("Seleciona a opção 2");
    });

    $("#bt_opcao2").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_opcao3").mouseover(function(){
        $("#msg").html("Seleciona a opção 3");
    });

    $("#bt_opcao3").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_opcao1").click(function(){
        $("#opcao1").prop("checked", true);
        $("#info").html("Opção 1 selecionada");
    });

    $("#bt_opcao2").click(function(){
        $("#opcao2").prop("checked", true);
        $("#info").html("Opção 2 selecionada");
    });

    $("#bt_opcao3").click(function(){
        $("#opcao3").prop("checked", true);
        $("#info").html("Opção 3 selecionada");
    });

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}
