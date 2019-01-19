$(document).ready(iniciar);

function iniciar() {

    $("div").css("border-radius","10px");

    /* Deixa todos os div's (botões) transparentes */
    
    // $("div").css("opacity","0.4");
    $("div").fadeTo(1, 0.4);

    /* Definição do intervalo de fade */

    var intervalo = 200;

    /* Efeito de fadeTo para tornar opaco */

    $("div")
            .mouseenter(function(){
                $(this).fadeTo(intervalo, 1); // quando o ponteiro do mouse entra no box, ele fica opaco
            })
            .mouseleave(function(){
                $(this).fadeTo(intervalo, .4); // quando o ponteiro do mouse sai do box, ele fica transparente
            });

}
