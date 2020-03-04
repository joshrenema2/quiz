var current_state = -1;

var statusbar_state = [
    {
        color:"green",
        text:"good",
    },
    {
        color:"yellow",
        text:"pending",
    },
    {
        color:"red",
        text:"bad",
    }
]

function changeColor(){
    current_state++;

    document.querySelector(".status_bar").style.backgroundColor = statusbar_state[current_state].color;
    document.querySelector(".statusbar_text").innerText = statusbar_state[current_state].text;
}