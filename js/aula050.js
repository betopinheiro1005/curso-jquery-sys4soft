$(document).ready(iniciar);

function iniciar() {

//    $("button#executar").click(function(){
//        $("#div1").wrap("<div class='segunda'>");
//    });

    $("button#executar").toggle(
        function(){
            $("#div1").wrap("<div class='segunda'>");
        },
        function(){
            $("#div1").unwrap();
        }     
    
    );



}
