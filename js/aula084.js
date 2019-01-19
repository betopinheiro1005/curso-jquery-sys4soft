$(document).ready(iniciar);

function iniciar() {

    $("#teste2").hide();

    distancia = 120;
    num_vezes = 10;

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

    $("#bt_pulsate").mouseenter(function () {
        $("#msg").html("Efeito pulsate durante " + tempo);
    });

    $("#bt_pulsate").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_toggle_scale").mouseenter(function () {
        $("#msg").html("Efeito toggle scale durante " + tempo);
    });

    $("#bt_toggle_scale").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_toggle_scale_2").mouseenter(function () {
        $("#msg").html("O box escondido é exibido. Em seguida ocorre um efeito scale durante " + tempo);
    });

    $("#bt_toggle_scale_2").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_toggle_scale_center").mouseenter(function () {
        $("#msg").html("Efeito toggle scale center durante " + tempo);
    });

    $("#bt_toggle_scale_center").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_shake").mouseenter(function () {
        $("#msg").html("Efeito shake com o parágrafo " + num_vezes + " vezes durante " + tempo);
    });

    $("#bt_shake").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_shake_up").mouseenter(function () {
        $("#msg").html("Efeito shake up, distance " + distancia + " irá ocorrer " + num_vezes + " vezes com o box durante " + tempo);
    });

    $("#bt_shake_up").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_shake_horizontal").mouseenter(function () {
        $("#msg").html("Efeito shake horizontal, distance " + distancia + " irá ocorrer " + num_vezes + " vezes com o box durante " + tempo);
    });

    $("#bt_shake_horizontal").mouseleave(function () {
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

    $("#bt_pulsate").click(function(){
        aguarde();
        $("#teste").effect("pulsate", {times: 8}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_toggle_scale").click(function(){
        aguarde();
        $("#teste").toggle("scale", intervalo, mensagem);
    });

    $("#bt_toggle_scale_2").click(function(){
        aguarde();
        $("#teste2").show().toggle("scale", intervalo, mensagem);
    });

    $("#bt_toggle_scale_center").click(function(){
        aguarde();
        $("#teste").toggle("scale",{origin: "center"}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_shake").click(function(){
        aguarde();
        $("#paragrafo_shake").effect("shake", {times: num_vezes}, intervalo, mensagem);
    });

     $("#bt_shake_up").click(function(){
        aguarde();
         $("#teste").show(); 
        $("#teste").effect("shake",{direction: "up", distance: distancia, times: num_vezes}, intervalo, mensagem);
    });

     $("#bt_shake_horizontal").click(function(){
        aguarde();
        $("#teste").show(); 
        $("#teste").effect("shake",{direction: "horizontal", distance: distancia, times: num_vezes}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    function mensagem(){
        $("#info").html("Animação finalizada!").css({"color":"white", "background-color": "blue", "width": "200px", "padding": "10px", "text-align": "center"});
        $("#teste2").hide();

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
