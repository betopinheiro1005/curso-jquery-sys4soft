/* Aula 005 - Função jQuery, alias da função e como usar no JavaScript */ 

/* Chamando a função com javascript */
// window.onload = iniciar;
 
/* função jQuery */ 
// jQuery(document).ready(iniciar); 

/* alias da função */
// $(iniciar); 

/* chamando a função */
$(document).ready(iniciar);

function iniciar(){
    // alert("Olá mundo!");
    // document.getElementById("p1").style.color = "blue";
    
    /* como usar */
    $("#p1").css('color','brown');
}



