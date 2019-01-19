$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        return false;
    });

    // $("#form1 input:text").bind("click dblclick",alertar);
    
    $("#form1").bind("click",info);

}

// function alertar() {
//     alert("Clicado em um elemento do tipo 'text'");
// }

function info(event){
    $("#info").text(event.target);
}



