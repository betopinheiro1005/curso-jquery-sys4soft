$(document).ready(iniciar);

function iniciar() {

    $("#teste").css("margin-top", "130px");

    var distancia = 200;
    var num_vezes = 6;        
    var intervalo = 4000; // tempo em milissegundos
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
        $("#msg").html("Animação com o efeito bounce - distance = " + distancia + " e número de vezes = " + num_vezes);
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

    $("#bt_animar").click(function(){
        aguarde();
        $("#teste").effect("bounce",{distance: distancia, times: num_vezes}, intervalo, mensagem);
    });

    /* ------------------------------------------------------------------------------------------------------------ */

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
