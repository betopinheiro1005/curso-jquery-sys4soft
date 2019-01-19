$(document).ready(iniciar);

function iniciar() {

    var intervalo = 5500; // tempo em milissegundos
    var frame_rate = 200;
    var tempo = "";
    
    if (intervalo < 1000) {
        tempo = intervalo + " milissegundos";
    } else if(intervalo >= 1000 && intervalo < 2000){
        tempo = (intervalo/1000) + " segundo";
    } else {
        tempo = (intervalo/1000) + " segundos";
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_animar").mouseenter(function(){
        $("#msg").html("Efeito com animação durante " + tempo);
    });

    $("#bt_animar").mouseleave(function(){
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_sem_animar").mouseenter(function(){
        $("#msg").html("Efeito sem animação");
    });

    $("#bt_sem_animar").mouseleave(function(){
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_interval").mouseenter(function(){
        $("#msg").html("Altera o frame rate da animação para " + frame_rate + ". O valor default é 13");
    });

    $("#bt_interval").mouseleave(function(){
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseleave(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_animar").click(function(){
        jQuery.fx.interval = 13;
        jQuery.fx.off = false;
        aguarde();
        $("div").toggle(intervalo, mensagem);
    });

    $("#bt_sem_animar").click(function () {
        jQuery.fx.off = true;
        $("div").toggle(intervalo);
    });

    $("#bt_interval").click(function(){
        jQuery.fx.interval = 200;
        jQuery.fx.off = false;
        aguarde();
        $("div").toggle(intervalo, mensagem);
    });


    function mensagem(){
        $("#info").html("Animação finalizada!").css({"color":"white", "background-color": "blue", "width": "200px", "padding": "10px", "text-align": "center"});
    }
    
    function aguarde(){
        $("#info").html("Aguarde...").css({"color":"white", "background-color": "blue", "width": "200px", "padding": "10px", "text-align": "center"});        
    }


    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
