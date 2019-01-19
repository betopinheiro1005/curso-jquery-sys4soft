$(document).ready(iniciar);

function iniciar() {

    var intervalo = 4000; // tempo em milissegundos
    var tempo = "";
    
    if (intervalo < 1000) {
        tempo = intervalo + " milissegundos";
    } else if(intervalo >= 1000 && intervalo < 2000){
        tempo = (intervalo/1000) + " segundo";
    } else {
        tempo = (intervalo/1000) + " segundos";
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_up").mouseenter(function () {
        $("#msg").html("Efeito blind com direção 'up' - duração: " + tempo);
    });

    $("#bt_up").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_down").mouseenter(function () {
        $("#msg").html("Efeito blind com direção 'down' - duração: " + tempo);
    });

    $("#bt_down").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_horizontal").mouseenter(function () {
        $("#msg").html("Efeito blind com direção 'horizontal' - duração: " + tempo);
    });

    $("#bt_horizontal").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_vertical").mouseenter(function () {
        $("#msg").html("Efeito blind com direção 'vertical' - duração: " + tempo);
    });

    $("#bt_vertical").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_left").mouseenter(function () {
        $("#msg").html("Efeito blind com direção 'left' - duração: " + tempo);
    });

    $("#bt_left").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_right").mouseenter(function () {
        $("#msg").html("Efeito blind com direção 'right' - duração: " + tempo);
    });

    $("#bt_right").mouseleave(function () {
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

    $("#bt_up").click(function(){
        aguarde();
        $("#teste").effect("blind",{direction: "up"}, intervalo, mensagem);
    });

    $("#bt_down").click(function(){
        aguarde();
        $("#teste").effect("blind",{direction: "down"}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_horizontal").click(function(){
        aguarde();
        $("#teste").effect("blind",{direction: "horizontal"}, intervalo, mensagem);
    });

    $("#bt_vertical").click(function(){
        aguarde();
        $("#teste").effect("blind",{direction: "vertical"}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_left").click(function(){
        aguarde();
        $("#teste").effect("blind",{direction: "left"}, intervalo, mensagem);
    });

    $("#bt_right").click(function(){
        aguarde();
        $("#teste").effect("blind",{direction: "right"}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

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
