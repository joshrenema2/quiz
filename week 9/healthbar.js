var health_state = {
    width:100,
    text:1000,
}


function decreaseHealth(){
    health_state.width -= 10;
    document.querySelector(".healthbar_percent").style.width = health_state.width + "%";
    health_state.text -= 100;
    document.querySelector(".healthbar_percent_number").innerText = health_state.text;
    // document.querySelector(".healthbar_percent").style.width = health_state.width + "%";
    //decrease the width
    //modify UI and associate the atributes with the state's width
}