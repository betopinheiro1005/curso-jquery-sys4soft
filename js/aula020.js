$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $('*').css('background-color', '');
        $('*').css('color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona todos os elementos de uma lista não ordenada */

    $("#ul").click(function(){
        clear();
        $("ul").css('background-color','yellow');
    });

    $("#ul").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos de uma lista não ordenada");
    });

    /* Seleciona todos os itens de uma lista ordenada ou não ordenada, exceto seus bullets */

    $("#li").click(function(){
        clear();
        $("li").css('background-color','yellow');
    });

    $("#li").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de uma lista ordenada ou não ordenada, exceto seus bullets");
    });

    /* Seleciona o item de id 'item3' em uma lista não ordenada */

    $("#li_id_item3").click(function(){
        clear();
        $("li#item3").css('background-color','yellow');
    });

    $("#li_id_item3").mouseover(function(){
         $("#msg").html("Seleciona o item de id 'item3' em uma lista não ordenada");
    });

    /* Seleciona os itens irmãos do item de id 'item3' em uma lista não ordenada */

    $("#li_id_item3_siblings").click(function(){
        clear();
        $("li#item3").siblings().css('background-color','yellow');
    });

    $("#li_id_item3_siblings").mouseover(function(){
         $("#msg").html("Seleciona os itens irmãos do item de id 'item3' em uma lista não ordenada");
    });


    /* Seleciona os itens de índice 1 e 2 em uma lista não ordenada */

    $("#li_slice_1_3").click(function(){
        clear();
        $("li").slice(1,3).css('background-color','yellow');
    });

    $("#li_slice_1_3").mouseover(function(){
         $("#msg").html("Seleciona os itens de índice 1 e 2 em uma lista não ordenada");
    });

    /* Seleciona o item de índice 0 até o item de índice 3 em uma lista não ordenada */

    $("#li_slice_0_4").click(function(){
        clear();
        $("li").slice(0,4).css('background-color','yellow');
    });

    $("#li_slice_0_4").mouseover(function(){
         $("#msg").html("Seleciona o item de índice 0 até o item de índice 3 em uma lista não ordenada");
    });

    /* Seleciona os parágrafos de índice 1 até o de índice 5 */

    $("#p_slice_1_6").click(function(){
        clear();
        $("p").slice(1,6).css('background-color','yellow');
    });

    $("#p_slice_1_6").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos de índice 1 até o de índice 5");
    });

    /* Seleciona todos os elementos do div com id div1 */

    $("#div_id_div1_children").click(function(){
        clear();
        $("div#div1").children().css('background-color','yellow');
    });

    $("#div_id_div1_children").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos do div com id div1");
    });


    /* Seleciona todos os parágrafos do div com id div1 */

    $("#div_id_div1_children_p").click(function(){
        clear();
        $("div#div1").children("p").css('background-color','yellow');
    });

    $("#div_id_div1_children_p").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos do div com id div1");
    });

    /* Limpa toda a formatação */

    $("#limpar").click(function () {
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}



