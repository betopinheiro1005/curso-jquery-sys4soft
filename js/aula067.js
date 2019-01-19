$(document).ready(iniciar);

function iniciar() {

    var intervalo = 5000; // tempo em milissegundos
    var tempo = "";
    
    if (intervalo < 1000) {
        tempo = intervalo + " milissegundos";
    } else if(intervalo >= 1000 && intervalo < 2000){
        tempo = (intervalo/1000) + " segundo";
    } else {
        tempo = (intervalo/1000) + " segundos";
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_linear").mouseenter(function () {
        $("#msg").html("Animação com fadeOut e efeito linear no BOX 1 durante " + tempo);
    });

    $("#bt_linear").mouseout(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_swing").mouseenter(function () {
        $("#msg").html("Animação com fadeOut e efeito swing no BOX 2 durante " + tempo);
    });

    $("#bt_swing").mouseout(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseover(function () {
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function () {
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_linear").click(animar1);

    function animar1() {
        aguarde();
        $("#animar1").fadeOut(6000, "linear", mensagem);
        $(this).attr('disabled', 'disabled');
    }

    $("#bt_swing").click(animar2);

    function animar2() {
        aguarde();
        $("#animar2").fadeOut(6000, "swing", mensagem);
        $(this).attr('disabled', 'disabled');
    }

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
