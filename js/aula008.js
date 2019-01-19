$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $("*").css('color', '');
        $("*").css('background-color','');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona o primeiro item de uma lista não ordenada */

    $("#ul_li_first").click(function(){
        clear();
        $("ul li:first").css('background-color','yellow');
    });

    $("#ul_li_first").mouseover(function(){
         $("#msg").html("Seleciona o primeiro item de uma lista não ordenada");
    });

    /* Seleciona o item de índice 2 de uma lista não ordenada */

    $("#ul_li_2").click(function(){
        clear();
        $("ul li:eq(2)").css('background-color','yellow');
    });

    $("#ul_li_2").mouseover(function(){
         $("#msg").html("Seleciona o item de índice 2 de uma lista não ordenada");
    });

    /* Seleciona o parágrafo de índice 2 de um div */

    $("#div_p_2").click(function(){
        clear();
        $("div p:eq(2)").css('background-color','yellow');
    });

    $("#div_p_2").mouseover(function(){
         $("#msg").html("Seleciona o parágrafo de índice 2 de um div");
    });

    /* Seleciona os itens de índice maior que 1 de uma lista não ordenada */
    
    $("#ul_li_gt_1").click(function(){
        clear();
        $("ul li:gt(1)").css('background-color','yellow');
    });

    $("#ul_li_gt_1").mouseover(function(){
         $("#msg").html("Seleciona os itens de índice maior que 1 de uma lista não ordenada");
    });

    /* Seleciona os itens de índice menor que 4 de uma lista não ordenada */    
    
    $("#ul_li_lt_4").click(function(){
        clear();
        $("ul li:lt(4)").css('background-color','yellow');
    });

    $("#ul_li_lt_4").mouseover(function(){
         $("#msg").html("Seleciona os itens de índice menor que 4 de uma lista não ordenada");
    });

    /* Limpa toda a formatação */

    $("#limpar").click(function(){
        clear();
    });

    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}
