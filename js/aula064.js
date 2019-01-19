$(document).ready(iniciar);

function iniciar() {

    var intervalo = 3000; // tempo em milissegundos
    var tempo = "";

    var tempo = "";
    
    if (intervalo < 1000) {
        tempo = intervalo + " milissegundos";
    } else if(intervalo >= 1000 && intervalo < 2000){
        tempo = (intervalo/1000) + " segundo";
    } else {
        tempo = (intervalo/1000) + " segundos";
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_animar1").mouseenter(function(){
        $("#msg").html("Efeito toggle com o BOX 1 durante " + tempo);
    });

    $("#bt_animar1").mouseleave(function(){
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_animar2").mouseenter(function(){
        $("#msg").html("Efeito toggle com o BOX 2 durante " + tempo);
    });

    $("#bt_animar2").mouseleave(function(){
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_animar3").mouseenter(function(){
        $("#msg").html("Efeito toggle com o BOX 3 durante " + tempo);
    });

    $("#bt_animar3").mouseleave(function(){
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_animar").mouseenter(function(){
        $("#msg").html("Efeito toggle com os boxes exibidos e ocultos durante " + tempo);
    });

    $("#bt_animar").mouseleave(function(){
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_animar1").click(function(){
        $("#animar1").toggle(intervalo);
    });

    $("#bt_animar2").click(function(){
        $("#animar2").toggle(intervalo);
    });

    $("#bt_animar3").click(function () {
        $("#animar3").toggle(intervalo);
    });

    $("#bt_animar").click(function () {
        $("div").toggle(intervalo);
    });

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
