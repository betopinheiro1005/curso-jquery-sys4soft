$(document).ready(iniciar);

function iniciar() {

    $("#bt_inserir1").mouseover(function(){
        $("#msg").html("Insere um parágrafo no final da div 1");
    });

    $("#bt_inserir1").mouseout(function(){
        $("#msg").html("");
    });
    

    $("#bt_inserir2").mouseover(function(){
        $("#msg").text("Insere um parágro no final da div 2");
    });

    $("#bt_inserir2").mouseout(function(){
        $("#msg").html("");
    });

    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });
    
    /* ============================================================================================================ */
    
    
    var x = 1;
    var y = 1;

    // append

    $("#bt_inserir1").click(function(){
        x++;
        $("#div1").append("<p>Parágrafo " + x + "</p>");
    });

    // appendTo

    $("#bt_inserir2").click(function(){
        y++;
        $("<p>Parágrafo " + y + "</p>").appendTo("#div2");
    });

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });
    

}
