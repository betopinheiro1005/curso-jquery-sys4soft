$(document).ready(iniciar);

function iniciar(){

        document.getElementById("p1").onclick = function(){
            alert("Você clicou no Parágrafo 1");
        };
        
        $("#p2").css('background-color','yellow').click(clicou);

        function clicou(){
            alert("Você clicou no Parágrafo 2");
        }
}



