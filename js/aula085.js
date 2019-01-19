$(document).ready(iniciar);

function iniciar() {

    var distancia = 200;
    var largura = "500px";
    var altura = "150px";

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

    $("#bt_size").mouseenter(function () {
        $("#msg").html("Em " + tempo + " redimensiona o box 1 para as seguintes dimensões: largura = " + largura + " e altura = " + altura);
    });

    $("#bt_size").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_slide_up").mouseenter(function () {
        $("#msg").html("Efeito slide up, distance " + distancia + " durante " + tempo +  " no box 1");
    });

    $("#bt_slide_up").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_slide_down").mouseenter(function () {
        $("#msg").html("Efeito slide down, distance " + distancia + " durante " + tempo + " no box 1");
    });

    $("#bt_slide_down").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_slide_left").mouseenter(function () {
        $("#msg").html("Efeito slide left, distance " + distancia + " durante " + tempo + " no box 1");
    });

    $("#bt_slide_left").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_slide_right").mouseenter(function () {
        $("#msg").html("Efeito slide right, distance " + distancia + " durante " + tempo + " no box 1");
    });

    $("#bt_slide_right").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_transfer_1").mouseenter(function () {
        $("#msg").html("Simula a transferência de estilo especificado na classe 'ui.effects.transfer' do 1º para o 2º box");
    });

    $("#bt_transfer_1").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_transfer_2").mouseenter(function () {
        $("#msg").html("Simula a transferência de estilo especificado na classe 'ui.effects.transfer' do 2º para o 1º box");
    });

    $("#bt_transfer_2").mouseleave(function () {
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

    $("#bt_size").click(function(){
        $("#teste").css({width:"", height:""});
        aguarde();
        $("#teste").effect("size", {to: {width: largura, height: altura}}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_slide_up").click(function(){
        $("#teste").css({width:"", height:""});
        aguarde();
        $("#teste").effect("slide", {distance: distancia, direction: "up"}, intervalo, mensagem);
    });

    $("#bt_slide_down").click(function(){
        $("#teste").css({width:"", height:""});
        aguarde();
        $("#teste").effect("slide", {distance: distancia, direction: "down"}, intervalo, mensagem);
    });

    $("#bt_slide_left").click(function(){
        $("#teste").css({width:"", height:""});
        aguarde();
        $("#teste").effect("slide", {distance: distancia, direction: "left"}, intervalo, mensagem);
    });

    $("#bt_slide_right").click(function(){
        $("#teste").css({width:"", height:""});
        aguarde();
        $("#teste").effect("slide", {distance: distancia, direction: "right"}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_transfer_1").click(function(){
        aguarde();
        $("#teste").effect("transfer", {to: $("#teste2")}, intervalo, mensagem);
    });

    $("#bt_transfer_2").click(function(){
        aguarde();
        $("#teste2").effect("transfer", {to: $("#teste")}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    function mensagem(){
        $("#info").html("Animação finalizada!").css({"color":"white", "background-color": "blue", "width": "200px", "padding": "10px", "text-align": "center"});
    }
    
    function aguarde(){
        $("#info").html("Aguarde...").css({"color":"white", "background-color": "blue", "width": "200px", "padding": "10px", "text-align": "center"});        
    }
    
    $("#bt_recarregar").click(limpar);
    
    function limpar() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }

}
