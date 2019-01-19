$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $('*').css('background-color', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona parágrafos com atributos 'name' terminados em 'ao' */

    $("#p_name_fim_ao").click(function(){
        clear();
        $("p[name$='ao']").css('background-color','yellow'); // class termina com "ao"
    });

    $("#p_name_fim_ao").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos 'name' terminados em 'ao'");
    });

    /* Seleciona parágrafos com atributos 'name' terminados em 'o' */

    $("#p_name_fim_o").click(function(){
        clear();
        $("p[name$='o']").css('background-color','yellow'); // class termina com "o"
    });

    $("#p_name_fim_o").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos 'name' terminados em 'o'");
    });

    /* Seleciona parágrafos com atributos 'name' que contenham a substring 'joao' */

    $("#p_name_contem_joao").click(function(){
        clear();
        $("p[name*='joao']").css('background-color','yellow');
    });

    $("#p_name_contem_joao").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos 'name' que contenham a substring 'joao'");
    });

    /* Seleciona parágrafos com atributos 'name' que contenham 'joao' como uma palavra */

    $("#p_name_contem_joao_separado").click(function(){
        clear();
        $("p[name~='joao']").css('background-color','yellow'); 
    });

    $("#p_name_contem_joao_separado").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos 'name' que contenham 'joao' como uma palavra");
    });

    /* Seleciona parágrafos com atributos 'lang' que contenham o prefixo 'pt' */

    $("#p_lang_prefix_pt").click(function(){
        clear();
        $("p[lang|='pt']").css('background-color','yellow'); // atributo prefix (é necessário estar isolado ou seguido de hífen
    });

    $("#p_lang_prefix_pt").mouseover(function(){
         $("#msg").html("Seleciona parágrafos com atributos 'lang' que contenham o prefixo 'pt'");
    });

    $("#limpar").click(function () {
        clear();
    });

    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });

}
