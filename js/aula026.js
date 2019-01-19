$(document).ready(iniciar);

function iniciar() {

    function clear(){
        $("div#painel").css('background-color','yellow');
    }

    $("#p1").fadeOut("fast");
    $("#p2").fadeOut("fast");
    
    $("div#painel").mouseenter(function () {
        clear();
        $("#p1").html("Cursor entrou no painel").fadeIn("fast").fadeOut(2000);
        $("#p2").fadeIn("fast");
        $("#p2").html("Cursor está dentro do painel");
        $("#msg").html("mouseenter").fadeIn("fast").css('color', 'blue').fadeOut(2000);
    });

    $("div#painel").mouseleave(function () {
        clear();
        $("#p1").html("Cursor saiu do painel").fadeIn("fast").fadeOut(2000);
        $("#msg").html("mouseleave").fadeIn("fast").css('color', 'blue').fadeOut(2000);
        $(this).html("");
    });

    $("div#painel").mouseout(function () {
        clear();
        $("#p2").html("Cursor está fora do painel");
        $("#msg2").html("mouseout").css('color', 'blue');
        $("#msg3").html("").css('color', 'blue');
    });

    $("div#painel").mouseover(function () {
        clear();
        $("#p2").html("Cursor está dentro do painel");
        $("#msg2").html("mouseover").css('color', 'blue');
    });

    $("div#painel").mousemove(function (mouse) {
        clear();
        var mousex = 0;
        var mousey = 0;
        mousex = mouse.pageX - 194;
        mousey = mouse.pageY - 92;
        $(this).html("Posição X: " + mousex + "<br />Posição Y: " + mousey);
        $("#p2").html("Cursor está dentro do painel");
        $("#msg2").html("mouseover").css('color', 'blue');
        $("#msg3").html("mousemove").css('color', 'blue');
    });

    $("div#painel").click(function () {
        clear();
        $("#p1").html("Você deu um clique dentro do painel").fadeIn("fast").fadeOut(2000);
        $("#p2").html("Cursor está dentro do painel");
        $("#msg").html("click").fadeIn("fast").css('color', 'blue').fadeOut(2000);
    });


    $("div#painel").mousedown(function () {
        clear();
        $("#p1").html("Você está pressionando o botão do mouse dentro do painel").fadeIn("fast");
        $("#p2").html("Cursor está dentro do painel");
        $("#msg").html("mousedown").fadeIn("fast").css('color', 'blue');
    });

    $("div#painel").dblclick(function () {
        clear();
        $("#p1").html("Você deu um duplo clique dentro do painel").fadeIn("fast").fadeOut(2000);
        $("#p2").html("Cursor está dentro do painel");
        $("#msg").html("dblclick").fadeIn("fast").css('color', 'blue').fadeOut(2000);
    });

}



