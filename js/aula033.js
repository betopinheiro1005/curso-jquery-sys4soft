$(document).ready(iniciar);

function iniciar() {

    $("p").toggle(
            function () {
                $("p").css({"color": "red"});
            },
            function () {
                $("p").css({"color": "blue"});
            },
            function () {
                $("p").css({"color": "green"});
            });

}


