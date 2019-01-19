$(document).ready(iniciar);

function iniciar() {
    
   
    $("#bt_replacewith").mouseover(function(){
        $("#msg").html("Substitui o primeiro parágrafo por um título");
    });

    $("#bt_replacewith").mouseout(function(){
        $("#msg").html("");
    });



    $("#bt_replaceall").mouseover(function(){
        $("#msg").html("Altera o texto de todos os parágrafos");
    });

    $("#bt_replaceall").mouseout(function(){
        $("#msg").html("");
    });



    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_replacewith").click(function(){
        $("p:first").replaceWith("<h2>Título</h2>");
    });

    $("#bt_replaceall").click(function(){
        $("<p>Parágrafo</p>").replaceAll("p");
    });

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}
