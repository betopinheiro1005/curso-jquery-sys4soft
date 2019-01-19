$(document).ready(iniciar);

function iniciar() {

    var numcliques_p1 = 0;
    var numcliques_p2 = 0;
    
    $("#p1").click(function(){
        numcliques_p1++;
        $("#info1").html("Cliques no Parágrafo 1 = " + numcliques_p1);
    });

//    $("#p2").click(function(){
//        numcliques_p2++;
//        $("#info2").html("Cliques no Parágrafo 2 = " + numcliques_p2);
//    });

    $("#p2").click(function(){
        numcliques_p2++;
        $("#info2").html("Cliques no Parágrafo 2 = " + numcliques_p2);
        $("#p1").trigger("click");
    });

}

