const colors = ["yellow", "pink", "green", "white", "black"]
const commands = ["start", "end"]
let index  = 0;
let totaBits = 0;

    document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body').style.backgroundColor = 'blue';
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = 'green';
    }, 500);
    document.getElementById('display').innerHTML += commands[0]    
    setInterval(() => {
        document.querySelector('body').style.backgroundColor = colors[index]
        if(index < colors.length){
            index++
        }else{
            index = 0
        }
        if(index % 3 == 0){
            document.getElementById('display').innerHTML += '1'
        }else{
            document.getElementById('display').innerHTML += '0'
        }
        totaBits++
        if(totaBits % 70 == 0){
            document.getElementById('display').innerHTML += '<br>'
        }
        if(totaBits > 4 * 70){
            totaBits = 0;
            document.getElementById('display').innerHTML += ''
        }
        // if(totaBits  4 * 70){
        //     document.getElementById('display').innerHTML = commands[1]
        // }
        
    }, 50);
});

