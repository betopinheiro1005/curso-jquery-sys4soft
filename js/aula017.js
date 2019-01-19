$(document).ready(iniciar);

function iniciar() {

    function clear() {
        $("*").css('background-color', '');
        $('*').css('color', '');
        $("div p:contains('Este parágrafo estava vazio!')").text('').css('background-color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona os parágrafos que contém o texto 'div 2' */

    $("#div_p_contains_div2").click(function () {
        clear();
        $("div p:contains('div 2')").css('background-color', 'yellow');
    });

    $("#div_p_contains_div2").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos que contém o texto 'div 2'");
    });

    /* Inclui o texto 'Este parágrafo estava vazio!' em um parágrafo vazio dentro de um div */

    $("#div_p_empty").click(function () {
        clear();
        $("div p:empty").text('Este parágrafo estava vazio!').css('background-color', 'yellow');
    });

    $("#div_p_empty").mouseover(function(){
         $("#msg").html("Inclui e seleciona o texto 'Este parágrafo estava vazio!' em um parágrafo vazio dentro de um div");
    });

    /* Seleciona os parágrafos em um div */

    $("#div_has_p").click(function () {
        clear();
        $("div:has(p)").css('background-color', 'yellow');
    });

    $("#div_has_p").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos em um div");
    });

    /* Seleciona o conteúdo de um span */

    $("#span_parent").click(function () {
        clear();
        $("span:parent").css('background-color', 'yellow');
    });

    $("#span_parent").mouseover(function(){
         $("#msg").html("Seleciona o conteúdo de um span");
    });

    /* Limpa toda a formatação */

    $("#limpar").click(function () {
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}



