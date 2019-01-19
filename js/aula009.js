$(document).ready(iniciar);

function iniciar() {

    function clear() {
        $("*").css('color', '');
        $("*").css('background-color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona todos os parágrafos dentro de um div */

    $("#div_p").click(function () {
        clear();
        $("div p").css('background-color', 'yellow');
    });

    $("#div_p").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos dentro de um div");
    });

    /* Seleciona o conteúdo de um span dentro de um div */

    $("#div_span").click(function () {
        clear();
        $("div span").css('background-color', 'yellow');
    });

    $("#div_span").mouseover(function(){
         $("#msg").html("Seleciona o conteúdo de um span dentro de um div");
    });

    /* Seleciona todos os parágrafos dentro de um div, com excessão do parágrafo com id 'p1' */

    $("#div_p_not_id_p1").click(function () {
        clear();
        $("div p:not(#p1)").css('background-color', 'yellow');
    });

    $("#div_p_not_id_p1").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos dentro de um div, com excessão do parágrafo com id 'p1'");
    });

    /* Seleciona parágrafos dentro um div que possuam a classe 'outra' */

    $("#div_p_class_outra").click(function () {
        clear();
        $("div p.outra").css('background-color', 'yellow');
    });

    $("#div_p_class_outra").mouseover(function(){
         $("#msg").html("Seleciona parágrafos dentro um div que possuam a classe 'outra'");
    });

    /* Seleciona parágrafos demtro de um div que não contenham a classe 'outra' */

    $("#div_p_not_class_outra").click(function () {
        clear();
        $("div p:not(.outra)").css('background-color', 'yellow');
    });

    $("#div_p_not_class_outra").mouseover(function(){
         $("#msg").html("Seleciona parágrafos demtro de um div que não contenham a classe 'outra'");
    });

    /* #limpar */

    $("#limpar").click(function () {
        clear();
    });

    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}



