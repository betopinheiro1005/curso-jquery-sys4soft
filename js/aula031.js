$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        return false;
    });

    $("#form1 input:text")
            .bind("focusin",{e: true},focus_background)
            .bind("focusout",{e: false},focus_background);

}

function focus_background(estado) {
    if (estado.data.e) {
        $(this).css('background-color', 'yellow');
    } else {
        $(this).css('background-color', 'white');
    }
}




