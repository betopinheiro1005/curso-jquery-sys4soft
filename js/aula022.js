$(document).ready(iniciar);

function iniciar(){

    function clear(){
        $("*").css('background-color', '');
        $("*").css('color', '');
        $("input[type='submit']").val('Enviar');
    }

    $("button").mouseleave(function(){
        $("#msg").html("");
    });

    /* Seleciona inputs do tipo 'text' */

    $("#input_text").click(function(){
        clear();
        $(":text").css('background-color','yellow');
    });

    $("#input_text").mouseover(function(){
         $("#msg").html("Seleciona inputs do tipo 'text'");
    });

    /* Seleciona inputs do tipo 'password' */

    $("#input_password").click(function(){
        clear();
        $(":password").css('background-color','yellow');
    });

    $("#input_password").mouseover(function(){
         $("#msg").html("Seleciona inputs do tipo 'password'");
    });

    /* Seleciona todos os elementos inputs */

    $("#input").click(function(){
        clear();
        $("input").css('background-color','yellow');
    });

    $("#input").mouseover(function(){
         $("#msg").html("Seleciona todos os elementos inputs");
    });


    /* Seleciona o input de nome 'email' */

    $("#input_name_email").click(function(){
        clear();
        $("input[name='email']").css('background-color','yellow');
    });

    $("#input_name_email").mouseover(function(){
         $("#msg").html("Seleciona o input de nome 'email'");
    });

    /* Seleciona o input de nome 'enviar' */

    $("#input_name_enviar").click(function(){
        clear();
        $("input[name='enviar']").css('background-color','yellow');
    });

    $("#input_name_enviar").mouseover(function(){
         $("#msg").html("Seleciona o input de nome 'enviar'");
    });

    /* Altera o 'value' do botão submit' para 'Cadastrar' */

    $("#input_submit").click(function(){
        clear();
        $("input[type='submit']").val('Cadastrar');
    });

    $("#input_submit").mouseover(function(){
         $("#msg").html("Altera o 'value' do botão submit' para 'Cadastrar'");
    });


    /* Bkiqyeua o envio dos dados do formulário */

    $("#form_submit_false").click(function(){
        clear();
        $("form").submit(function(){
            return false;
        });
    });

    $("#form_submit_false").mouseover(function(){
         $("#msg").html("Bloqueia o envio dos dados do formulário");
    });

    /* Limpa toda a formatação */

    $("#limpar").click(function(){
        clear();
    });
    
    $("#limpar").mouseover(function(){
         $("#msg").html("Limpa toda a formatação");
    });



}



