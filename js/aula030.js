$(document).ready(iniciar);

function iniciar() {

    $("#form1").submit(function () {
        return false;
    });

    var e = $("#inicio");
    var e1 = $("span#info1");
    var e2 = $("span#info2");
    var e3 = $("span#info3");
    var e4 = $("span#info4");

    $("input:text[name='nome']")
            .click(function () {
                e1.text("click").fadeIn("fast").fadeOut(3000);
            })
            .dblclick(function () {
                e1.text("dblclick").fadeIn("fast").fadeOut(3000);
            })
            .focusin(function () {
                e2.text("focusin");
            })
            .focusout(function () {
                e2.text("focusout");
            })
            .mouseenter(function () {
                e3.text("mouseenter").fadeIn("fast").fadeOut(3000);
            })
            .mouseleave(function () {
                e3.text("mouseleave").fadeIn("fast").fadeOut(3000);
            })
            .mouseover(function () {
                e4.text("mouseover");
            })
            .mouseout(function () {
                e4.text("mouseout");
            });

}

