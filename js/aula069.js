$(document).ready(iniciar);

function iniciar() {

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_noticia1").mouseover(function () {
        $("#msg").html("Exibe a primeira notícia");
    });

    $("#bt_noticia1").mouseout(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_noticia2").mouseover(function () {
        $("#msg").html("Exibe a segunda notícia");
    });

    $("#bt_noticia2").mouseout(function () {
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

    $("#noticia1").hide();
    $("#noticia2").hide();

    $("#bt_noticia1").click(noticia1);
    $("#bt_noticia2").click(noticia2);

    function noticia1() {
        $("#noticia1").show().html("<p class='primeira'>Primeira notícia:<br /><br /><strong>Marcelo Odebrecht entrega 43 e-mails relativos à ação do sítio de Atibaia.</strong><br /><br />Segundo defesa, mensagens entregues a Moro reforçam o que Marcelo disse na delação sobre a relação da Odebrecht com o ex-presidente Lula.</p>");
        $("#noticia2").hide();
    }

    function noticia2() {
        $("#noticia2").show().html("<p class='segunda'>Segunda notícia:<br /><br /><strong>Redistribuição de processos para nova vara é questionada pelo MP</strong><br /><br>Nova vara vai cuidar de casos de corrupção e recebeu processos que já estavam em andamento.<br /> Representação foi enviada ao TRF1.</p>");
        $("#noticia1").hide();
    }

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
