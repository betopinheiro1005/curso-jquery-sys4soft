$(document).ready(iniciar);

function iniciar() {

    var intervalo = 10000; // tempo em milissegundos
    var tempo = "";
    
    if (intervalo < 1000) {
        tempo = intervalo + " milissegundos";
    } else if(intervalo >= 1000 && intervalo < 2000){
        tempo = (intervalo/1000) + " segundo";
    } else {
        tempo = (intervalo/1000) + " segundos";
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_iniciar").mouseenter(function () {
        $("#msg").html("Inicia a animação");
    });

    $("#bt_iniciar").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_parar").mouseenter(function () {
        $("#msg").html("Interrompe a animação");
    });

    $("#bt_parar").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_continuar").mouseenter(function () {
        $("#msg").html("Continua a animação");
    });

    $("#bt_continuar").mouseleave(function () {
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

    $("#bt_iniciar").removeAttr('disabled'); 
    $("#bt_parar").attr('disabled', 'disabled');
    $("#bt_continuar").attr('disabled', 'disabled');
    
    $("#bt_iniciar").click(iniciar);
    $("#bt_parar").click(parar);
    $("#bt_continuar").click(continuar);

    function iniciar() {
        $("#bt_iniciar").attr('disabled', 'disabled');
        $("#bt_continuar").attr('disabled', 'disabled');
        $("#bt_parar").removeAttr('disabled'); 
        $("#info").html("Aguarde...").css({"color":"white", "background-color": "blue", "width": "300px", "padding": "10px", "text-align": "center"});
        $("div").slideUp(intervalo, mensagem1);
    }

    function mensagem1() {
        $("#info").html("Animação finalizada!").css({"color":"white", "background-color": "blue", "width": "300px", "padding": "10px", "text-align": "center"});
        $("#bt_iniciar").removeAttr('disabled');
        $("#bt_parar").attr('disabled', 'disabled');        
        $("#bt_continuar").attr('disabled', 'disabled');        
 }

    function parar() {
        $("#bt_iniciar").attr('disabled', 'disabled');
        $("#bt_continuar").removeAttr('disabled');
        $("#bt_parar").attr('disabled', 'disabled');
        $("#info").html("Animação interrompida pelo usuário").css({"color": "white", "background-color": "blue", "padding": "15px", "width": "300px", "text-align": "center"});
        $("div").stop();
    }

    function continuar() {
        $("#bt_iniciar").attr('disabled', 'disabled');
        $("#bt_continuar").attr('disabled', 'disabled');
        $("#bt_parar").removeAttr('disabled'); 
        $("#info").html("Continuando a animação...").css({"color": "white", "background-color": "blue", "padding": "15px", "width": "300px", "text-align": "center"});
        $("div").slideUp(intervalo, mensagem2);
    }

    function mensagem2() {
        $("#info").html("Animação finalizada!").css({"color": "white", "background-color": "blue", "padding": "15px", "width": "300px", "text-align": "center"});
        $("#bt_iniciar").attr('disabled', 'disabled');                
        $("#bt_parar").attr('disabled', 'disabled');        
        $("#bt_continuar").attr('disabled', 'disabled');        
 }

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
