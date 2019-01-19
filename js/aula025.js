$(document).ready(iniciar);

function iniciar(){
       
        $("#p1").click(function(){
            $("#p2").slideUp(2000);
            $("h5#info").html("Passe o mouse sobre o parágrafo 3");
        });
        
        $("#p3").hover(function(){
            $("#p2").slideDown(2000);
            $("h5#info").html("Clique no parágrafo 1");
        });


}



