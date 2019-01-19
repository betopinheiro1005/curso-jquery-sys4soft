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

    $("#bt_animar").mouseover(function () {
        $("#msg").html("Animação com fadeOut e CallBack durante " + tempo);
    });

    $("#bt_animar").mouseout(function () {
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

    $("#bt_animar").click(animar1);

    function animar1() {
        aguarde();
        $(this).attr('disabled', 'disabled');
        $("#animar1").fadeOut(2000, animar2);
    }

    function animar2() {
        $("#animar2").fadeOut(2000, animar3);
    }

    function animar3() {
        $("#animar3").fadeOut(2000, mensagem);
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
