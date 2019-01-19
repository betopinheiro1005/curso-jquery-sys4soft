$(document).ready(iniciar);

function iniciar() {

    var np1 = 4;
    var np2 = 25;
    var np3 = 64;

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

    $("#bt_clip_vertical").mouseenter(function () {
        $("#msg").html("Efeito clip vertical durante " + tempo);
    });

    $("#bt_clip_vertical").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_clip_horizontal").mouseenter(function () {
        $("#msg").html("Efeito clip horizontal durante " + tempo);
    });

    $("#bt_clip_horizontal").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_drop_up").mouseenter(function () {
        $("#msg").html("Efeito drop up durante " + tempo);
    });

    $("#bt_drop_up").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_drop_down").mouseenter(function () {
        $("#msg").html("Efeito drop down durante " + tempo);
    });

    $("#bt_drop_down").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_drop_left").mouseenter(function () {
        $("#msg").html("Efeito drop left durante " + tempo);
    });

    $("#bt_drop_left").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_drop_right").mouseenter(function () {
        $("#msg").html("Efeito drop right durante " + tempo);
    });

    $("#bt_drop_right").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_explode1").mouseenter(function () {
        $("#msg").html("Efeito explode com " + np1 + " pieces durante " + tempo);
    });

    $("#bt_explode1").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_explode2").mouseenter(function () {
        $("#msg").html("Efeito explode com " + np2 + " pieces durante " + tempo);
    });

    $("#bt_explode2").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_explode3").mouseenter(function () {
        $("#msg").html("Efeito explode com " + np3 + " pieces durante " + tempo);
    });

    $("#bt_explode3").mouseleave(function () {
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

    $("#bt_clip_vertical").click(function(){
        aguarde();
        $("#teste").effect("clip",{direction: "vertical"}, intervalo, mensagem);
    });

    $("#bt_clip_horizontal").click(function(){
        aguarde();
        $("#teste").effect("clip",{direction: "horizontal"}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_drop_up").click(function(){
        aguarde();
        $("#teste").effect("drop",{direction: "up"}, intervalo, mensagem);
    });

    $("#bt_drop_down").click(function(){
        aguarde();
        $("#teste").effect("drop",{direction: "down"}, intervalo, mensagem);
    });

    $("#bt_drop_left").click(function(){
        aguarde();
        $("#teste").effect("drop",{direction: "left"}, intervalo, mensagem);
    });

    $("#bt_drop_right").click(function(){
        aguarde();
        $("#teste").effect("drop",{direction: "right"}, intervalo, mensagem);
    });
    
    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_explode1").click(function(){
        aguarde();
        $("#teste").effect("explode",{pieces: np1}, intervalo, mensagem);
    });

    $("#bt_explode2").click(function(){
        aguarde();
        $("#teste").effect("explode",{pieces: np2}, intervalo, mensagem);
    });

    $("#bt_explode3").click(function(){
        aguarde();
        $("#teste").effect("explode",{pieces: np3}, intervalo, mensagem);
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
