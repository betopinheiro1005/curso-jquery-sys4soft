$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $('*').css('background-color', '');
        $('*').css('color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona os elementos entre o parágrafo de id 'teste1' até o parágrafo de id 'teste2' */

    $("#p_id_teste1_nextuntil_teste2").click(function(){
        clear();
        $("p#teste1").nextUntil("p#teste2").css('background-color','yellow');
    });

    $("#p_id_teste1_nextuntil_teste2").mouseover(function(){
         $("#msg").html("Seleciona os elementos entre o parágrafo de id 'teste1' até o parágrafo de id 'teste2'");
    });

    /* Seleciona os elementos entre o parágrafo de id 'teste2' até o parágrafo de id 'teste1' */

    $("#p_id_teste2_prevuntil_teste1").click(function(){
        clear();
        $("p#teste2").prevUntil("p#teste1").css('background-color','green');
    });

    $("#p_id_teste2_prevuntil_teste1").mouseover(function(){
         $("#msg").html("Seleciona os elementos entre o parágrafo de id 'teste2' até o parágrafo de id 'teste1'");
    });

    /* Seleciona o primeiro item de uma lista ordenada ou não ordenada */

    $("#li_first").click(function(){
        clear();
        $("li").first().css('background-color','yellow');
    });

    $("#li_first").mouseover(function(){
         $("#msg").html("Seleciona o primeiro item de uma lista ordenada ou não ordenada");
    });

    /* Seleciona o último item de uma lista ordenada ou não ordenada */

    $("#li_last").click(function(){
        clear();
        $("li").last().css('background-color','yellow');
    });

    $("#li_last").mouseover(function(){
         $("#msg").html("Seleciona o último item de uma lista ordenada ou não ordenada");
    });

    /* Limpa toda a formatação */

    $("#limpar").click(function () {
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}
