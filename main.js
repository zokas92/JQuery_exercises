$(document).ready(function() {

    //Zadatak 1

    $("#btn1").click(function(){
        $("p").append("<b>Appended text</b>");});
        
        $("#btn2").click(function(){
            $("ol").append("<li>Appended item</li>");
        });
        $("#btn3").click(function(){
            $("ol li:last-child").detach();
        });
        $('#btn4').click(function(){
            $("p b:first-child").remove();
        });

        

        // Zadatak 2
            var lastClickedButton;

            $(".btn").click(function(){
                // Čuvanje ID-ja poslednjeg kliknutog dugmeta u promenljivoj
                lastClickedButton = $(this).data("button-id");
            });

            $("#button4").click(function(){
                // Prikazivanje poslednjeg kliknutog dugmeta
                if (lastClickedButton) {
                    alert("Poslednje kliknuto dugme: " + lastClickedButton);
                } else {
                    alert("Nijedno dugme nije kliknuto.");
                }
            });
       
        
    });

