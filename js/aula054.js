$(document).ready(iniciar);

function iniciar() {

    
    $("#bt_html_div1").mouseover(function(){
        $("#msg").html("É exibido o código HTML da div 1");
    });

    $("#bt_html_div1").mouseout(function(){
        $("#msg").html("");
    });
    

    $("#bt_text_div1").mouseover(function(){
        $("#msg").text("É exibido o texto da div 1");
    });

    $("#bt_text_div1").mouseout(function(){
        $("#msg").html("");
    });


    $("#bt_html_div2").mouseover(function(){
        $("#msg").html("É exibido o código HTML da div 2");
    });

    $("#bt_html_div2").mouseout(function(){
        $("#msg").html("");
    });
    

    $("#bt_text_div2").mouseover(function(){
        $("#msg").text("É exibido o texto da div 2");
    });

    $("#bt_text_div2").mouseout(function(){
        $("#msg").html("");
    });
    
    /* ============================================================================================================ */

    $("#bt_html_div").mouseover(function(){
        $("#msg").html("Código HTML das div's - Observe que somente é exibido o código HTML da primeira div encontrada!");
    });

    $("#bt_html_div").mouseout(function(){
        $("#msg").html("");
    });
    

    $("#bt_text_div").mouseover(function(){
        $("#msg").text("Texto das div's - Observe que o texto do paragráfo de id 'teste' é apresentado duas vezes");
    });

    $("#bt_text_div").mouseout(function(){
        $("#msg").html("");
    });
    
    /* ============================================================================================================ */
    
    $("#bt_html_id_teste").mouseover(function(){
        $("#msg").html("Altera o código HTML da div 'primeira' - Muda o texto do parágrafo com id 'teste' usando formatação HTML");
    });

    $("#bt_html_id_teste").mouseout(function(){
        $("#msg").html("");
    });
    

    $("#bt_text_id_teste").mouseover(function(){
        $("#msg").text("Altera o texto da div 1 - Muda o texto do parágrafo com id 'teste' ");
    });

    $("#bt_text_id_teste").mouseout(function(){
        $("#msg").html("");
    });

    $("#bt_recarregar").mouseover(function(){
        $("#msg").text("Recarrega a página depois de 1 segundo");
    });

    $("#bt_recarregar").mouseout(function(){
        $("#msg").html("");
    });
    
    
    /* ============================================================================================================ */
    
    // html

    $("#bt_html_div1").click(function(){
        alert($("#div1").html());
    });

    $("#bt_html_div2").click(function(){
        alert($("#div2").html());
    });

    $("#bt_html_div").click(function(){
        alert($("div").html());
    });

    // text

    $("#bt_text_div1").click(function(){
        alert($("#div1").text());
    });

    $("#bt_text_div2").click(function(){
        alert($("#div2").text());
    });

    $("#bt_text_div").click(function(){
        alert($("div").text());
    });

    // Altera texto de parágrafo com id="teste"
    
    $("#bt_text_id_teste").click(function(){
        $("#teste").text("Texto do parágrafo alterado");
    });
    
    // Altera texto de parágrafo com id="teste"
    
    $("#bt_html_id_teste").click(function(){
        $("#teste").html("<p class='segunda'>Texto do parágrafo alterado</p>");
    });
    
    $("#bt_recarregar").click(function(){
        setTimeout(function(){ location.reload(); }, 1000);
    });

}
