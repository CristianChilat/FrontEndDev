const figure = "Cerc";
const draw = (figure) => {
    if(figure !== "Circle" && figure !=="Square") {
        console.log("Unknown figure");
    } else {
        console.log(`${figure} drawed`);
    }
}

draw('Circle');
draw('Square');


