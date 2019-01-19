$(document).ready(iniciar);

function iniciar() {

    $("img#teste").error(function(){
        alert("Erro no carregamento da imagem!");
    });

    var n = 0;

    $(window).resize(function(){
        $("#info").text(n++);
    });

//    $(window).scroll(function(){
//        alert("Disparado o evento scroll");
//    });

    $("#teste2").scroll(function(){
        $("p#info").html("Disparado o evento scroll");
    });



}

