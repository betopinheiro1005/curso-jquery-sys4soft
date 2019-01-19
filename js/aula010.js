$(document).ready(iniciar);

function iniciar(){

    /* basic selectors */

    function clear(){
        $("*").css('color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });


    /* Seleciona todos os elementos da página */

    $("#all").click(function(){
        clear();
        $("*").css('color','red');
    });

    $("#all").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos da página");
    });

    /* Seleciona todos os elementos com classe 'teste' */

    $("#class_teste").click(function(){
        clear();
        $(".teste").css('color','red');
    });

    $("#class_teste").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos com classe 'teste'");
    });
    
    /* Seleciona todos os itens de uma lista ordenada ou não ordenada */

    $("#li").click(function(){
        clear();
        $("li").css('color','red');
    });

    $("#li").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de uma lista ordenada ou não ordenada");
    });
    
    /* Seleciona todos os itens de uma lista não ordenada */

    $("#ul_li").click(function(){
        clear();
        $("ul li").css('color','red');
    });

    $("#ul_li").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de uma lista não ordenada");
    });
    
    /* Seleciona todos os itens de uma lista ordenada */

    $("#ol_li").click(function(){
        clear();
        $("ol li").css('color','red');
    });

    $("#ol_li").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de uma lista ordenada");
    });
    
    /* Seleciona todos os parágrafos */

    $("#p").click(function(){
        clear();
        $("p").css('color','red');
    });

    $("#p").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos");
    });
    
    /* Seleciona todos os parágrafos dentro de um div */

    $("#div_p").click(function(){
        clear();
        $("div p").css('color','red');
    });

    $("#div_p").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos dentro de um div");
    });
    
    /* Seleciona o parágrafo com id 'p1' */

    $("#div_id_p1").click(function(){
        clear();
        $("#p1").css('color','red');
    });

    $("#div_id_p1").mouseover(function(){
         $("#msg").html("Seleciona o parágrafo com id 'p1'");
    });
    
    /* Seleciona o parágrafo com id 'p2' */

    $("#div_id_p2").click(function(){
        clear();
        $("#p2").css('color','red');
    });

    $("#div_id_p2").mouseover(function(){
         $("#msg").html("Seleciona o parágrafo com id 'p2'");
    });

    /* Seleciona todos os itens de uma lista não ordenada e todos os parágrafos de um div */

    $("#ul_li_div_p").click(function(){
        clear();
        $("ul li, div p").css('color','red'); // multiple selector
    });

    $("#ul_li_div_p").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de uma lista não ordenada e todos os parágrafos de um div");
    });

    /* #limpar */
    
    $("#limpar").click(function () {
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });


}



