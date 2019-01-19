$(document).ready(iniciar);

function iniciar() {

    var intervalo = 3500; // tempo em milissegundos
    var tempo = "";
    
    if (intervalo < 1000) {
        tempo = intervalo + " milissegundos";
    } else if(intervalo >= 1000 && intervalo < 2000){
        tempo = (intervalo/1000) + " segundo";
    } else {
        tempo = (intervalo/1000) + " segundos";
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_animar").mouseenter(function () {
        $("#msg").html("Executa a animação durante " + tempo);
    });

    $("#bt_animar").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(function () {
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseleave(function () {
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_animar").click(function(){
        $(this).attr('disabled', 'disabled');
        $("#teste").addClass("box3", intervalo, "easeOutBounce", mensagem);
    });

    function mensagem() {
        alert("A animação terminou!");
    }

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
