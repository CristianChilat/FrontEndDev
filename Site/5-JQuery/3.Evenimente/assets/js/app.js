$(document).ready(() => {

    let bgColor = "white"
    let buttonText = "Make page Blue"

    $("#button").html(buttonText);

    $("#button").click(() => { 
        if(bgColor === "white"){
            bgColor = "blue"
            buttonText = "Make page White"
        } else{
            bgColor = "white"
            buttonText = "Make page Blue"
        }
        $("#button").html(buttonText);
        $("body").css({
            backgroundColor: bgColor
        });
    
    });
    
    $(document).keydown(function(e){
        switch (e.which){
        case 37:    //left arrow key
            $("#mario").css({
                left: "-=50"
            });
            $("#mario").css("background-position", "-420px -10px");
            break;
        case 38:    //up arrow key
            $("#mario").css({
                top: "-=50"
            });
            $("#mario").css("background-position", "-4px -130px");
            break;
        case 39:    //right arrow key
            $("#mario").css({
                left: "+=50"
            });
            $("#mario").css("background-position", "-300px -10px");
            break;
        case 40:    //bottom arrow key
            $("#mario").css({
                top: "+=50"
            });
            $("#mario").css("background-position", "-245px -295px")
            break;
        }
    });
    
});