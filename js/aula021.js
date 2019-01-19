$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $('*').css('background-color', '');
        $('*').css('color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona o pai de itens de uma lista não ordenada */

    $("#li_parent").click(function(){
        clear();
        $("li").parent().css('background-color','yellow');
    });

    $("#li_parent").mouseover(function(){
         $("#msg").html("Seleciona o pai de itens de uma lista não ordenada");
    });

    /* Seleciona os pais de um parágrafo com id 'teste1' até uma div */

    $("#p_id_teste1_parents_div").click(function(){
        clear();
        $("p#teste1").parents("div").css('background-color','yellow');
    });

    $("#p_id_teste1_parents_div").mouseover(function(){
         $("#msg").html("Seleciona os pais de um parágrafo com id 'teste1' até uma div");
    });

    /* Seleciona o pai de um parágrafo com id 'teste1' */

    $("#p_id_teste1_parent").click(function(){
        clear();
        $("p#teste1").parent().css('background-color','yellow');
    });

    $("#p_id_teste1_parent").mouseover(function(){
         $("#msg").html("Seleciona o pai de um parágrafo com id 'teste1'");
    });

    /* Seleciona os pais de um parágrafo com id 'teste1' até div de id 'avo' */

    $("#p_id_teste1_parentsuntil_div_id_avo").click(function(){
        clear();
        $("p#teste1").parentsUntil("div#avo").css('background-color','yellow');
    });

    $("#p_id_teste1_parentsuntil_div_id_avo").mouseover(function(){
         $("#msg").html("Seleciona os pais de um parágrafo com id 'teste1' até div de id 'avo'");
    });

    /* Seleciona os pais de um parágrafo com id 'teste1' até div de id 'bisavo' */

    $("#p_id_teste1_parentsuntil_div_id_bisavo").click(function(){
        clear();
        $("p#teste1").parentsUntil("div#bisavo").css('background-color','yellow');
    });

    $("#p_id_teste1_parentsuntil_div_id_bisavo").mouseover(function(){
         $("#msg").html("Seleciona os pais de um parágrafo com id 'teste1' até div de id 'bisavo'");
    });

    /* Limpa toda a formatação */

    $("#limpar").click(function () {
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}



