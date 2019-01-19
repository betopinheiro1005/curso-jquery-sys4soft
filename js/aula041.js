$(document).ready(iniciar);

function iniciar() {

  $("#form_descarga").submit(function(){
    return false; 
  });


    /* ============================================================================================================ */

    $("#bt_foco_nome").mouseover(function () {
        $("#msg").html("Coloca o foco no campo 'nome'. Tira o foco ao entrar com o mouse dentro do campo.");
    });

    $("#bt_foco_nome").mouseout(function () {
        $("#msg").html("");
    });


    $("#bt_foco_email").mouseover(function () {
        $("#msg").html("Coloca o foco no campo 'email' e altera a cor do seu background para amarelo. Ao perder o foco o background volta ao normal");
    });

    $("#bt_foco_email").mouseout(function () {
        $("#msg").html("");
    });


    $("#bt_perde_foco_senha").mouseover(function () {
        $("#msg").html("A perda do foco no campo 'senha' altera a cor do texto e do background do botão 'enviar' que ao ser clicado retoma suas cores originais.");
    });

    $("#bt_perde_foco_senha").mouseout(function () {
        $("#msg").html("");
    });


    $("#bt_recarregar").mouseover(function () {
        $("#msg").html("Recarrega a página depois de 1 segundo.");
    });

    $("#bt_recarregar").mouseout(function () {
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_foco_nome").click(function () {
        $("form input:text[name='nome']").focus();
        $("form input:text[name='nome']").mouseenter(function () {
            $(this).blur();
        });
    });

    $("#bt_foco_email").click(function () {
        $("form input:text[name='email']").focus().css('background-color', 'yellow');
        $("form input:text[name='email']").blur(function () {
            $("form input:text[name='email']").css('background-color', '');
        });
    });

    $("#bt_perde_foco_senha").click(function () {
        $("form input:password[name='senha']").focus();
        $("form input:password[name='senha']").blur(function () {
            $("#enviar").css({'color': 'white', 'background-color': 'blue'});
        });
    });

    $("#enviar").click(function () {
        $(this).css({'color': '', 'background-color': ''});
    });


    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}

