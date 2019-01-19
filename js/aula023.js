$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $("*").css('background-color', '');
        $("*").css('color', '');
        $("*").css('border', '');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona todos os parágrafos do div com id 'div1' */

    $("#div_id_div1").click(function(){
        clear();
        $("div#div1 p").css('border','solid 1px black');
    });

    $("#div_id_div1").mouseover(function(){
         $("#msg").html("Seleciona todos os parágrafos do div com id 'div1'");
    });

    /* Seleciona os parágrafos filhos diretos do div com id 'div1' */

    $("#div_id_div1_p").click(function(){
        clear();
        $("div#div1 > p").css('border','solid 1px black');
    });

    $("#div_id_div1_p").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos filhos diretos do div com id 'div1'");
    });


    /* Seleciona os parágrafos de classe 'p1' do div com id 'div2' */

    $("#div_id_div2_class_p1").click(function(){
        clear();
        $("div#div2 .p1").css('border','solid 1px black');
    });

    $("#div_id_div2_class_p1").mouseover(function(){
         $("#msg").html("Seleciona os parágrafos de classe 'p1' do div com id 'div2'");
    });

    /* Seleciona parágrafos de classe 'p1' que aparecem logo após parágrafos de classe 'p2' */

    $("#p_class_p2_plus_p_class_p1").click(function(){
        clear();
        $("p.p2 + p.p1").css('border','solid 1px black');
    });

    $("#p_class_p2_plus_p_class_p1").mouseover(function(){
         $("#msg").html("Seleciona parágrafos de classe 'p1' que aparecem logo após parágrafos de classe 'p2'");
    });

    /* Seleciona parágrafo de classe 'p2' que aparece logo após um ou mais parágrafos de classe 'p1' */

    $("#p_class_p1_plus_p_class_p2").click(function(){
        clear();
        $("p.p1 + p.p2").css('border','solid 1px black');
    });

    $("#p_class_p1_plus_p_class_p2").mouseover(function(){
         $("#msg").html("Seleciona parágrafo de classe 'p2' que aparece logo após um ou mais parágrafos de classe 'p1'");
    });

    /* Seleciona parágrafos irmãos que aparecem após o parágrafo com id 'teste' */

    $("#p_id_teste_til_p").click(function(){
        clear();
        $("p#teste ~ p").css('border','solid 1px black');
    });

    $("#p_id_teste_til_p").mouseover(function(){
         $("#msg").html("Seleciona parágrafos irmãos que aparecem após o parágrafo com id 'teste'");
    });

    /* Seleciona span irmãos que aparecem após o parágrafo com id 'teste' */

    $("#p_id_teste_til_span").click(function(){
        clear();
        $("p#teste ~ span").css('border','solid 1px black');
    });

    $("#p_id_teste_til_span").mouseover(function(){
         $("#msg").html("Seleciona span irmãos que aparecem após o parágrafo com id 'teste'");
    });



    /* Limpa toda a formatação */

    $("#limpar").click(function(){
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });



}



