$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        return false;
    });

    $("#form1 input")
            .focusin(function () {
                $(this).css('background-color', 'yellow');
            })
            .focusout(function () {
                $(this).css('background-color', 'white');
            });

}

