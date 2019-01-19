$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $("*").css('background-color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona todos os elementos com classe 'joao' */

    $("#class_joao").click(function(){
        clear();
        $("[class='joao']").css('background-color','yellow');
    });

    $("#class_joao").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos com classe 'joao'");
    });


    /* Seleciona todos os parágrafos com classe 'joao' */

    $("#p_class_joao").click(function(){
        clear();
        $("p[class='joao']").css('background-color','yellow');
    });

    $("#p_class_joao").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos com classe 'joao'");
    });

    /* Seleciona todos os parágrafos com classe 'ribeiro' */

    $("#p_class_ribeiro").click(function(){
        clear();
        $("p[class='ribeiro']").css('background-color','yellow');
    });

    $("#p_class_ribeiro").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos com classe 'ribeiro'");
    });

    /* Seleciona todos os parágrafos com classe que se inicia por 'j' */

    $("#p_inicio_j").click(function(){
        clear();
        $("p[class^='j']").css('background-color','yellow'); 
    });

    $("#p_inicio_j").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos com classe que se inicia por 'j'");
    });

    /* Seleciona todos os parágrafos com classe que se inicia por 'a' */

    $("#p_inicio_a").click(function(){
        clear();
        $("p[class^='a']").css('background-color','yellow'); 
    });

    $("#p_inicio_a").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos com classe que se inicia por 'a'");
    });

    /* Seleciona todos os parágrafos com classe que se inicia por 'al' */

    $("#p_inicio_al").click(function(){
        clear();
        $("p[class^='al']").css('background-color','yellow');
    });

    $("#p_inicio_al").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos com classe que se inicia por 'al'");
    });

    /* #limpar */

    $("#limpar").click(function () {
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}

