$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $('*').css('background-color', '');
        $('*').css('color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona todos os parágrafos */

    $("#p").click(function(){
        clear();
        $("p").css('background-color','yellow');
    });

    $("#p").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos");
    });

    /* Seleciona o parágrafo com id 'teste' */

    $("#p_id_teste").click(function(){
        clear();
        $("p#teste").css('background-color','yellow');
    });

    $("#p_id_teste").mouseover(function(){
         $("#msg").html("Seleciona o parágrafo com id 'teste'");
    });

    /* Seleciona o parágrafo seguinte ao que contém o id 'teste' */

    $("#p_id_teste_next").click(function(){
        clear();
        $("p#teste").next().css('background-color','yellow');
    });

    $("#p_id_teste_next").mouseover(function(){
         $("#msg").html("Seleciona o parágrafo seguinte ao que contém o id 'teste'");
    });

    /* Seleciona o item seguinte ao de índice 2 dentro de uma lista não ordenada */

    $("#ul_li_2_next").click(function(){
        clear();
        $("ul li:eq(2)").next().css('background-color','yellow');
    });

    $("#ul_li_2_next").mouseover(function(){
         $("#msg").html("Seleciona o item seguinte ao de índice 2 dentro de uma lista não ordenada");
    });

    /* $("ul li:eq(2)").nextAll() */

    $("#ul_li_2_nextall").click(function(){
        clear();
        $("ul li:eq(2)").nextAll().css('background-color','yellow');
    });

    $("#ul_li_2_nextall").mouseover(function(){
         $("#msg").html("Seleciona os itens seguintes ao de índice 2 dentro de uma lista não ordenada");
    });

    /* Seleciona os elementos seguintes ao parágrafo com id 'teste' */

    $("#p_id_teste_nextall").click(function(){
        clear();
        $("p#teste").nextAll().css('background-color','yellow');
    });

    $("#p_id_teste_nextall").mouseover(function(){
         $("#msg").html("Seleciona os elementos seguintes ao parágrafo com id 'teste'");
    });

    /* Seleciona o parágrafo anterior ao que contém o id 'teste' */

    $("#p_id_teste_prev").click(function(){
        clear();
        $("p#teste").prev().css('background-color','yellow');
    });

    $("#p_id_teste_prev").mouseover(function(){
         $("#msg").html("Seleciona o parágrafo anterior ao que contém o id 'teste'");
    });

    /* Seleciona todos os elementos anteriores ao do parágrafo que contém o id 'teste' */

    $("#p_id_teste_prevall").click(function(){
        clear();
        $("p#teste").prevAll().css('background-color','yellow');
    });

    $("#p_id_teste_prevall").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos anteriores ao do parágrafo que contém o id 'teste'");
    });

    /* Seleciona todos os elementos anteriores ao do parágrafo de índice 5 */

    $("#p5_prevall").click(function(){
        clear();
        $("p:eq(5)").prevAll().css('background-color','yellow');
    });

    $("#p5_prevall").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos anteriores ao do parágrafo de índice 5");
    });


    /* Seleciona todos os itens anteriores ao item de índice 2 em uma lista não ordenada */

    $("#li2_prevall").click(function(){
        clear();
        $("li:eq(2)").prevAll().css('background-color','yellow');
    });

    $("#li2_prevall").mouseover(function(){
         $("#msg").html("Seleciona todos os itens anteriores ao item de índice 2 em uma lista não ordenada");
    });

    /* Limpa toda a formatação */

    $("#limpar").click(function () {
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}



