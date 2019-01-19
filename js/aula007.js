$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $("*").css('color', '');
        $("*").css('background-color','');
        $("div p:eq(0)").html("Texto de um parágrafo dentro de um div 1").css('background-color','');
        $("div p:eq(1)").html("Texto de um parágrafo dentro de um div 2").css('background-color','');
        $("div p:eq(2)").html("Texto de um parágrafo dentro de um div 3").css('background-color','');
        $("div p:eq(3)").html("Texto de um parágrafo dentro de um div 4").css('background-color','');
        $("div p:eq(4)").html("Texto de um parágrafo dentro de um div 5").css('background-color','');
        $("div p:eq(5)").html("Texto de um parágrafo dentro de um div 6").css('background-color','');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona o primeiro item de uma lista não ordenada */

    $("#ul_li_first").click(function(){
        clear();
        $("ul li:first").css('background-color','rgb(200,255,200)');
    });

    $("#ul_li_first").mouseover(function(){
         $("#msg").html("Seleciona o primeiro item de uma lista não ordenada");
    });

    /* Seleciona o último item de uma lista não ordenada */

    $("#ul_li_last").click(function(){
        clear();
        $("ul li:last").css('background-color','rgb(200,255,200)');
    });

    $("#ul_li_last").mouseover(function(){
         $("#msg").html("Seleciona o último item de uma lista não ordenada");
    });
    
    /* ol li:first */

    $("#ol_li_first").click(function(){
        clear();
        $("ol li:first").css('background-color','rgb(200,255,200)');
    });

    $("#ol_li_first").mouseover(function(){
         $("#msg").html("Seleciona o primeiro item de uma lista ordenada");
    });

    /* Seleciona o último item de uma lista ordenada */

    $("#ol_li_last").click(function(){
        clear();
        $("ol li:last").css('background-color','rgb(200,255,200)');
    });

    $("#ol_li_last").mouseover(function(){
         $("#msg").html("Seleciona o último item de uma lista ordenada");
    });
    
    /* Seleciona os itens pares de uma lista ordenada */

    $("#ul_li_even").click(function(){
        clear();
        $("ul li:even").css('background-color','rgb(200,255,200)');
    });

    $("#ul_li_even").mouseover(function(){
         $("#msg").html("Seleciona os itens pares de uma lista não ordenada");
    });

    /* Seleciona os itens ímpares de uma lista não ordenada */
    
    $("#ul_li_odd").click(function(){
        clear();
        $("ul li:odd").css('background-color','rgb(200,255,200)');
    });

    $("#ul_li_odd").mouseover(function(){
         $("#msg").html("Seleciona os itens ímpares de uma lista não ordenada");
    });

    
    /* Seleciona os itens pares de uma lista ordenada */

    $("#ol_li_even").click(function(){
        clear();
        $("ol li:even").css('background-color','rgb(200,255,200)');
    });

    $("#ol_li_even").mouseover(function(){
         $("#msg").html("Seleciona os itens pares de uma lista ordenada");
    });

    /* ol li:odd*/
    
    $("#ol_li_odd").click(function(){
        clear();
        $("ol li:odd").css('background-color','rgb(200,255,200)');
    });

    $("#ol_li_odd").mouseover(function(){
         $("#msg").html("Seleciona os itens ímpares de uma lista ordenada");
    });

    /* Seleciona o primeiro parágrafo contido em um div*/
    
    $("#div_p_first").click(function(){
        clear();
        $("div p:first").html('ALTERADO').css('background-color','rgb(200,255,200)');
    });

    $("#div_p_first").mouseover(function(){
         $("#msg").html("Seleciona o primeiro parágrafo contido em um div");
    });

    /* Seleciona o último parágrafo contido em um div */
    
    $("#div_p_last").click(function(){
        clear();
        $("div p:last").html('ALTERADO').css('background-color','rgb(200,255,200)');
    });

    $("#div_p_last").mouseover(function(){
         $("#msg").html("Seleciona o último parágrafo contido em um div");
    });

    /* Seleciona os parágrafos pares contidos em um div */
    
    $("#div_p_even").click(function(){
        clear();
        $("div p:even").html('ALTERADO').css('background-color','rgb(200,255,200)');
    });

    $("#div_p_even").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos pares contidos em um div");
    });

    /* Seleciona os parágrafos ímpares contidos em um div*/
    
    $("#div_p_odd").click(function(){
        clear();
        $("div p:odd").html('ALTERADO').css('background-color','rgb(200,255,200)');
    });

    $("#div_p_odd").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos ímpares contidos em um div");
    });

    /* Limpa toda a formatação */

    $("#limpar").click(function(){
        clear();
    });

    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}
