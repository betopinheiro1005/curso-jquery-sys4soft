$(document).ready(iniciar);

function iniciar() {

    $("p").one("click",mudacor);
    
}

function mudacor(){
    $(this).css('color','red');
    alert("A cor do texto foi alterada");
}
