$(document).ready(iniciar);

function iniciar() {

    // associar um evento ao parágrafo 1
    $("#p1").click(function(){
        alert("Você clicou no Parágrafo 1");
    });

    // remover todos os eventos associados ao parágrafo 1
    $("#p2").click(function(){
        $("#p1").off();
        $("#p1").html("Parágrafo 1 sem eventos associados");
        alert("Você removeu os eventos associados ao Parágrafo 1");
    });

    // associar um evento ao parágrafo 3
    $("#p3").live("click",function(){
        alert("Você clicou no Parágrafo 3");
    });

    // remover todos os eventos associados ao parágrafo 3
    $("#p4").click(function(){
        $("#p3").die();
        $("#p3").html("Parágrafo 3 sem eventos associados");
        alert("Você removeu os eventos associados ao Parágrafo 3");
    });



}


