$(document).ready(() => {
    $(".element").css({
        backgroundColor: "blue"
    })

    $("#element5").css({
        backgroundColor: "green"
    });

    for(let i = 1; i <= 10; i++){
        $(`#element${i}`).css({
            left: `${i * 10}px`
        })   
    }

    for(let i = 1; i <= 10; i++){
        $(`#element${i}`).animate({
            left: `+=${i * 10}`
        }, 2000);   
    }
    
    $(`#ball`).animate({
        left: `+=120`
    }, 500);

    $(`#ball`).animate({
        top: `+=100`,
        left: `+=2`
    }, 500);
    
    const ballColors = [
        "red", "green", "blue",
        "yellow", "black", "orange",
        "violet", "pink", "white"
    ];

    for (let index = 0; index < 10; index++) {
        $(`#ball`).animate({
            left: `+=20`
        }, 500);
    
        $(`#ball`).animate({
            top: `+=100`,
            left: `+=2`
        }, 500, "linear", () => {
            $("#ball").css({
                backgroundColor: ballColors[index]
            });
    
        });

        
        
    }
    
});