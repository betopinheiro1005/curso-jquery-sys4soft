$(document).ready(iniciar);

function iniciar() {

    $("#p1")
            .bind("click", function () {
                alert("Você clicou no Parágrafo 1");
            })
            .bind("mouseenter", function () {
                $(this).css("background-color", "yellow");
            })
            .bind("mouseout", function () {
                $(this).css("background-color", "white");
            });

    $("#p2").one("click",function () {
        $("#p1").unbind("click");
        alert("Removido o evento click do Parágrafo 1");
    });

}

