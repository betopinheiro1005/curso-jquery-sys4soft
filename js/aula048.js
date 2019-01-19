$(document).ready(iniciar);

function iniciar() {

    $("#bt_addclass").mousemove(function(){
        $("#msg").html("Adiciona as classes 'cor1', 'fundo1' e 'borda1' ao item de índice 3 da lista");
    });

    $("#bt_addclass").mouseout(function(){
        $("#msg").html("");
    });

    
    $("#bt_hasclass").mousemove(function(){
        $("#msg").html("Verifica se o primeiro elemento da lista possui a classe 'cor1'");
    });

    $("#bt_hasclass").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_removeclass").mousemove(function(){
        $("#msg").html("Remove a classe 'cor1' do primeiro elemento da lista");
    });

    $("#bt_removeclass").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_recarregar").mousemove(function(){
        $("#msg").html("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });

    /* ============================================================================================================ */

    $("#bt_addclass").click(function () {
        $("#msg").html("");
        // Adiciona uma classe a um elemento HTML
        $("ul li:eq(3)").addClass("cor1 fundo1 borda1");
        
        $(this).attr('disabled', 'disabled');
    });

    $("#bt_hasclass").click(function () {
        // Verifica se um elemento HTML tem uma determinada classe

        var tem_classe = $("ul li:first").hasClass("cor1");

        if (tem_classe)
            alert("O primeiro elemento da lista CONTÉM a classe 'cor1'");
        else
            alert("O primeiro elemento da lista NÃO CONTÉM a classe 'cor1'");
    });
    
    $("#bt_removeclass").click(function () {
        $("#msg").html("");
        // Remove uma classe de um elemento HTML
        $("ul li:first").removeClass("cor1");
        $('#elemento').attr('disabled', 'disabled');
        $(this).attr('disabled', 'disabled');
    });

    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });
    
}

