$(document).ready(iniciar);

function iniciar() {

    $("p").mouseenter(function(){
        $(this).css({'background-color':'black', 'color':'white'});
    });

    $("p").mouseleave(function(){
        $(this).css({'background-color':'yellow', 'color':'black'});
    });


}



