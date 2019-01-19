$(document).ready(iniciar);

function iniciar() {

    var intervalo = 6000; // tempo em milissegundos
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
        $("#msg").html("Animação com slideToggle durante " + tempo);
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

    $("#bt_animar").click(animar);

    function animar() {
            aguarde();
            $("div").slideToggle(intervalo, mensagem);
    }

    function mensagem(){
        $("#info").html("Animação finalizada!").css({"color":"white", "background-color": "blue", "width": "200px", "padding": "10px", "text-align": "center"});
    }
    
    function aguarde(){
        $("#info").html("Aguarde...").css({"color":"white", "background-color": "blue", "width": "200px", "padding": "10px", "text-align": "center"});        
    }

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
