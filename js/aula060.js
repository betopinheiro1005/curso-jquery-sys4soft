$(document).ready(iniciar);

function iniciar() {
    
    $("#bt_prop_marca_desmarca").mouseover(function(){
        $("#msg").html("marca/desmarca a caixa de verificação");
    });

    $("#bt_prop_marca_desmarca").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_prop_marca_desmarca").click(marca_desmarca);

    function exibe_caixa(){
        var estado = $("#check1").prop("checked");
        if(estado){
            $("#info").html("A caixa de verificação está marcada!");
        } else {
            $("#info").html("A caixa de verificação está desmarcada!");
        }
    }

    function marca_desmarca() {
        if($("#check1").prop("checked")){
            $("#check1").prop("checked", false);
        } else {
            $("#check1").prop("checked", true);
        }
        exibe_caixa();
    }

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}
