$(document).ready(iniciar);

function iniciar(){

    /* BASIC FILTERS */

    function clear(){
        $("*").css('background-color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona o item de indice 1 da lista não ordenada */

    $("#ul_li_1").click(function(){
        clear();
        $("ul li:eq(1)").css('background-color','yellow');
    });

    $("#ul_li_1").mouseover(function(){
         $("#msg").html("Seleciona o item de indice 1 da lista não ordenada");
    });

    /* Seleciona todos os itens de índice par das listas ordenadas e não ordenadas */

    $("#ul_li_even_ol_li_even").click(function(){
        clear();
        $("ul li:even, ol li:even").css('background-color','yellow');
    });

    $("#ul_li_even_ol_li_even").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de índice par das listas ordenadas e não ordenadas");
    });

    /* Seleciona todos os itens de índice ímpar das listas ordenadas e não ordenadas */

    $("#ul_li_odd_ol_li_odd").click(function(){
        clear();
        $("ul li:odd, ol li:odd").css('background-color','yellow');
    });

    $("#ul_li_odd_ol_li_odd").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de índice ímpar das listas ordenadas e não ordenadas");
    });

    /* Seleciona o primeiro item das listas ordenadas e não ordenadas e dos div que contém parágrafos */

    $("#ul_li_first_ol_li_first_div_p_first").click(function(){
        clear();
        $("ul li:first, ol li:first, div p:first").css('background-color','yellow');
    });

    $("#ul_li_first_ol_li_first_div_p_first").mouseover(function(){
         $("#msg").html("Seleciona o primeiro item das listas ordenadas e não ordenadas e dos div que contém parágrafos");
    });

    /* Seleciona o último item das listas ordenadas e não ordenadas e dos div que contém parágrafos */

    $("#ul_li_last_ol_li_last_div_p_last").click(function(){
        clear();
        $("ul li:last, ol li:last, div p:last").css('background-color','yellow');
    });

    $("#ul_li_last_ol_li_last_div_p_last").mouseover(function(){
         $("#msg").html("Seleciona o último item das listas ordenadas e não ordenadas e dos div que contém parágrafos");
    });

    /* Seleciona os itens de índice maior que 0 das listas ordenadas e não ordenadas e dos div que contém parágrafos */

    $("#ul_li_gt0_ol_li_gt0_div_p_gt0").click(function(){
        clear();
        $("ul li:gt(0), ol li:gt(0), div p:gt(0)").css('background-color','yellow');
    });

    $("#ul_li_gt0_ol_li_gt0_div_p_gt0").mouseover(function(){
         $("#msg").html("Seleciona os itens de índice maior que 0 das listas ordenadas e não ordenadas e dos div que contém parágrafos");
    });

    /* Seleciona os itens de índice menor que 4 das listas ordenadas e não ordenadas e dos div que contém parágrafos */

    $("#ul_li_lt4_ol_li_lt4_div_p_lt4").click(function(){
        clear();
        $("ul li:lt(4), ol li:lt(4), div p:lt(4)").css('background-color','yellow');
    });

    $("#ul_li_lt4_ol_li_lt4_div_p_lt4").mouseover(function(){
         $("#msg").html("Seleciona os itens de índice menor que 4 das listas ordenadas e não ordenadas e dos div que contém parágrafos");
    });

    /* Seleciona os parágrafos de um div que não sejam da classe 'teste' */

    $("#div_p_not_p_teste").click(function(){
        clear();
        $("div p:not(p.teste)").css('background-color','yellow');
    });

    $("#div_p_not_p_teste").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos de um div que não sejam da classe 'teste'");
    });

    /* Seleciona os parágrafos de um div com excessão do parágrafo com id 'p2' */

    $("#div_not_p_id_p2").click(function(){
        clear();
        $("div p:not(p#p2)").css('background-color','yellow');
    });

    $("#div_not_p_id_p2").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos de um div com excessão do parágrafo com id 'p2'");
    });

    /* Seleciona os parágrafos de um div com excessão do parágrafo com id 'p1' */

    $("#div_not_p_id_p1").click(function(){
        clear();
        $("div p:not(p#p1)").css('background-color','yellow');
    });

    $("#div_not_p_id_p1").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos de um div com excessão do parágrafo com id 'p1'");
    });

    /* Seleciona todos os títulos h1 e h3 */

    $("#h1_h3").click(function(){
        clear();
        $("h1, h3").css('background-color','yellow');
    });

    $("#h1_h3").mouseover(function(){
         $("#msg").html("Seleciona todos os títulos h1 e h3");
    });

    /* Seleciona todos os títulos */

    $("#header").click(function(){
        clear();
        $(":header").css('background-color','yellow');
    });

    $("#header").mouseover(function(){
         $("#msg").html("Seleciona todos os títulos");
    });

    /* Seleciona todos os títulos dentro de um div */

    $("#td_div_header").click(function(){
        clear();
        $("td div :header").css('background-color','yellow');
    });

    $("#td_div_header").mouseover(function(){
         $("#msg").html("Seleciona todos os títulos dentro de um div");
    });

    /* Limpa toda a formatação */
    
    $("#limpar").click(function () {
        clear();
    });

    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });
    
}
