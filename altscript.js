var selectedOption = document.getSelection;

function textSpeak() {
    if(selectedOption){
        var text = document.getSelection().toString();
    }
    responsiveVoice.speak(text);
}

// function listen() {
//     if(selectedOption){
//         let btn = document.createElement("button");
//         btn.innerHTML = "Click Me";
//         document.body.appendChild(btn);
//     }
// }