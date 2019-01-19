$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $("*").css('background-color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona todos os elementos com atributo name */

    $("#name").click(function(){
        clear();
        $("[name]").css('background-color','yellow');
    });

    $("#name").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos com atributo name");
    });

    /* Seleciona todos os elementos com atributo alt */

    $("#alt").click(function(){
        clear();
        $("[alt]").css('background-color','yellow');
    });

    $("#alt").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos com atributo alt");
    });

    /* Seleciona todos os itens de uma lista não ordenada com atributo name */

    $("#li_name").click(function(){
        clear();
        $("li[name]").css('background-color','yellow');
    });

    $("#li_name").mouseover(function(){
         $("#msg").html("Seleciona todos os itens de uma lista não ordenada com atributo name");
    });

    /* Seleciona todos os parágrafos com atributo name */

    $("#p_name").click(function(){
        clear();
        $("p[name]").css('background-color','yellow');
    });

    $("#p_name").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos com atributo name");
    });

    /* Seleciona todos os parágrafos com atributo name dentro de um div */

    $("#div_p_name").click(function(){
        clear();
        $("td div p[name]").css('background-color','yellow');
    });

    $("#div_p_name").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos com atributo name dentro de um div");
    });

    /* Seleciona todos os parágrafos que não possuem atributo name dentro de um div */

    $("#div_not_p_name").click(function(){
        clear();
        $("td div :not(p[name])").css('background-color','yellow');
    });

    $("#div_not_p_name").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos que não possuem atributo name dentro de um div");
    });

    /* $limpar */
    
    $("#limpar").click(function () {
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}
