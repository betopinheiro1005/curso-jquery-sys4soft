$(document).ready(iniciar);

function iniciar() {

    $("#caixa_selecao").change(function () {
        var opcao_selecionada = $(this).val();
        if (opcao_selecionada == "Opção 5") {
            $("#info").html("Escolhida a " + opcao_selecionada + ": Parabéns, você acertou!").css({'color':'green','font-size':'16px'});
        } else {
            $("#info").html("Escolhida a " + opcao_selecionada + ": Você errou! Tente outra vez!").css({'color':'red','font-size':'16px'});
        }
    });

    $("#bt_recarregar").click(function () {
        setTimeout(function () {
            location.reload();
        }, 1000);
    });

}
