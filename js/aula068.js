$(document).ready(iniciar);

function iniciar() {

    var intervalo = 5000; // tempo em milissegundos
    var tempo = "";
    
    if (intervalo < 1000) {
        tempo = intervalo + " milissegundos";
    } else if(intervalo >= 1000 && intervalo < 2000){
        tempo = (intervalo/1000) + " segundo";
    } else {
        tempo = (intervalo/1000) + " segundos";
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#animar1").hide();

    $("#bt_fadein").mouseover(function () {
        $("#msg").html("Animação com fadeIn durante " + tempo);
    });

    $("#bt_fadein").mouseout(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseover(function () {
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function () {
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_fadein").click(animar);

    function animar() {
        aguarde();
        $(this).attr('disabled', 'disabled');
        $("#animar1").fadeIn(intervalo, mensagem);
    }


    function aguarde(){
        $("#info").html("Aguarde...").css({"color":"white", "background-color": "blue", "width": "200px", "padding": "10px", "text-align": "center"});        
    }

    function mensagem() {
        $("#info").html("Animação finalizada!").css({"color": "white", "background-color": "blue", "padding": "15px", "width": "200px", "text-align": "center"});
    }

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
