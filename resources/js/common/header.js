

$(document).ready(function(){
    $("#main_list_icon div").click(function(){

    $("#main_list_icon div a").css("background-color", "");
    $("#main_list_icon div img").css("filter", "");

    $(this).find("a").css
    ({"background-color" : "#415CBE" , "border-radius" : "6px"});
    $(this).find("img").css("filter" , "invert(1)")
    
    });

    
    $("#main_list_icon a").on({
        mouseenter: function(){

        $(this).closest("header").css
        ({width : "230px"});
        
        $(this).closest("header").find("h1 img").css({
            "width" : "200px"
        })

        $(this).closest("header").find("span").css({
            "display" : "inline-block" , 
            "transform" : "translateX(0)" ,
            transition: "width 0.5s ease"
        })

        }

    });

    $("header").on({
        mouseleave: function() {

        $(this).css
        ({width : "85px"});

        $(this).closest("header").find("h1 img").css({
            "width" : "80px"
        })

        $(this).find("span").css({
            "display": "none"
        })

        }

    })

});
