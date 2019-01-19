/* Aula 006 - jQuery Selectors   All, Element, ID, Class e exemplos */

$(document).ready(iniciar);

function iniciar() {

    function clear(){
        $("*").css('color', '');
        $("p").show();
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona todos os parágrafos */

    $("#element_p").click(function(){
        clear();
        $("p").css('color','red');
    });

    $("#element_p").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos");
    });


    /* Seleciona o conteúdo de todos os div's */

    $("#element_div").click(function(){
        clear();
        $("div").css('color','red');
    });

    $("#element_div").mouseover(function(){
         $("#msg").html("Seleciona o conteúdo de todos os DIVs");
    });

    /* Seleciona todos os elementos de uma lista não ordenada */

    $("#element_ul").click(function(){
        clear();
        $("ul").css('color','red');
    });

    $("#element_ul").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos de uma lista não ordenada");
    });


    /* Seleciona todos os elementos de uma lista ordenada */

    $("#element_ol").click(function(){
        clear();
        $("ol").css('color','red');
    });

    $("#element_ol").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos de uma lista ordenada");
    });

    /* Seleciona todos os itens de uma lista ordenada ou não ordenada */

    $("#element_li").click(function(){
        clear();
        $("li").css('color','red');
    });

    $("#element_li").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de uma lista ordenada ou não ordenada");
    });


    /* Seleciona todos os títulos h3 */

    $("#element_h3").click(function(){
        clear();
        $("h3").css('color','red');
    });

    $("#element_h3").mouseover(function(){
         $("#msg").html("Seleciona todos os títulos h3");
    });

    /* Seleciona o conteúdo de todos os span's */

    $("#element_span").click(function(){
        clear();
        $("span").css('color','red');
    });

    $("#element_span").mouseover(function(){
         $("#msg").html("Seleciona o conteúdo de todos os span's");
    });

    /* Seleciona todos os elementos da página */
    
    $("#all").click(function(){
        clear();
        $("*").css('color', 'red');        
    });

    $("#all").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos da página");
    });

    /* Seleciona todos os parágrafos dentro de um div */

    $("#element_div_p").click(function(){
        clear();
        $("div p").css('color','red');
    });

    $("#element_div_p").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos dentro de um div");
    });

    /* Seleciona todos itens de uma lista não ordenada */
    
    $("#element_ul_li").click(function(){
        clear();
        $("ul li").css('color','red');
    });

    $("#element_ul_li").mouseover(function(){
         $("#msg").html("Seleciona todos itens de uma lista não ordenada");
    });

    /* Seleciona todos itens de uma lista ordenada */
    
    $("#element_ol_li").click(function(){
        clear();
        $("ol li").css('color','red');
    });

    $("#element_ol_li").mouseover(function(){
         $("#msg").html("Seleciona todos itens de uma lista ordenada");
    });

    /* ID */

    /* seleciona o parágrafo com id p1 */
    
    $("#id").click(function(){
        clear();
        $("#p1").css('color','red');
    });

    $("#id").mouseover(function(){
         $("#msg").html("Seleciona o parágrafo com id 'p1'");
    });

    /* Class */
    
    /* seleciona todos os parágrafos com classe p2 */
    
    $("#classe").click(function(){
        clear();
        $("p.p2").css('color','red');
    });

    $("#classe").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos com classe p2");
    });

    /* Exemplo */

    /* Exibe os três primeiros parágrafos ao clicar no elemento span */
    
    $("#exemplo").click(function(){
        clear();

        $("p").hide();

        $("span").click(function(){
            $("p").show();
        });
    });        

    $("#exemplo").mouseover(function(){
         $("#msg").html("Oculta os parágrafos que só serão exibidos ao clicar no elemento span");
    });
    
    /* Limpa formatação */    
        
    $("#limpar").click(function(){
        clear();
    });

    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });
    
}










