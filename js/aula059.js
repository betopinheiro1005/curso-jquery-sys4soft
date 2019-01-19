$(document).ready(iniciar);

function iniciar() {
    
   
    $("#bt_titulop2").mouseover(function(){
        $("#msg").html("Exibe o atributo 'título' do parágrafo 2");
    });

    $("#bt_titulop2").mouseout(function(){
        $("#msg").html("");
    });



    $("#bt_altp3").mouseover(function(){
        $("#msg").html("Exibe o atributo 'alt' do parágrafo 3");
    });

    $("#bt_altp3").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_titulop").mouseover(function(){
        $("#msg").html("Exibe o título dos parágrafos, porém apenas o título do parágrafo 1 é exibido!");
    });

    $("#bt_titulop").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_titulop2").click(function(){
        $("#info").html($("#p2").attr("titulo"));
    });

    $("#bt_altp3").click(function(){
        $("#info").html($("#p3").attr("alt"));
    });

    $("#bt_titulop").click(function(){
        $("#info").html($("p").attr("titulo"));
    });

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}
