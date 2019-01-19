$(document).ready(iniciar);

function iniciar() {

    var num = 0;
    var valores = ["red","green","yellow","brown","blue","gray"];

    $("#form1").submit(function () {
        return false;
    });

    // Atribuir um evento click ao botão

    $("#bt_executar").click(function () {
        // buscar os elementos 'p'
        $("p").each(function(){
            $(this).html("O novo valor é " + num).css('background-color',valores[num]);
            num++;
        });
    });
    
    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}

