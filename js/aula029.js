$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        return false;
    });

    $("#form1 input").focusin(fIn).focusout(fOut);

}

function fIn(){
    $(this).css('background-color', 'red');
}

function fOut(){
    $(this).css('background-color', 'white');
}

