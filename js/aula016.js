$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $('*').css('background-color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona todos os itens de uma lista não ordenada */

    $("#ul_li").click(function(){
        clear();
        $("ul li").css('background-color','yellow');
    });

    $("#ul_li").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de uma lista não ordenada");
    });

    /* Seleciona o primeiro item de uma lista não ordenada */

    $("#ul_li_first_child").click(function(){
        clear();
        $("ul li:first-child").css('background-color','yellow');
    });

    $("#ul_li_first_child").mouseover(function(){
         $("#msg").html("Seleciona o primeiro item de uma lista não ordenada");
    });

    /* Seleciona o primeiro parágrafo de um div */

    $("#div_p_first_child").click(function(){
        clear();
        $("div p:first-child").css('background-color','yellow');
    });

    $("#div_p_first_child").mouseover(function(){
         $("#msg").html("Seleciona o primeiro parágrafo de um div");
    });


    /* Seleciona o último parágrafo de um div */

    $("#div_p_last_child").click(function(){
        clear();
        $("div p:last-child").css('background-color','yellow');
    });

    $("#div_p_last_child").mouseover(function(){
         $("#msg").html("Seleciona o último parágrafo de um div");
    });

    /* Seleciona o item 1 de uma lista não ordenada */

    $("#ul_li_nth_child_1").click(function(){
        clear();
        $("ul li:nth-child(1)").css('background-color','yellow');
    });

    $("#ul_li_nth_child_1").mouseover(function(){
         $("#msg").html("Seleciona o item 1 de uma lista não ordenada");
    });

    /* Seleciona apenas o parágrafo de um div que contém um único elemento */

    $("#div_p_only_child").click(function(){
        clear();
        $("div p:only-child").css('background-color','yellow');
    });

    $("#div_p_only_child").mouseover(function(){
         $("#msg").html("Seleciona apenas o parágrafo de um div que contém um único elemento");
    });

    /* Limpa toda a formatação */

    $("#limpar").click(function () {
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}



