$(document).ready(iniciar);

function iniciar() {

    $("#drag1").draggable().css("cursor", "default");
    $("#drop1").css({"margin-left":"450px"});
    
    $("#drop1").droppable( {drop: evento_drop} );
        
    function evento_drop(){
        $("#drop1").html("<p class='msg_contentor'>O BOX 1 foi descarregado!</p>");
    }

}
