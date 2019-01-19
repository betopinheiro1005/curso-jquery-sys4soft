$(document).ready(iniciar);

function iniciar() {
    
    $("#bt_inserir1").mouseover(function(){
        $("#msg").html("É inserido um parágrafo no início da div 'primeira'");
    });

    $("#bt_inserir1").mouseout(function(){
        $("#msg").html("");
    });
    

    $("#bt_inserir2").mouseover(function(){
        $("#msg").text("É inserido um parágro no início da div 'segunda'");
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
        $("#div1").prepend("<p>Parágrafo " + x + "</p>");
    });

    // appendTo

    $("#bt_inserir2").click(function(){
        y++;
        $("<p>Parágrafo " + y + "</p>").prependTo("#div2");
    });

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}
