$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $('*').css('background-color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona parágrafos com atributos 'name' em um div */

    $("#div_p_name").click(function(){
        clear();
        $("div p[name]").css('background-color','yellow');
    });

    $("#div_p_name").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos 'name' em um div");
    });

    /* Seleciona parágrafos com atributos 'name = olept' em um div */

    $("#div_p_name_olept").click(function(){
        clear();
        $("div p[name=olept]").css('background-color','yellow');
    });

    $("#div_p_name_olept").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos 'name = olept' em um div");
    });

    /* Seleciona parágrafos com atributos 'id' e name = olept' e 'alt' em um div */

    $("#div_p_id_name_olept_alt").click(function(){
        clear();
        $("div p[id][name=olept][alt]").css('background-color','yellow');
    });

    $("#div_p_id_name_olept_alt").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos 'id', name = olept' e 'alt' em um div");
    });


    /* Seleciona parágrafo com atributo 'id = p1' e 'name' em um div */

    $("#div_p_id_p1_name").click(function(){
        clear();
        $("div p[id=p1][name]").css('background-color','yellow');
    });

    $("#div_p_id_p1_name").mouseover(function(){
         $("#msg").html("Seleciona parágrafo com atributo 'id = p1' e 'name' em um div");
    });

    /* Seleciona parágrafos com atributos 'id', 'name' e 'alt' em um div */

    $("#div_p_id_name_alt").click(function(){
        clear();
        $("div p[id][name][alt]").css('background-color','yellow');
    });

    $("#div_p_id_name_alt").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos 'id', 'name' e 'alt' em um div");
    });


    /* Seleciona parágrafos com atributos id, name e alt = 'teste1' em um div */

    $("#div_p_id_name_alt_teste1").click(function(){
        clear();
        $("div p[id][name][alt=teste1]").css('background-color','yellow');
    });

    $("#div_p_id_name_alt_teste1").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos id, name e alt = 'teste1' em um div");
    });


    $("#limpar").click(function () {
        clear();
    });

    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}



