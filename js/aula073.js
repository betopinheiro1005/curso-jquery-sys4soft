$(document).ready(iniciar);

function iniciar() {

    var intervalo = 6000; // tempo em milissegundos
    var tempo = "";
    
    if (intervalo < 1000) {
        tempo = intervalo + " milissegundos";
    } else if(intervalo >= 1000 && intervalo < 2000){
        tempo = (intervalo/1000) + " segundo";
    } else {
        tempo = (intervalo/1000) + " segundos";
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_animar").mouseenter(function () {
        $("#msg").html("Animação com slideUp e slideDow - duração: " + tempo);
    });

    $("#bt_animar").mouseleave(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(function () {
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseleave(function () {
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_animar").click(animar1);

    function animar1() {
        if ($("div").is(":hidden")) {
            aguarde1();
            $("div").slideDown(intervalo, function () {
                mensagem1();
            });
        } else {
            aguarde2();
            $("div").slideUp(intervalo, function () {
                mensagem2();
            });
        }
    }

    function mensagem1(){
        $("#info").html("ANIMAÇÃO FINALIZADA! Boxes expandidos").css({"color":"white", "background-color": "blue", "width": "350px", "padding": "5px", "text-align": "center"});
    }

    function mensagem2(){
        $("#info").html("ANIMAÇÃO FINALIZADA! Boxes recolhidos").css({"color":"white", "background-color": "blue", "width": "350px", "padding": "5px", "text-align": "center"});
    }
    
    function aguarde1(){
        $("#info").html("AGUARDE! Expandindo os boxes...").css({"color":"white", "background-color": "blue", "width": "350px", "padding": "5px", "text-align": "center"});        
    }

    function aguarde2(){
        $("#info").html("AGUARDE! Recolhendo os boxes...").css({"color":"white", "background-color": "blue", "width": "350px", "padding": "5px", "text-align": "center"});        
    }

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
