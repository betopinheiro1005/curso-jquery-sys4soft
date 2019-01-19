$(document).ready(iniciar);

function iniciar() {

    var news1 = "<p class='primeira'>Primeira notícia:<br /><br /><strong>Marcelo Odebrecht entrega 43 e-mails relativos à ação do sítio de Atibaia.</strong><br /><br />Segundo defesa, mensagens entregues a Moro reforçam o que Marcelo disse na delação sobre a relação da Odebrecht com o ex-presidente Lula.</p>";
    var news2 = "<p class='segunda'>Segunda notícia:<br /><br /><strong>Redistribuição de processos para nova vara é questionada pelo MP</strong><br /><br>Nova vara vai cuidar de casos de corrupção e recebeu processos que já estavam em andamento.<br /> Representação foi enviada ao TRF1.</p>";

    $("#bt_noticia1").mouseenter(function () {
        $("#msg").html("Exibe a primeira notícia");
    });

    $("#bt_noticia1").mouseout(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_noticia2").mouseenter(function () {
        $("#msg").html("Exibe a segunda notícia");
    });

    $("#bt_noticia2").mouseout(function () {
        $("#msg").html("");
    });

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").mouseenter(function () {
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

    /* ------------------------------------------------------------------------------------------------------------ */

    function noticia1() {
        $("#bt_noticia1").attr('disabled', 'disabled');

        $("#noticia2").hide();
        $("#noticia1").fadeIn(4000).delay(1000).fadeOut(function () {
            $(this).show().html(news1);
        });
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    function noticia2() {
        $("#bt_noticia2").attr('disabled', 'disabled');

        $("#noticia1").hide();
        $("#noticia2").fadeIn(4000).delay(1000).fadeOut(function () {
            $(this).show().html(news2);
        });
    }

    /* ------------------------------------------------------------------------------------------------------------ */

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
