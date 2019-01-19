$(document).ready(iniciar);

function iniciar() {

    cor1 = "green";
    cor2 = "red";
    perc1 = 150;
    perc2 = 50;

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

    $("#bt_toggle_fade").mouseenter(function () {
        $("#msg").html("Efeito toogle fade - duração: " + tempo);
    });

    $("#bt_toogle_fade").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_fold_horizontal").mouseenter(function () {
        $("#msg").html("Efeito fold horizontal - duração: " + tempo);
    });

    $("#bt_fold_horizontal").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_fold_vertical").mouseenter(function () {
        $("#msg").html("Efeito fold vertical - duração: " + tempo);
    });

    $("#bt_fold_vertical").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_hide_drop_up").mouseenter(function () {
        $("#msg").html("Esconde o box após o efeito drop up - duração: " + tempo);
    });

    $("#bt_hide_drop_up").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_hide_drop_right").mouseenter(function () {
        $("#msg").html("Esconde o box após o efeito drop right - duração: " + tempo);
    });

    $("#bt_hide_drop_right").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_toggle_highlight_1").mouseenter(function () {
        $("#msg").html("Efeito toggle highlight com cor " + cor1 +  " - duração: " + tempo);
    });

    $("#bt_toggle_highlight_1").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_toggle_highlight_2").mouseenter(function () {
        $("#msg").html("Efeito toggle highlight com cor " + cor2 + " - duração: " + tempo);
    });

    $("#bt_toggle_highlight_2").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_puff_1").mouseenter(function () {
        $("#msg").html("Efeito puff com " + perc1 + "% - duração: " + tempo);
    });

    $("#bt_puff_1").mouseleave(function () {
        $("#msg").html("");
    });
    
    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_puff_2").mouseenter(function () {
        $("#msg").html("Efeito puff com " + perc2 + "% - duração: " + tempo);
    });

    $("#bt_puff_2").mouseleave(function () {
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

    $("#bt_toggle_fade").click(function(){
        $("#teste").show();
        aguarde();
        $("#teste").toggle("fade", intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_fold_horizontal").click(function(){
        $("#teste").show();
        aguarde();
        $("#teste").effect("fold",{size: 150, horizFirst: true}, intervalo, mensagem);
    });

    $("#bt_fold_vertical").click(function(){
        $("#teste").show();
        aguarde();        
        $("#teste").effect("fold",{size: 150, horizFirst: false}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_hide_drop_right").click(function(){
        $("#teste").show();
        aguarde();
        $("#teste").hide("drop",{direction: "right"}, intervalo, mensagem);
    });
    
    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_toggle_highlight_1").click(function(){
        $("#teste").show();
        aguarde();
        $("#teste").toggle("highlight",{color: cor1}, intervalo, mensagem);
    });

    $("#bt_toggle_highlight_2").click(function(){
        $("#teste").show();
        aguarde();
        $("#teste").toggle("highlight",{color: cor2}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_puff_1").click(function(){
        $("#teste").show();
        aguarde();
        $("#teste").effect("puff",{percent: perc1}, intervalo, mensagem);
    });

    $("#bt_puff_2").click(function(){
        $("#teste").show();
        aguarde();
        $("#teste").effect("puff",{percent: perc2}, intervalo, mensagem);
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
